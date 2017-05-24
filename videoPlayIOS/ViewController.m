//
//  ViewController.m
//  videoPlayIOS
//
//  Created by 管理员 on 2017/5/19.
//  Copyright © 2017年 Animy. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    
    NSURL *jsCodeLocation;
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"videoPlayIOS"
                                                 initialProperties:nil
                                                     launchOptions:nil];
  
    rootView.frame = self.view.frame;
    [self.view addSubview:rootView];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
