// Changes UserAgent to TV
Object.defineProperty(navigator, 'userAgent', {
    get: function () { return 'Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1)'; }
});


// Removes mouse from display
document.documentElement.style.cursor = 'none';


// Sets video to HD in options
if (window.location.href.includes("watch?v=")) {
    var scriptTag = document.getElementById('ytTvHd');
    if (scriptTag) {
        scriptTag.remove();
    }
    var script = document.createElement('script');
    script.id = "ytTvHd";
    script.type = 'text/javascript';
    script.textContent = "var ytvPlayer = document.getElementById('movie_player') || document.querySelector('.html5-video-player');ytvPlayer.setPlaybackQualityRange('highres');" +
        "document.getElementsByTagName('body')[0].onkeydown = function(e) {if (e.keyCode == 428) {ytvPlayer.requestFullscreen();}};";
    document.body.appendChild(script);
}