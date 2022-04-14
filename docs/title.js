// 卖萌标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '你瞧我发现了啥~';
        clearTimeout(titleTime);
    } else {
        document.title = '原来是你这个小可爱~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});