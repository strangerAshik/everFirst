
function deleteHub(clicked_on){
 var xmlhttp;
	if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
	else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
	  if(clicked_on=='deleteClient'){
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
		  if(clicked_on=='deleteBank'){
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
		    if(clicked_on=='deleteSupplier'){
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
		  	    if(clicked_on=='deleteUser'){
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }	
		  if(clicked_on=='deleteRecentAddedInventory'){
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  } 
		  if(clicked_on=='deleteIteamFromBufferInvoice'){
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
		  if(clicked_on=='deleteDebitTransaction'){
		  //alert()
		 	document.getElementById('debitDeleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('debitDeleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
		  if(clicked_on=='deleteCreditTransaction'){
		
		 	document.getElementById('CreditDeleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('CreditDeleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
		  if(clicked_on=='deleteInvoice'){
		
		 	document.getElementById('deleteMassage').innerHTML="Deleting...";
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		
			document.getElementById('deleteMassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			
			} }

			
			params="id="+id+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_delete.php",true);	
		  }
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(params); 
		
}
function deleteClient(){
id=value('saveIdForDelete');

deleteHub('deleteClient');
}
function deleteBank(){
id=value('saveIdForDelete');
deleteHub('deleteBank');
}
function deleteSupplier(){
//alert('hello');
id=value('saveIdForDelete');
deleteHub('deleteSupplier');
}
function deleteUser(){
//alert('hello');
id=value('saveIdForDelete');
deleteHub('deleteUser');
}
function deleteRecentAddedInventory(){
//alert('hello');
id=value('saveIdForDelete');
deleteHub('deleteRecentAddedInventory');
}
function deleteIteamFromBufferInvoice(){
//alert('hello');
id=value('saveIdForDelete');
deleteHub('deleteIteamFromBufferInvoice');
}
function deleteDebitTransaction(){
id=value('saveIdForDebitDelete');
//alert(id);
deleteHub('deleteDebitTransaction');
}
function deleteCreditTransaction(){
id=value('saveIdCreditForDelete');
//alert(id);
deleteHub('deleteCreditTransaction');
}
function deleteInvoice(){
//alert('hi');
id=value('saveIdForDelete');
//alert(id);
deleteHub('deleteInvoice');
}
