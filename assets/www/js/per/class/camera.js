MyCamera=Class(NObject,{
	picUrl:null,
	canUploadTag:false,
	initialize:function()
	{
		this.param={
				uploadUrl:"",
				uploadImageKey:"file",
				uploadParam:{},
				uploadCantExe:function(){
					alert("不具备上传的条件");
				},
				uploadSuccess:function(){},
				uploadFailed:function(){},
				onGetPictureSuccess:function(){},
				onGetPictureFail:function(){},
				quality:80,
				allowEdit:true,
				destinationType:Camera.DestinationType.FILE_URI,
				targetWidth:400,
				targetHeight:320,
				sourceType:Camera.PictureSourceType.SAVEDPHOTOALBUM,
				encodingType:Camera.EncodingType.JPEG
				};
		if(arguments[0])
		{
			this.param=Util.extend(this.param,arguments[0]);
		}
		
	},
	capture:function(){
		navigator.camera.getPicture(Util.proxy(this._onGetPictureSuccess,this), Util.proxy(this._onGetPictureFail,this),
                    { 	
						quality: this.param.quality,
						allowEdit: this.param.allowEdit,
                        destinationType: this.param.destinationType,
                        targetWidth:this.param.targetWidth,  //生成的图片大小 单位像素
                        targetHeight:this.param.targetHeight
					});
	},
	getPicture:function(){
			navigator.camera.getPicture(Util.proxy (this._onGetPictureSuccess,this), Util.proxy(this._onGetPictureFail,this),
                    { 	
						sourceType:this.param.sourceType ,
                        encodingType:this.param.encodingType,
						quality: this.param.quality,
						allowEdit: this.param.allowEdit,
                        destinationType: this.param.destinationType,
                        targetWidth:this.param.targetWidth,  //生成的图片大小 单位像素
                        targetHeight:this.param.targetHeight
					});
	},
	_onGetPictureSuccess:function(image)
	{
		this.picUrl=image;
		this.canUploadTag=true;
		this.param.onGetPictureSuccess.apply(this,[image]);
	},
	_onGetPictureFail:function(message)
	{
		this.picUrl=null;
		this.canUploadTag=false;
		this.param.onGetPictureFail.apply(this,[message]);
	},
	upload:function(){
	
			if(!this.canUploadTag)
			{
				this.param.uploadCantExe.apply(this);
				return ;
			}
			var options = new FileUploadOptions();
             options.fileKey=this.param.uploadImageKey;
             options.fileName=this.picUrl.substr(this.picUrl.lastIndexOf('/')+1);
             options.mimeType="image/jpeg";

             options.params = this.param.uploadParam;

             var ft = new FileTransfer();
			 //alert("upload");
           /*  ft.upload(picUrl, "http://117.40.138.121:520/zms/servlet/Upload", win, fail, options);*/
            ft.upload(this.picUrl, this.param.uploadUrl, Util.proxy(this._uploadSuccess,this), Util.proxy(this._uploadFailed,this), options);
	},
	_uploadSuccess:function(r)
	{
		if(r&&r.response)
		{
			this.param.uploadSuccess.apply(this,[JSON.parse(r.response)]);
		}
	},
	_uploadFailed:function(error)
	{
			var errorcode=error.code;
		  /*
           FileTransferError.FILE_NOT_FOUND_ERR：1 文件未找到错误。
          •FileTransferError.INVALID_URL_ERR：2  无效的URL错误。
          •FileTransferError.CONNECTION_ERR：3  连接错误。
          FileTransferError.ABORT_ERR = 4;  程序异常
          */
            var errstr="";
            switch (errorcode)
            {
                case 1:
                {
                   errstr="错误代码1：源文件路径异常，请重新选择或者拍照上传！";
                    break;
                }
                case 2:
                {
                    errstr="错误代码2:目标地址无效,请重试！";
                    break;
                }
                case 3:
                {
                    errstr="您手机或者后台服务器网络异常,请重新上传！";
                    break;
                }
                default :
                {
                    errstr="程序出错";
                    break;
                }
            }
			error.errorMessage=errstr;
			this.param.uploadFailed.apply(this,[error]);
	}
});