/**
 * Created by dongdaqing on 14-2-7.
 */

"use strict";

UIATarget.onAlert = function() { return true; };

var Util = {

    delay: function(seconds){
        UIATarget.localTarget().delay(seconds);
    },

    runTest: function(description, steps){
        try {
            UIALogger.logStart(description);
            steps();
            UIALogger.logPass("Test passed");
        } catch(exception) {
            UIALogger.logError(exception.message);
            UIATarget.localTarget().logElementTree();
            UIALogger.logFail("Test failed");
//            throw exception;
        }
    }

}


//function delay(seconds) {
//    UIATarget.localTarget().delay(seconds);
//}
//
//function test(description, steps) {
//    try {
//        UIALogger.logStart(description);
//        steps();
//        UIALogger.logPass("Test passed");
//    } catch(exception) {
//        UIALogger.logError(exception.message);
//        UIATarget.localTarget().logElementTree();
//        UIALogger.logFail("Test failed");
////        throw exception;
//    }
//}
