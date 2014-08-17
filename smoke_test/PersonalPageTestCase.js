/**
 * Created by dongdaqing on 14-2-12.
 */

#import "HomePageTestCase.js"
#import "../utils/Util.js"
#import "../utils/tuneup_js/uiautomation-ext.js"
#import "../utils/tuneup_js/lang-ext.js"
#import "../common/PersonalPageResources.js"

var PersonalPageTestCase = {

    target: UIATarget.localTarget(),
    app: UIATarget.localTarget().frontMostApp(),
    window: UIATarget.localTarget().frontMostApp().mainWindow(),

    assert_in_PersonalPage: function(){
        //追剧按钮
        var act_name = this.window.buttons()[6].name();
        var exp_name = PersonalPageResources.buttons_6;
        assertEquals(exp_name,act_name,"Not in PersonalPage");
    },

    assert_in_SetPage:function(exp_name){
        var act_name = this.window.tableViews()[0].cells()[1].name();
        assertEquals(exp_name,act_name,"Not in SetPage");
    },

    assert_in_LoginPage: function(exp_name){
        var act_name = this.window.navigationBar().name();
        assertEquals(exp_name,act_name,"Not in LoginPage");
    },

    setPageBacktoPrePage: function(){
        this.window.navigationBar().buttons()[0].tap();
        this.assert_in_PersonalPage();
    },

    userLogin: function(){
        var home = HomePageTestCase;
        home.clickPersonalIcon();
        this.assert_in_PersonalPage();
        //点击“未登录”
        this.window.staticTexts()[0].tap();
        this.assert_in_LoginPage(PersonalPageResources.navi_name);
        //判断是否是第一次登录，如果是，清除用户名
        var x_button = this.window.scrollViews()[0].tableViews()[0].cells()[0].textFields()[0].buttons()[0];
        if(x_button.isValid()){
            x_button.tap();
        }
        //焦点定位到用户名
        this.window.scrollViews()[0].tableViews()[0].cells()[0].textFields()[0].tap();
        this.app.keyboard().typeString("306621082");
        //焦点定位到密码
        this.window.scrollViews()[0].tableViews()[0].cells()[1].secureTextFields()[0].tap();
        this.app.keyboard().typeString("123456");
        //点击登录
        this.window.scrollViews()[0].tableViews()[0].groups()[0].buttons()[1].tap();
        //等待5秒，避免有网络延迟
        Util.delay(5);
        this.assert_in_PersonalPage();
    },

    userLogout: function(){
        var home = HomePageTestCase;
        home.clickPersonalIcon();
        this.assert_in_PersonalPage();
        //点击用户名的静态文本
        this.window.staticTexts()[0].tap();
        //点击注销按钮
        this.window.tableViews()[0].buttons()[0].tap();
        //处理是否注销
        this.app.alert().defaultButton().tap();
        Util.delay(3);
        //处理是否保留历史记录
        this.app.alert().cancelButton().tap();
        this.setPageBacktoPrePage();
    }

}