//html字体大小
(function (win, doc) {
    function changeSize() {
        doc.documentElement.style.fontSize = 100 * doc.documentElement.clientWidth / 320 + 'px';
    }

    changeSize();
    win.addEventListener('resize', changeSize, false);
})(window, document);

//nav点击切换
$('.nav-menus>li').click(function(){
	$('.nav-menus>li a').removeClass('on');
	$(this).find('a').eq(0).addClass('on');

	$('.section>div').removeClass('show');
	$('.section>div').eq($(this).index()).addClass('show');

	menuType=$(this).text();
	// console.log(menuType)
})

//数据交互 动态创建
//推荐
$(document).ready(function(){
	$.ajax({
		url:'/tuijian',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			hang.appendTo(a);
    			a.appendTo($('.tui-jian'));
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//百家
$('.nav-menus>li').eq(1).click(function(){
	$('.bai-jia').children().remove();
	$.ajax({
		url:'/baijia',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.bai-jia'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//本地
$('.nav-menus>li').eq(2).click(function(){
	$('.ben-di').children().remove();
	$.ajax({
		url:'/bendi',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.ben-di'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//娱乐
$('.nav-menus>li').eq(3).click(function(){
	$('.yu-le').children().remove();
	$.ajax({
		url:'/yule',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.yu-le'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//社会
$('.nav-menus>li').eq(4).click(function(){
	$('.she-hui').children().remove();
	$.ajax({
		url:'/shehui',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.she-hui'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//军事
$('.nav-menus>li').eq(5).click(function(){
	$('.jun-shi').children().remove();
	$.ajax({
		url:'/junshi',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.jun-shi'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//女人
$('.nav-menus>li').eq(6).click(function(){
	$('.n-ren').children().remove();
	$.ajax({
		url:'/nren',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.n-ren'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//搞笑
$('.nav-menus>li').eq(7).click(function(){
	$('.gao-xiao').children().remove();
	$.ajax({
		url:'/gaoxiao',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.gao-xiao'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//互联网
$('.nav-menus>li').eq(8).click(function(){
	$('.hu-lian').children().remove();
	$.ajax({
		url:'/hulian',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.hu-lian'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});
//科技
$('.nav-menus>li').eq(9).click(function(){
	$('.ke-ji').children().remove();
	$.ajax({
		url:'/keji',
    	type:'get',
    	success:function(data){
    		for(var i=0;i<data.length;i++){
    			var a=$('<a href="javascript:"></a>')
    			var hang=$('<div></div>').addClass('hang');
    			if(data[i].地址){var img=$('<div><div>').addClass('img-box');}
    			var text=$('<div><div>').text(data[i].title).addClass('section-text');
    			var time=$('<div><div>').addClass('section-time');

    			if(data[i].地址){$('<img src="'+data[i].地址+'">').appendTo(img);}
    			$('<span></span>').text(data[i].time.split("T")[0]).appendTo(time);
    			a.appendTo($('.ke-ji'))
    			hang.appendTo(a);
    			if(data[i].地址){img.appendTo(hang);}
    			text.appendTo(hang);
    			time.appendTo(hang);
    		}
    	}
	})
});

