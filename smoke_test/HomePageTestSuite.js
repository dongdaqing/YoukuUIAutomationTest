/**
 * Created by dongdaqing on 14-2-7.
 */

#import "../utils/Util.js"
#import "../utils/tuneup_js/assertions.js"
#import "../common/HomePageResources.js"
#import "../common/HistoryPageResources.js"
#import "HomePageTestCase.js"
#import "HistoryPageTestCase.js"
#import "DetailPageTestCase.js"

var HomePageTestSuite = {

    runHomePageTest: function(){

        Util.runTest("Enter historyPage",function(){
            var h = HomePageTestCase;
            h.clickHistoryIcon();
        });

        Util.runTest("Verify in historyPage",function(){
            var exp_name = HistoryPageResources.staticTexts_0;
            var h = HomePageTestCase;
            var history = HistoryPageTestCase;
            history.assert_in_historyPage(exp_name);
        });

//        Util.runTest("Play Homepage Video",function(){
//            var h = HomePageTestCase;
//            var detail = DetailPageTestCase;
//            h.playHomepageVideo();
//            detail.assert_in_detailPage();
//        });

//        Util.runTest("demo 1 for ui button",function(){
//            var h = HomePageTestCase;
//            var act_name = h.obtain_tableCellName_0();
//            var exp_name = HomePageResources.tableCellName_0;
//            assertEquals(exp_name,act_name,"wrong");
//        });
//
//        Util.runTest("demo 2 for ui button",function(){
//            var exp_name = HomePageResources.tableCellName_0;
//            HomePageTestCase.assert_tableCellName_0(exp_name);
//        });
    }

}

////demo for UICatalog
//test("demo 1 for ui button",function(){
//    var h = HomePageTestCase;
//    name = h.obtain_tableCellName_0();
//    assertEquals("Buttons, Various uses of UIButt",name,"wrong");
//});
//
////demo for UICatalog
//test("demo 2 for ui button",function(){
//    var exp_name = HomePageResources.tableCellName_0;
//    HomePageTestCase.assert_tableCellName_0(exp_name);
//});

//Util.runTest("demo 1 for ui button",function(){
//    var h = HomePageTestCase;
//    name = h.obtain_tableCellName_0();
//    assertEquals("Buttons, Various uses of UIButton",name,"wrong");
//});
//
//Util.runTest("demo 2 for ui button",function(){
//    var exp_name = HomePageResources.tableCellName_0;
//    HomePageTestCase.assert_tableCellName_0(exp_name);
//});