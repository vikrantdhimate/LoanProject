
	  function ValidateMobNumber() 
	  { 
		
		var patForReqdFld = /^(\-)?([\d]+(?:\.\d{1,2})?)$/;
    
		 var fn=document.getElementById('mobileval').value;
		    if(fn == "")
		    {	
		    	var mobileval=document.getElementById('mobileval').style.borderColor = "red";
		        return false;
		    }
		    
		    else{
		    	var mobileval= document.getElementById('mobileval').style.borderColor = "green";
		    	}
		 
		    if(fn!=/^[1-9]{1}[0-9]{9}$/.test(document.getElementById("mobileval").value))
		    {	
		    	   
		    	var mobileval= document.getElementById('mobileval').style.borderColor = "green";
		    	
		    }
		    else{
		    	var mobileval=document.getElementById('mobileval').style.borderColor = "red"
			        return false;
			     
		    	
		    	
		    	}
		     if(fn!=/^\d{10}$/.test(document.getElementById("mobileval").value))
			    {	
		    	 var mobileval= document.getElementById('mobileval').style.borderColor = "green";
			    
			    	
			    }
			    else{
			    	
				        
			    		var mobileval=document.getElementById('mobileval').style.borderColor = "red"
					        return false;
			    	
			    	}
		 
		       
		       if(fn.length!=10)
		       {
		 
		     var mobileval=document.getElementById('mobileval').style.borderColor = "red"
				        return false;

	    	
		       }
		       else
		    	   {
		    	   var mobileval= document.getElementById('mobileval').style.borderColor = "green";
		    	  
		    	   }
		       
		      
		        if(patForReqdFld.test(fn)) {
		        	var mobileval= document.getElementById('mobileval').style.borderColor = "green";
		            } 
		        else 
		        	{
		            	 var mobileval=document.getElementById('mobileval').style.borderColor = "red"
						        return false;
			    	  
		            }  
		    }
	  
		   
		
	
	 