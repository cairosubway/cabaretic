exports.createYouTubePlayer = function(e) {
 
    if (e.src == undefined) e.src = '';
    if (e.fullscreen == undefined) e.fullscreen = true;
    
    var webview = Ti.UI.createWebView({fullscreen:e.fullscreen,
    	pluginState: Ti.UI.Android.WEBVIEW_PLUGINS_ON,
    	});
    webview.url = e.src;
 
    return(webview);
}
