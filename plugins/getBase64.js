export default function getBase64(file){
				return new Promise(function (resolve,reject){
					let reader=new FileReader()
					let imgResult=''
					reader.readAsDataURL(file)
					reader.onload=function(){
						imgResult = reader.result
					}
					reader.onerror=function(error){
						console.log(error)
					}
					reader.onloadend=function(){
						resolve(imgResult);
					}
				})
			}