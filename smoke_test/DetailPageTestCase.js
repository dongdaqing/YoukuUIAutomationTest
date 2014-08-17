/**
 * Created by dongdaqing on 14-2-11.
 */


var DetailPageTestCase = {

    target: UIATarget.localTarget(),
    app: UIATarget.localTarget().frontMostApp(),
    window: UIATarget.localTarget().frontMostApp().mainWindow(),

    assert_in_detailPage: function(){
        var scrollViews = this.window.scrollViews()[0];
        assertNotNull(scrollViews,"Not in detailPage");
        this.backToPrePage();
    },

    backToPrePage: function(){
        this.target.tap({x:30.00, y:546.50});
    }
}