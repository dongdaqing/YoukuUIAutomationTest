/**
 * Created by dongdaqing on 14-2-12.
 */


var DeviceInfo = {

    target: UIATarget.localTarget(),
    app: UIATarget.localTarget().frontMostApp(),
    window: UIATarget.localTarget().frontMostApp().mainWindow(),

    printDeviceInfo: function(){
        this.target.logDeviceInfo();
    }

}