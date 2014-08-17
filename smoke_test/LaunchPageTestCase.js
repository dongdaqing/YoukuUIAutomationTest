/**
 * Created by dongdaqing on 14-2-12.
 */

#import "../utils/Util.js"

var LaunchPageTestCase = {

    target: UIATarget.localTarget(),
    app: UIATarget.localTarget().frontMostApp(),
    window: UIATarget.localTarget().frontMostApp().mainWindow(),

    cancelUpdateInfo: function(){
        this.app.alert().cancelButton().tap();
    }

}