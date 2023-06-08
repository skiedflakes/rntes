// RCTCalendarModule.m
#import "RCTMoviesModule.h"
#import <React/RCTLog.h>
@implementation RCTMoviesModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createMoviesEvent:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
  NSArray *movies = @[
    @{@"title": @"Iron Man II", @"year": @2010},
    @{@"title": @"Captain America", @"year": @2022},
    @{@"title": @"Thor", @"year": @2011},
    @{@"title": @"Avengers Infinity War", @"year": @2018},
    @{@"title": @"SpiderMan 2", @"year": @2011},
  ];

  callback(@[movies]);

}

@end
