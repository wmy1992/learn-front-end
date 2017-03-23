window.onload=function(){
	var stateList = document.getElementById("loginStatePanel"),
		lis = stateList.getElementsByTagName("li"),
		loginState = document.getElementById("loginState"),
		stateShow = document.getElementById("loginStateShow"),
		stateTxt = document.getElementById("login2qq_state_txt"),
		loginPanel = document.getElementById("loginPanel");


		//控制状态面板的出现隐藏
		loginState.onclick=function(e){
			stopPropagation(e);
			loginStatePanel.style.display="block";
		}

		document.onclick=function(){
			loginStatePanel.style.display="none";
		}

		//鼠标滑过事件
		for(var i=0, l=lis.length;i<l;i++){
			lis[i].onmouseover=function(){
				this.style.background="#33f";
			}
			lis[i].onmouseout=function(){
				this.style.background="#fff";
			}
			lis[i].onclick=function(e){
				id = this.id;
				stateShow.className="login-state-show "+id;
				stateTxt.innerHTML=this.getElementsByClassName("stateSelect_text")[0].innerHTML;
				stopPropagation(e);
				loginStatePanel.style.display="none";

			}
		}

		loginPanel.onmousedown=focusPanel;
		//拖动状态栏
		function focusPanel(e){
			e = e||window.event;
			var disX=e.clientX - loginPanel.offsetLeft,
				disY=e.clientY - loginPanel.offsetTop;
			console.log(disX);
			document.onmousemove=function(e){
				dragPanel(e,disX,disY)
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}

		}

		function dragPanel(e, disX, disY){
			e =e || window.event;
			var l = e.clientX - disX;
			var t = e.clientY - disY;
			var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
			var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var maxWidth = winWidth - loginPanel.offsetWidth-10;
			var maxHeight = winHeight - loginPanel.offsetHeight;
			if(l<0){
				l=0;
			}else if(l>maxWidth){
				l=maxWidth;
			}
			if(t<0){
				t=0;
			}else if(t>maxHeight){
				t=maxHeight;
			}
			loginPanel.style.left=l+"px";
			loginPanel.style.top=t+"px";
		}


		function stopPropagation(e){
			e = e|| window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else if(e.cancelBubble){
				e.cancelBubble=true;
			}
		}


}