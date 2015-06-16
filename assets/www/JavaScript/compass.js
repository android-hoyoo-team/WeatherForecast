    //罗盘类
    //获取当前罗盘的方向
    function getCurrentHeading(){
        navigator.compass.getCurrentHeading(onCompassSuccess, onCompassError);
    }

    //在固定的时间间隔获取罗盘朝向的角度。
    var compassOptions = { frequency: 3000 }; //每隔3秒更新一次
    var compassWatchID ;
    function watchHeading(){
        compassWatchID = navigator.compass.watchHeading(onCompassSuccess,
        onCompassError,compassOptions);
    }

    // 停止watch ID参数指向的罗盘监视。
    function clearCompassWatch() {
        if (compassWatchID) {
            navigator.compass.clearWatch(compassWatchID);
            compassWatchID = null;
        }
    }
    function onCompassSuccess(heading) {
    var element = document.getElementById('result');
       element.innerHTML='Heading:'+heading+'<br\>';
    }

    // onError: 返回朝向数据失败
    function onCompassError(compassError) {
        alert('onError:'+(compassError.code==3));
    }