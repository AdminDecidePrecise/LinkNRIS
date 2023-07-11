  


 
jQuery(function() {
		   
 		var pgurl = window.location.href;
  		jQuery(".main-menu li a").each(function(){
  		 										// to check some url having '/'
		 if(jQuery(this).attr("href") == pgurl || jQuery(this).attr("href")+'/' == pgurl ){
 			 jQuery(this).addClass("active");
 			jQuery(this).parent('li').addClass("current");

 		  }
 		})
		
});






 

$(document).ready(function(){
						   
var loader2='<img src="'+url+'/public/assets/images/ajax-loader2.gif" />';
	

	  
	
	
	
});								
