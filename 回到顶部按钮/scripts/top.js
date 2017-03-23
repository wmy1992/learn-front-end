window.onload = function(){
	var obtn=document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight; 
	var timer=null;
	var istop=true;
	window.onscroll=function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		 
			if(osTop>=clientHeight){
				obtn.style.display='block';
			}else{
				obtn.style.display='none';
			}
			if(!istop){
				clearInterval(timer);
			}
			istop=false;
		}
	obtn.onclick=function(){
		if(timer){
			clearInterval(timer);
		}

		timer=setInterval(function(){
			istop=true;
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = osTop/6;
			console.log(ispeed);
			document.documentElement.scrollTop = document.body.scrollTop = osTop-ispeed;
			console.log(osTop-ispeed);
			if(osTop==0){
				clearInterval(timer);
			};
		},30)
		

	}
}