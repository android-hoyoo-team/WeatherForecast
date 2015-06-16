//获取设备当前加速度
        function getCurrentAcceleration(){
            navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onAccelerationError);
        }

 // onSuccess: Get a snapshot of the current acceleration
        function onAccelerationSuccess(acceleration) {
         var element = document.getElementById('result');
         element.innerHTML ='Acceleration X: ' + acceleration.x + '<br\>' +
                   'Acceleration Y: ' + acceleration.y +  '<br\>' +
                   'Acceleration Z: ' + acceleration.z + '<br\>' +
                   'Timestamp: '      + acceleration.timestamp +  '<br\>';
                    }

 // onError: Failed to get the acceleration
        function onAccelerationError() {
            alert('onError!');
        }


//指定频率观察设备加速度
    var f = 3000;
    var accelerometerOptions={frequency: f};
    var accelerationWatchID;
    function watchAcceleration(){
      accelerationWatchID=navigator.accelerometer.watchAcceleration(onAccelerationSuccess,onAccelerationError,accelerometerOptions);
    }


//取消观察设备加速度的线程
    function clearAccelerationWatch(){
         if (accelerationWatchID) {
                    navigator.accelerometer.clearWatch(accelerationWatchID);
                    accelerationWatchID = null;
                }
    }



