/**
 * Created by dongdaqing on 14-2-7.
 */


var HistoryPageTestCase = {

    target: UIATarget.localTarget(),
    app: UIATarget.localTarget().frontMostApp(),
    window: UIATarget.localTarget().frontMostApp().mainWindow(),

    historyBacktoHome: function(){
        var text = this.window.staticTexts()[0]
        text.tapWithOptions({tapOffset:{x:0.05, y:0.57}});
    },

    assert_in_historyPage: function(exp_name){
        var historyLabel = this.window.staticTexts()[0].name();
        assertEquals(exp_name,historyLabel,"Not in historyPage");
        this.historyBacktoHome();
    }
}
