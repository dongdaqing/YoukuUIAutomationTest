/**
 * Created by dongdaqing on 14-2-12.
 */

#import "../utils/Util.js"
#import "../utils/tuneup_js/assertions.js"
#import "PersonalPageTestCase.js"

var PersonalPageTestSuite = {

    runPersonalTest: function(){

        Util.runTest("Test Login",function(){
            var personal = PersonalPageTestCase;
            personal.userLogin();
        });

        Util.runTest("Test Logout",function(){
            var personal = PersonalPageTestCase;
            personal.userLogout();
        });


    }

}

