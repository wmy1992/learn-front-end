window.onload=function(){
	var loginStatePanel = document.getElementById("loginStatePanel"),
		loginState = document.getElementById("loginState");

		loginState.onclick=function(e){
			e = e|| window.event;
			loginStatePanel.style.display="block";
			if(e.stopPropagation){
				e.stopPropagation();
			}else if(e.cancelBubble){
				e.cancelBubble=true;
			}
		}

		document.onclick=function(){
			loginStatePanel.style.display="none";
		}


}