/**
 * Created by dongdaqing on 14-1-15.
 */

#import "../utils/tuneup_js/assertions.js";

var target = UIATarget.localTarget();
var name = target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()[0].name();
UIALogger.logMessage(name);

assertEquals(name,"Buttons, Various uses of UIButton","wrong")

//function assertEqual(value1, value2, failMsg) {
//    if (value1 === value2) return;
//    if (!failMsg) failMsg = "Assert Equal failed";
//    var fullMsg = failMsg + ": '" + value1 + "'" +
//        " !== '" + value2 + "'";
//    assert(false, fullMsg);
//}
//
//function assert(value, failMsg) {
//    if (value) return;
//    if (!failMsg) failMsg = "Assert failed";
////    throw new Error(failMsg);
//    UIALogger.logMessage(failMsg);
//}
//
//assertEqual(name,"Buttons, Various uses of UIButton","wrong")