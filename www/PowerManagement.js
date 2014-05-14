var powerManagement = {
  acquireWakeLock: function(callback, error) {
    try{
      if(device.platform.match(/^android/gi)){
        cordova.exec(
          function(){
            if(typeof(callback) == "function"){
              callback();
            }
          },
          function(err) {
            if(typeof(error) == "function"){
              error(err);
            }
          },
          "PowerManagement", 
          "acquireWakeLock",
          []
        );
      }
    } catch(e){
	    if(typeof(error) == "function"){
	      error(e);
	    }
    }
  },
  releaseWakeLock: function(callback, error) {
    try {
      if(device.platform.match(/^android/gi)){
        cordova.exec(
          function(){
            if(typeof(callback) == "function"){
              callback();
            }
          },
          function(err) {
            if(typeof(error) == "function"){
              error(err);
            }
          },
          "PowerManagement",
          "releaseWakeLock",
          []
        );
      }
    } catch(e){
            if(typeof(error) == "function"){
              error(e);
            }
    } 
  }
};

module.exports = powerManagement;

