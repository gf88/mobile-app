function lxfEndtime(){$(".time").each(function(){var t=(new Date($(this).attr("id")).getTime()-(new Date).getTime())/1e3,a=Math.floor(t/60),e=Math.floor(a/60),n=(Math.floor(e/24),e%24),i=a%60,s=Math.floor(t%60),o=(new Date).getMilliseconds(),l=Math.floor(o%100);s<10&&(s="0"+s),i<10&&(i="0"+i),n<10&&(n="0"+n),l<10?l="0"+l:$(this).html("<span>"+n+"</span><i class='txt'>:</i><span>"+i+"</span><i class='txt'>:</i><span>"+s+"</span>")})}$(function(){$.ajax({url:"api/jingpai2.php",type:"GET",data:{page:0},dataType:"json",success:function(t){var a=$("#list").html(),e=ejs.render(a,{data:t});$(".content").append(e)}})}),setInterval(lxfEndtime,60);