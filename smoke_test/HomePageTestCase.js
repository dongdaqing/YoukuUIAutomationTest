/**
 * Created by dongdaqing on 14-2-7.
 */

var HomePageTestCase = {

    target: UIATarget.localTarget(),
    app: UIATarget.localTarget().frontMostApp(),
    window: UIATarget.localTarget().frontMostApp().mainWindow(),

    clickSearchIcon: function(){
        var target = UIATarget.localTarget();
        var window = target.frontMostApp().mainWindow();
        window.buttons()[3].tap();
    },

    assert_in_searchPage: function(){

    },

    clickHistoryIcon: function(){
        this.checkHistoryHint();
        this.window.buttons()[2].tap();
    },

    clickUploadIcon: function(){

    },

    clickPersonalIcon: function(){
        this.app.tabBar().buttons()[2].tap();
    },

    playHomepageVideo: function(){
        this.window.tableViews()[0].tapWithOptions({tapOffset:{x:0.53, y:0.31}});
        Util.delay(10);
    },

    checkHistoryHint: function(){
        hint_button = this.window.buttons()[0];
        if (hint_button.isValid()){
            hint_button.tap();
        }
    }

//    //demo for UICatalog
//    obtain_tableCellName_0: function(){
//        var target = UIATarget.localTarget();
//        return target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].name();
//    },
//
//    //demo for UICatalog
//    assert_tableCellName_0: function(exp_name){
//        var act_name = this.obtain_tableCellName_0();
//        assertEquals(exp_name,act_name,"wrong");
//    }

}

//HomePageTestCase.__proto__ = Screen;