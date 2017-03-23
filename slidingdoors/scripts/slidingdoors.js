window.onload=function(){
	var box=document.getElementById('container');
	var imgs = box.getElementsByTagName('img');
	var imgWidth = imgs[0].offsetWidth;
	
	var exposeWidth=160;

	var boxWidth=imgWidth+(imgs.length-1)*exposeWidth;
	box.style.width = boxWidth+'px';

	function setImgsPos(){
		for(var i=1, len=imgs.length;i<len;i++){
			imgs[i].style.left=imgWidth+exposeWidth*(i-1)+'px';
		}
	}
	setImgsPos();

	var translate = imgWidth-exposeWidth;
	for(var i=0,len=imgs.length;i<len;i++){
		(function(i){
			imgs[i].onmouseover = function(){
				setImgsPos();
				for(var j=1;j<=i;j++){
					imgs[j].style.left=parseInt(imgs[j].style.left,10)-translate+'px';
				}
			}
		})(i);
	}
};	
