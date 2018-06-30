var width=1;var newsIndex=0;
var news=["Presence across 100 locations, with own offices across 30 cities","Associated with all the major Banks across PAN India",
          "750+ field staff at your door step, who are one phone call away",
          "Monthly disbursements of 300 crores in personal loans, 100 crores of home loan and loan against property",
          "In the loan disbursal business from last 10 years",
          "Established as largest DSA across PAN India, with office locations in more than 30 cities",
          "Working towards disbursing loans in 5 min's with a paperless approach, to provide you a world-class experience"];
$(".news-feed").find('a').text(news[4]);
var maxWidth=$(".news-feed").find('a').width();
var interval=30;var interval=500;function callback(){
	if(interval==1000){
		$(".news-feed").find('a').text(news[newsIndex])
maxWidth=$(".news-feed").find('a').width();
		}
if(width<maxWidth+15){$(".news-feed").css({'width':width});
$(".news-feed").css({'margin-left':40});$(".news-feed").css({'font-size':'11px'});
width+=6;interval=30;}else{width=1;newsIndex++;if(newsIndex>=news.length){newsIndex=0;}
interval=1000;}
setTimeout(callback,interval);}
setTimeout(callback,interval);