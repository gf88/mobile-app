$(function(){$(".W_gnTab_nav ul li").click(function(){$(this).addClass("on").siblings().removeClass("on"),console.log($(".W_gnTab_content .gnTabs_block")),$(".W_gnTab_content .gnTabs_block").eq($(this).index()).addClass("gn-block").siblings().removeClass("gn-block")}),$(".W_footer a").click(function(){$(this).addClass("on").siblings().removeClass("on")}),localStorage.adder?$(".add span").html(localStorage.adder):$(".add span").html("未知")});