

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image,
  TouchableOpacity,
  NativeModules
} = React;


/*
获取网络数据 进行listView展示。

需要一个state添加一个属性，用于下载状态
*/
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var CalendarManager = NativeModules.CalendarManager;

var ListData = React.createClass({

  // 设置初始状态值
  getInitialState:function () {
    var ds = new ListView.DataSource({
      rowHasChanged:(oldRow,newRow)=>oldRow !==newRow
    });
    return{
      loaded:false,   //下载标志是否改变
      dataSource:ds
    };
  },
//下载数据
  getData:function () {
    fetch(REQUEST_URL)
    .then((response)=>{
      return response.json();
    })
    //刷新组件，重新渲染组件  显示listView    得到新数据 更新dataSource
    .then((responseData)=>{
      this.setState({
        loaded:true,
        dataSource:this.state.dataSource.cloneWithRows(responseData.movies)
      });
    })
    .catch((error)=>{
      alert(error);
    });
  },

//组件开始挂载
  render:function () {
    //如果未请求到数据 提示“正在加载中...”
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    //电影列表
    return(
      <ListView
      style  ={styles.listView}
      dataSource = {this.state.dataSource}
      initialListSize = {10}
      renderHeader = {this._renderHeader}
      renderRow = {this._renderRow}
      renderSeparator = {this._renderSeparator}
      />
    );
  },
//挂件加载完成  下载数据
  componentDidMount:function () {
    this.getData();
  },
//开始加载数据
  renderLoadingView:function () {
    return(
      <View style = {styles.loadingContainer}>
        <Text style = {styles.loadingText}>加载中...</Text>
      </View>
    );
  },
//渲染 listview
  _renderRow:function (movie) {
    return(
      <View style={styles.container}>

               <Text style={styles.welcome} onPress={()=>this.passValueToNativeTwo()}>点击往原生传字符串+字典</Text>
            
               <Text style={styles.welcome} onPress={()=>this.callBackOne()}>点击调原生+回调</Text>

             </View>
    );
  },



     // 传原生一个字符串 + 字典
     passValueToNativeTwo:function (){
         CalendarManager.addEventTwo('周少停',{job:'programmer'});
     },


    // 传原生一个字符串 + 回调
    callBackOne :function (){
         CalendarManager.testCallbackEventOne(('我是RN给原生的'),function(error, events) {
            if (error) {
                console.error(error);
            } else {
                alert(events)
            }
        })
     }

});


var styles = StyleSheet.create({
  container: {
          flex: 1,
          marginTop:100
      },
      welcome: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
      },
      instructions: {
          textAlign: 'center',
          color: '#333333',
          marginBottom: 5,
      },
});

module.exports = ListData;
