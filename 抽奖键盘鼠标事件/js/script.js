var data=["ipad","iphone5s","小米手机","散热器"];
window.onload=function(){
	var play=document.getElementById("play"),
		stop=document.getElementById("stop"),
		content=document.getElementById("content"),
		timer=null,
		flag=0;

	play.onclick=showContent;
	stop.onclick=stopContent;
	function showContent(){
		flag=1;
		play.style.background="#ccc";
		var i;
		clearInterval(timer);
		timer=setInterval(function(){
			var index = Math.floor(Math.random()*(data.length));
			content.innerHTML=data[index];
		},50);
	}
	function stopContent(){
		flag=0;
		play.style.background="#33f";
		clearInterval(timer);
	}

	document.onkeyup=function(e){
		e = e || window.event;
		if(e.code=13){
			if(flag==0){
				flag=1;
				showContent();
			}else{
				flag=0;
				stopContent();
			}
		}
	}

}