/**
 * Created by dongdaqing on 14-2-8.
 */


#import "HomePageTestSuite.js"
#import "PersonalPageTestSuite.js"
#import "DeviceInfo.js"
#import "LaunchPageTestCase.js"

//获取设备信息
Util.runTest("Device Info",function(){
    DeviceInfo.printDeviceInfo();
});

//启动(取消升级提示)
Util.runTest("Cancel Update Info",function(){
   LaunchPageTestCase.cancelUpdateInfo();
});

//首页测试用例
HomePageTestSuite.runHomePageTest();
//个人中心测试用例
PersonalPageTestSuite.runPersonalTest();
