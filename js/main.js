$(function(){
	var moving=false;

	$(".layout li").click(function(){
		if($(this).attr("data-index") == "next" && moving == false){
			moving=true;
			nextMoving();
		}
		else if($(this).attr("data-index") == "previous" && moving == false){
			moving=true;
			previousMoving();
		}
	});
	function nextMoving(){ // 우측에서 중앙으로의 이동입니다.
		$(".layout li").each(function(){
			if($(this).attr("data-index") == "previous"){
				$(this).attr("data-index", "next");
			}
			else if($(this).attr("data-index") == "active"){
				$(this).attr("data-index", "previous");
			}
			else if($(this).attr("data-index") == "next"){
				$(this).attr("data-index", "active");
			}
			$(this).removeAttr("class");
			$(this).addClass($(this).attr("data-index"));
		});
		$(".navigation li").each(function(){
			if($(this).attr("data-index") == "previous"){
				$(this).attr("data-index", "next");
				$(this).css({"opacity":0});
			}
			else if($(this).attr("data-index") == "active"){
				$(this).attr("data-index", "previous");
			}
			else if($(this).attr("data-index") == "next"){
				$(this).attr("data-index", "active");
			}
			$(this).removeAttr("class");
			$(this).addClass($(this).attr("data-index"));
		});

		// 클래스 변경이 끝나고 난 후에 실제 노드를 변경합니다.
		setTimeout(function(){
			// 맨 처음의 노드를 맨 밑으로 위치 이동합니다.
			$(".layout li").eq(0).appendTo($(".layout"));
			$(".navigation li").eq(0).appendTo($(".navigation"));
			$(".navigation li").eq(2).animate({"opacity":1}, 0);
			moving=false;
		}, 500);
	}
	function previousMoving(){ // 좌측에서 중앙으로의 이동입니다.
		$(".layout li").each(function(){
			if($(this).attr("data-index") == "previous"){
				$(this).attr("data-index", "active");
			}
			else if($(this).attr("data-index") == "active"){
				$(this).attr("data-index", "next");
			}
			else if($(this).attr("data-index") == "next"){
				$(this).attr("data-index", "previous");
			}
			$(this).removeAttr("class");
			$(this).addClass($(this).attr("data-index"));
		});
		$(".navigation li").each(function(){
			if($(this).attr("data-index") == "previous"){
				$(this).attr("data-index", "active");
			}
			else if($(this).attr("data-index") == "active"){
				$(this).attr("data-index", "next");
			}
			else if($(this).attr("data-index") == "next"){
				$(this).attr("data-index", "previous");
				$(this).css({"opacity":0});
			}
			$(this).removeAttr("class");
			$(this).addClass($(this).attr("data-index"));
		});

		// 클래스 변경이 끝나고 난 후에 실제 노드를 변경합니다.
		setTimeout(function(){
			// 맨 밑의 노드를 맨 위로 위치 이동합니다.
			$(".layout li").eq(2).prependTo($(".layout"));
			$(".navigation li").eq(2).prependTo($(".navigation"));
			$(".navigation li").eq(0).animate({"opacity":1}, 0);
			moving=false;
		}, 600);
	}
	$(".navigation li a").click(function(e){
		e.preventDefault();
		if($(this).parent("li").attr("data-index") == "next" && moving == false){ // next area
			moving=true;
			nextMoving();
		}else if($(this).parent("li").attr("data-index") == "previous" && moving == false){ // previous area
			moving=true;
			previousMoving();
		}
	});
});