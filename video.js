var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} = React;

import Video from 'react-native-video';

var VideoPlay = React.createClass({
  render:function () {
    return(
      <View style={styles.container}>
      <Video

                        source={{uri:"background.mp4"}} //视频播放地址
                        style={styles.video}      //样式
                        volum={4}                 //声音放大倍数
                        paused={false}            //true暂停 false开始
                        rate={1}   // 0 暂停 1正常
                        muted={false}   //true静音 false 正常
                        resizeMode='cover'//
                        repeat={false} //
                        onLoadStart={this._onLoadStart} //视频开始加载回调
                        onLoad={this._onLoad}           //视频加载完毕回调
                        onProgress={this._onProgress}   //每隔250ms调用一次
                        onEnd={this._onEnd}             //视频加载结束回调
                        onError={this._onError}         //视频加载错误回调
                        key = {"video"}
                    />
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
   },
   videoBox:{
       width:320,
       height:200,
       backgroundColor:'#000'
   },
   video:{
       width:320,
       height:200,
       backgroundColor:'#000'
   }

});

module.exports = VideoPlay;
