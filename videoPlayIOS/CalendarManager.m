//
//  CalendarManager.m
//  videoPlayIOS
//
//  Created by 管理员 on 2017/5/23.
//  Copyright © 2017年 Animy. All rights reserved.
//

#import "CalendarManager.h"


@implementation CalendarManager


RCT_EXPORT_MODULE();


// 接收传过来的 NSString + NSDictionary
        RCT_EXPORT_METHOD(addEventTwo:(NSString *)name details:(NSDictionary *)details)
        {
            RCTLogInfo(@"接收传过来的NSString+NSDictionary: %@ %@", name, details);
        }


        //  对外提供调用方法,演示Callback
        RCT_EXPORT_METHOD(testCallbackEventOne:(NSString *)name callback:(RCTResponseSenderBlock)callback)
        {
            NSLog(@"%@",name); //RN 需要数据通知
            NSArray *events=@[@"IOS回调", @"name", @"animy"];
            //IOS准备回调数据
            callback(@[[NSNull null],events]);
        }


@end
