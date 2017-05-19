//
//  AppDelegate.h
//  videoPlayIOS
//
//  Created by 管理员 on 2017/5/19.
//  Copyright © 2017年 Animy. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

