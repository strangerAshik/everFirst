

// Through input values to php file using ajax 
	 function clicked(clicked_on){
	 var xmlhttp;
		if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
	    else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}		
		
		  if(clicked_on=='addBank'){
		  //alert('hello');
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('massage').innerHTML=xmlhttp.responseText;
			
			} }

			
			params="bankName="+bankName+"&accountNo="+accountNo+"&note="+note+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_input.php",true);	
		  }
		  if(clicked_on=='storeInvoiceInfo'){
	
		  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('storeInvoiceInfoMassage').innerHTML=xmlhttp.responseText;
			//setTimeout(function() {location.reload();},1000);
			
			} }


			params="invoiceNo="+invoiceNo+"&company="+company+"&mobile="+mobile+"&workOrder="+workOrder+"&vat="+vat+"&tax="+tax+"&discount="+discount+"&paidAmount="+paidAmount+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_input.php",true);	
		  }
		if(clicked_on=='InventoryEntryAddItem'){
			xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
		var test=document.getElementById('inventory').innerHTML=xmlhttp.responseText;
			//g=document.getElementById('massage').innerHTML=xmlhttp.responseText;
			
			//alert(test);
			} }

			
			params="company="+company+"&address="+address+"&mobile="+mobile+"&representative="+representative+"&note="+note+"&workOrder="+workOrder+"&purchaseInvoice="+purchaseInvoice+"&supplierChallan="+supplierChallan+"&itemName="+itemName+"&partNo="+partNo+"&brand="+brand+"&quantity="+quantity+"&unitPrice="+unitPrice+"&saleUnitPrice="+saleUnitPrice+"&clicked_on="+clicked_on;
			
			xmlhttp.open("POST","../php/php_input.php",true);		
		}
		if(clicked_on=='updatePrice'){
			//alert();
			xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var test=xmlhttp.responseText;
			alert(test);
			} }		
			params="itemName="+itemName+"&partNo="+partNo+"&brand="+brand+"&saleUnitPrice="+saleUnitPrice+"&purchaseUnitPrice="+purchaseUnitPrice+"&clicked_on="+clicked_on;
			xmlhttp.open("POST","../php/php_input.php",true);		
		}
		if(clicked_on=='updateQuantity'){
			xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var test=xmlhttp.responseText;
			alert(test);
			} }		
			params="itemName="+itemName+"&partNo="+partNo+"&brand="+brand+"&quantity="+quantity+"&provision="+provision+"&clicked_on="+clicked_on;
		//	alert(params)
			xmlhttp.open("POST","../php/php_input.php",true);		
		}
		if(clicked_on=='addclient'){
		xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('addNewClientMassage').innerHTML=xmlhttp.responseText;
			
			} }
		 params="company="+company+"&address="+address+"&mobile="+mobile+"&representative="+representative+"&note="+note+"&clicked_on="+clicked_on;
		 
		 xmlhttp.open("POST","../php/php_input.php",true);	
//alert('hi')		 ;
		}
		if(clicked_on=='addSupplier'){
		xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('addNewSupplierMassage').innerHTML=xmlhttp.responseText;
			
			} }
		
		params="company="+company+"&address="+address+"&mobile="+mobile+"&representative="+representative+"&note="+note+"&clicked_on="+clicked_on;
		 
		 xmlhttp.open("POST","../php/php_input.php",true);	
		
		
		}
		if(clicked_on=='addUser'){
			xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('addNewUserMassage').innerHTML=xmlhttp.responseText;
			
			} }
		
	
		 params="userName="+userName+"&desig="+desig+"&userPassword="+userPassword+"&mobile="+mobile+"&clicked_on="+clicked_on;
		 
		 xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='existingCustomerName'){
		//alert(name);
		xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('myDiv').innerHTML=xmlhttp.responseText;
			
			} }
		
	
		 params="name="+name+"&clicked_on="+clicked_on;
		 //alert(params)
		 xmlhttp.open("POST","../php/php_input.php",true);	
		//alert(name);
		}
			if(clicked_on=='existingSupplierCompany'){
		
		xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('myDiv').innerHTML=xmlhttp.responseText;
			
			} }
		
	
		 params="name="+name+"&clicked_on="+clicked_on;
		 //alert(params)
		 xmlhttp.open("POST","../php/php_input.php",true);	
		//alert(name);
		}
		if(clicked_on=='addToCard'){

		xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('addToCartMassage').innerHTML=xmlhttp.responseText;
			//setTimeout(function() {location.reload();},1000);
			
			} }
	
	params="invoiceNo="+invoiceNo+"&company="+company+"&address="+address+"&mobile="+mobile+"&representative="+representative+"&note="+note+"&workOrder="+workOrder+"&selectBrand="+selectBrand+"&selectItemPartNo="+selectItemPartNo+"&selectItem="+selectItem+"&unitPrice="+unitPrice+"&quantity="+quantity+"&clicked_on="+clicked_on;
	//alert(params);
	
		 xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='discount'){
	  xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('totalAmount').innerHTML=xmlhttp.responseText;
			//document.getElementById('grandTotal').innerHTML=xmlhttp.responseText;
			
			} }
			params="discount="+discount+"&invoice="+invoice+"&clicked_on="+clicked_on;// alert(clicked_on);
			xmlhttp.open("POST","../php/php_input.php",true);	
	  }
		if(clicked_on=='moneyInWord'){
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('moneyInWord').innerHTML=xmlhttp.responseText;
			
			} }
			params="discount="+discount+"&invoice="+invoice+"&clicked_on="+clicked_on;// alert(clicked_on);
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='grandTotal'){
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('grandTotal').innerHTML=xmlhttp.responseText;
			
			} }
			params="vat="+vat+"&tax="+tax+"&discount="+discount+"&invoice="+invoice+"&clicked_on="+clicked_on;// alert(clicked_on);
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='setVat'){
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('getVat').innerHTML=xmlhttp.responseText;
			
			} }
			params="vat="+vat+"&discount="+discount+"&invoice="+invoice+"&clicked_on="+clicked_on;// alert(clicked_on);
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='setTax'){
		
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('getTax').innerHTML=xmlhttp.responseText;
			
			} }
			params="tax="+tax+"&discount="+discount+"&invoice="+invoice+"&clicked_on="+clicked_on;// alert(clicked_on);
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='cancelInvoice'){
		
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('getTax').innerHTML=xmlhttp.responseText;
			
			} }
			params="clicked_on="+clicked_on;
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='badDraftAction'){
		
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('badDraftmassage').innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
			} }
			params="badDraftAmount="+badDraftAmount+"&invoiceNo="+invoiceNo+"&clicked_on="+clicked_on;
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		if(clicked_on=='updateSurfaceInvoiceInfoAfterChallan'){
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('updateInfo').innerHTML=xmlhttp.responseText;
			//setTimeout(function() {location.reload();},1000);
			} }

			if(number==1){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&clicked_on="+clicked_on;}
			if(number==2){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&clicked_on="+clicked_on;}
			if(number==3){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&clicked_on="+clicked_on;}
			if(number==4){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&clicked_on="+clicked_on;}
			if(number==5){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&clicked_on="+clicked_on;}
			if(number==6){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&clicked_on="+clicked_on;}
			if(number==7){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&clicked_on="+clicked_on;}
			if(number==8){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&clicked_on="+clicked_on;}
			if(number==9){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&clicked_on="+clicked_on;}
			if(number==10){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on;}
			if(number==11){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11;}
			if(number==12){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12;}
			if(number==13){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13;}
			if(number==14){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14;}
			if(number==15){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15;}
			if(number==16){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16;}
			if(number==17){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17;}
			if(number==18){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18;}
			if(number==19){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19;}
			if(number==20){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20;}
			if(number==21){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21;}
			if(number==22){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22;}
			if(number==23){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23;}
			if(number==24){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24;}
			if(number==25){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25;}
			if(number==26){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26;}
			if(number==27){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27;}
			if(number==28){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28;}
			if(number==29){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29;}
			if(number==30){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30;}
			if(number==31){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31;}
			if(number==32){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32;}
			if(number==33){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33;}
			if(number==34){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34;}
			if(number==35){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35;}
			if(number==36){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36;}
			if(number==37){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37;}
			if(number==38){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38;}if(number==39){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39;}
			if(number==40){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40;}
			if(number==41){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41;}
			if(number==42){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42;}
			if(number==43){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43;}
			if(number==44){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44;}
			if(number==45){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45;}
			
			if(number==46){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46;}
			
			if(number==47){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47;}
			
			if(number==48){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48;}
			if(number==49){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49;}
			if(number==50){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50;}
			if(number==51){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51;}
			if(number==52){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52;}
			if(number==53){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53;}
			if(number==54){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54;}
			if(number==55){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55;}
			if(number==56){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56;}
			if(number==57){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57;}
			if(number==58){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58;}
			if(number==59){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59;}
			if(number==60){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60;}
			if(number==61){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61;}
			if(number==62){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62;}
			if(number==63){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63;}
			if(number==64){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64;}
			if(number==65){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65;}
			if(number==66){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66;}
			if(number==67){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67;}
			if(number==68){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68;}
			if(number==69){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69;}
			if(number==70){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70;}
			if(number==71){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71;}
			if(number==72){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72;}
			if(number==73){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73;}
			if(number==74){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74;}
			if(number==75){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75;}
			if(number==76){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76;}
			if(number==77){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77;}
			if(number==78){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78;}
			if(number==79){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79;}
			if(number==80){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80;}
			if(number==81){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81;}
			if(number==82){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82;}
			if(number==83){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83;}
			if(number==84){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84;}
			if(number==85){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85;}
			if(number==86){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86;}
			if(number==87){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87;}
			if(number==88){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88;}
			if(number==89){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89;}
			if(number==90){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90;}
			if(number==91){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91;}
			if(number==92){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92;}
			if(number==93){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93;}
			if(number==94){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94;}
			if(number==95){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95;}
			if(number==96){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96;}
			if(number==97){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97;}
			if(number==98){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&98="+n98;}
			if(number==99){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&98="+n98+"&99="+n99;}
			if(number==100){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&98="+n98+"&99="+n99+"&100="+n100;}
			
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		
		if(clicked_on=='editChallan'){
		 xmlhttp.onreadystatechange=function() { if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			document.getElementById('massage').innerHTML=xmlhttp.responseText;
			//setTimeout(function() {location.reload();},1000);
			} }

			if(number==1){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==2){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==3){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==4){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==5){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==6){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==7){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==8){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==9){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==10){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&challanNo="+challanNo;}
			if(number==11){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&challanNo="+challanNo;}
			if(number==12){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&challanNo="+challanNo;}
			if(number==13){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&challanNo="+challanNo;}
			if(number==14){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&challanNo="+challanNo;}
			if(number==15){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&challanNo="+challanNo;}
			if(number==16){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&challanNo="+challanNo;}
			if(number==17){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&challanNo="+challanNo;}
			if(number==18){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&challanNo="+challanNo;}
			if(number==19){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&challanNo="+challanNo;}
			if(number==20){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&challanNo="+challanNo;}
			if(number==21){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&challanNo="+challanNo;}
			if(number==22){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&challanNo="+challanNo;}
			if(number==23){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&challanNo="+challanNo;}
			if(number==24){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&challanNo="+challanNo;}
			if(number==25){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&challanNo="+challanNo;}
			if(number==26){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&challanNo="+challanNo;}
			if(number==27){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&challanNo="+challanNo;}
			if(number==28){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&challanNo="+challanNo;}
			if(number==29){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&challanNo="+challanNo;}
			if(number==30){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&challanNo="+challanNo;}
			if(number==31){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&challanNo="+challanNo;}
			if(number==32){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&challanNo="+challanNo;}
			if(number==33){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&challanNo="+challanNo;}
			if(number==34){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&challanNo="+challanNo;}
			if(number==35){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&challanNo="+challanNo;}
			if(number==36){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&challanNo="+challanNo;}
			if(number==37){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&challanNo="+challanNo;}
			if(number==38){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&challanNo="+challanNo;}if(number==39){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&challanNo="+challanNo;}
			if(number==40){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&challanNo="+challanNo;}
			if(number==41){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&challanNo="+challanNo;}
			if(number==42){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&challanNo="+challanNo;}
			if(number==43){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&challanNo="+challanNo;}
			if(number==44){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&challanNo="+challanNo;}
			if(number==45){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&challanNo="+challanNo;}
			
			if(number==46){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&challanNo="+challanNo;}
			
			if(number==47){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&challanNo="+challanNo;}
			
			if(number==48){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&challanNo="+challanNo;}
			if(number==49){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&challanNo="+challanNo;}
			if(number==50){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&challanNo="+challanNo;}
			if(number==51){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&challanNo="+challanNo;}
			if(number==52){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&challanNo="+challanNo;}
			if(number==53){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&challanNo="+challanNo;}
			if(number==54){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&challanNo="+challanNo;}
			if(number==55){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&challanNo="+challanNo;}
			if(number==56){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&challanNo="+challanNo;}
			if(number==57){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&challanNo="+challanNo;}
			if(number==58){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&challanNo="+challanNo;}
			if(number==59){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&challanNo="+challanNo;}
			if(number==60){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&challanNo="+challanNo;}
			if(number==61){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&challanNo="+challanNo;}
			if(number==62){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&challanNo="+challanNo;}
			if(number==63){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&challanNo="+challanNo;}
			if(number==64){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&challanNo="+challanNo;}
			if(number==65){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&challanNo="+challanNo;}
			if(number==66){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&challanNo="+challanNo;}
			if(number==67){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&challanNo="+challanNo;}
			if(number==68){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&challanNo="+challanNo;}
			if(number==69){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&challanNo="+challanNo;}
			if(number==70){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&challanNo="+challanNo;}
			if(number==71){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&challanNo="+challanNo;}
			if(number==72){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&challanNo="+challanNo;}
			if(number==73){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&challanNo="+challanNo;}
			if(number==74){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&challanNo="+challanNo;}
			if(number==75){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&challanNo="+challanNo;}
			if(number==76){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&challanNo="+challanNo;}
			if(number==77){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&challanNo="+challanNo;}
			if(number==78){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&challanNo="+challanNo;}
			if(number==79){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&challanNo="+challanNo;}
			if(number==80){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&challanNo="+challanNo;}
			if(number==81){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&challanNo="+challanNo;}
			if(number==82){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&challanNo="+challanNo;}
			if(number==83){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&challanNo="+challanNo;}
			if(number==84){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&challanNo="+challanNo;}
			if(number==85){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&challanNo="+challanNo;}
			if(number==86){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&challanNo="+challanNo;}
			if(number==87){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&challanNo="+challanNo;}
			if(number==88){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&challanNo="+challanNo;}
			if(number==89){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&challanNo="+challanNo;}
			if(number==90){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&challanNo="+challanNo;}
			if(number==91){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&challanNo="+challanNo;}
			if(number==92){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&challanNo="+challanNo;}
			if(number==93){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&challanNo="+challanNo;}
			if(number==94){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&challanNo="+challanNo;}
			if(number==95){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&challanNo="+challanNo;}
			if(number==96){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&challanNo="+challanNo;}
			if(number==97){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&challanNo="+challanNo;}
			if(number==98){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&98="+n98+"&challanNo="+challanNo;}
			if(number==99){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&98="+n98+"&99="+n99+"&challanNo="+challanNo;}
			if(number==100){params="number="+number+"&invoiceNo="+invoiceNo+"&1="+one+"&2="+two+"&3="+three+"&4="+four+"&5="+five+"&6="+six+"&7="+seven+"&8="+eight+"&9="+nine+"&10="+ten+"&clicked_on="+clicked_on+"&11="+n11+"&12="+n12+"&13="+n13+"&14="+n14+"&15="+n15+"&16="+n16+"&17="+n17+"&18="+n18+"&19="+n19+"&20="+n20+"&21="+n21+"&22="+n22+"&23="+n23+"&24="+n24+"&25="+n25+"&26="+n26+"&27="+n27+"&28="+n28+"&29="+n29+"&30="+n30+"&31="+n31+"&32="+n32+"&33="+n33+"&34="+n34+"&35="+n35+"&36="+n36+"&37="+n37+"&38="+n38+"&39="+n39+"&40="+n40+"&41="+n41+"&42="+n42+"&43="+n43+"&44="+n44+"&45="+n45+"&46="+n46+"&47="+n47+"&48="+n48+"&49="+n49+"&50="+n50+"&51="+n51+"&52="+n52+"&53="+n53+"&54="+n54+"&55="+n55+"&56="+n56+"&57="+n57+"&58="+n58+"&59="+n59+"&60="+n60+"&61="+n61+"&62="+n62+"&63="+n63+"&64="+n64+"&65="+n65+"&66="+n66+"&67="+n67+"&68="+n68+"&69="+n69+"&70="+n70+"&71="+n71+"&72="+n72+"&73="+n73+"&74="+n74+"&75="+n75+"&76="+n76+"&77="+n77+"&78="+n78+"&79="+n79+"&80="+n80+"&81="+n81+"&82="+n82+"&83="+n83+"&84="+n84+"&85="+n85+"&86="+n86+"&87="+n87+"&88="+n88+"&89="+n89+"&90="+n90+"&91="+n91+"&92="+n92+"&93="+n93+"&94="+n94+"&95="+n95+"&96="+n96+"&97="+n97+"&98="+n98+"&99="+n99+"&100="+n100+"&challanNo="+challanNo;}
			
			xmlhttp.open("POST","../php/php_input.php",true);	
		}
		
		
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(params); 
	 }
function Ajax_Input_InventoryEntryAddItem(){	
  		
	 //company info
	 company=value('company');
	 address=value('address');
	 mobile=value('mobile');
	 representative=value('representative');
	 note=value('note');
	 //Purchase Invoice Information 
	 workOrder=value('workOrder');
	 purchaseInvoice=value('purchaseInvoice');
	 supplierChallan=value('supplierChallan');
	//Item info
	 itemName=value('item_name');
	 partNo=value('item_part_no');
	 brand=value('item_brand');
	 quantity=value('item_quantity');
	 unitPrice=value('unitPrice');
	 saleUnitPrice=value('saleUnitPrice');
	 // alert('test');
if(itemName!=''||partNo!=''||brand!='')
{clicked('InventoryEntryAddItem');}
else alert('Error:Invalid Input!!');
}
function updatePrice(){
	//Item info
	 itemName=value('selectItem');
	 partNo=value('selectItemPartNo');
	 brand=value('selectBrand');
	// quantity=value('item_quantity');
	 saleUnitPrice=value('unitPrice');
	 purchaseUnitPrice=value('purchaseUnitPrice');
	 //alert(brand);
	 if(saleUnitPrice!=''&& purchaseUnitPrice!='')
	clicked('updatePrice');
else alert('Error: Invalid Input');
}
function updateStock(){
	//alert()
	//Item info
	 itemName=value('selectItem');
	 partNo=value('selectItemPartNo');
	 brand=value('selectBrand');
	// quantity=value('item_quantity');
	 quantity=value('quantity');
	 provision=value('provision');
	// purchaseUnitPrice=value('purchaseUnitPrice');
	 //alert(brand);
	 if(quantity!='')
	clicked('updateQuantity');
else alert('Error: Invalid Input');
}

function ajaxInputAddClient(){
	
	company=value('company');
	address=value('address');
	mobile=value('mobile');
if(mobile!=''){
	representative=value('representative');
	note=value('note');
	if(company!=''&& representative!='')
		{
		clicked('addclient');
		

		}
	else alert('Error: Company Name Or Representative is Empty!!!');
}
else alert('ERROR: Mobile Number Must')
	}
function ajaxInputAddSupplier(){
	company=value('company');
	address=value('address');
	mobile=value('mobile');
	representative=value('representative');
	note=value('note');
	if(company!=''&& mobile!='')
	clicked('addSupplier');
else alert('Error: Invalid Input!!');
	
	}
function ajaxInputAddUser(){
	userName=value('userName');
	desig=value('desig');
	userPassword=value('userPassword');
	mobile=value('mobile');
	if(userName!=''&& userPassword!='')
	clicked('addUser');
else alert('Error: Invalid Input!!');
	}
function getExistingCustomerData(){
name=value('existingCustomerName');
//if(name!="--Select From Existing--"){
clicked('existingCustomerName');}
//}
function getExistingSupplierData(){
name=value('existingCompanyName');
//alert(name);
//if(name!="--Select From Existing--"){
clicked('existingSupplierCompany');//}
}
function addToCart(){

invoiceNo=value('invoiceNo');

company=value('company');
address=value('address');
mobile=value('mobile');
representative=value('representative');
note=value('note');

workOrder=value('workOrder');

selectBrand=value('selectBrand');
selectItemPartNo=value('selectItemPartNo');
selectItem=value('selectItem');
unitPrice=value('unitPrice');
quantity=value('quantity');

clicked('addToCard');
}
function moneyInWord(){
discount=value('discount');
invoice=value('invoiceNo');
clicked('moneyInWord');
}
function storeInvoiceInfo(){

invoiceNo=value('invoiceNo');
company=value('company');
mobile=value('mobile');
workOrder=value('workOrder');
vat=value('setVat');
tax=value('setTax');
discount=value('discount');
paidAmount=value('paidAmount');

clicked('storeInvoiceInfo');

}
function addBank(){
bankName=value('bankName');
accountNo=value('accountNo');
note=value('note');
if(bankName!=''&& accountNo!='')
clicked('addBank');
else alert('Error: Invalid Input!!');
}
function totalAmount(){
discount=value('discount');
invoice=value('invoiceNo');
clicked('discount');

}
function grandTotal(){
vat=value('setVat');
tax=value('setTax');
discount=value('discount');
invoice=value('invoiceNo');
clicked('grandTotal');
}
function setVat(){
vat=value('setVat');
discount=value('discount');
invoice=value('invoiceNo');
clicked('setVat');
}
function setTax(){
tax=value('setTax');
invoice=value('invoiceNo');
discount=value('discount');
clicked('setTax');
}
function updateSurfaceInvoiceInfoAfterChallan(sl){
invoiceNo=value('challanInvoiceNo');
if(sl==1){
number=1;
one=value('1');
clicked('updateSurfaceInvoiceInfoAfterChallan');

}
if(sl==2){
number=2;
one=value('1'); two=value('2');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}

if(sl==3){
number=3;
one=value('1');two=value('2');three=value('3');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==4){
number=4;
one=value('1');two=value('2');three=value('3');four=value('4');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==5){
number=5;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==6){
number=6;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==7){
number=7;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==8){
number=8;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==9){
number=9;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==10){
number=10;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==11){
number=11;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==12){
number=12;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==13){
number=13;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==14){
number=14;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==15){
number=15;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==16){
number=16;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==17){
number=17;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==18){
number=18;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==19){
number=19;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==20){
number=20;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==21){
number=21;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==22){
number=22;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==23){
number=23;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==24){
number=24;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==25){
number=25;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==26){
number=26;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==27){
number=27;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==28){
number=28;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==29){
number=29;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==30){
number=30;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==31){
number=31;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==32){
number=32;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==33){
number=33;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==34){
number=34;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==35){
number=35;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==36){
number=36;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==37){
number=37;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==38){
number=38;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==39){
number=39;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==40){
number=40;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==41){
number=41;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==42){
number=42;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==43){
number=43;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==44){
number=44;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==45){
number=45;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==46){
number=46;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==47){
number=47;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==48){
number=48;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==49){
number=49;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==50){
number=50;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==51){
number=51;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==52){
number=52;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==53){
number=53;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==54){
number=54;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==55){
number=55;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==56){
number=56;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==57){
number=57;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==58){
number=58;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}if(sl==58){
number=58;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}if(sl==59){
number=59;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==60){
number=60;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==61){
number=61;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==62){
number=62;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==63){
number=63;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==64){
number=64;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==65){
number=65;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==66){
number=66;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==67){
number=67;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==67){
number=67;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==68){
number=68;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==69){
number=69;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==70){
number=70;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==71){
number=71;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==72){
number=72;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==73){
number=73;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==74){
number=74;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==75){
number=75;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==76){
number=76;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==77){
number=77;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==78){
number=78;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==79){
number=79;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==80){
number=80;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==81){
number=81;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==81){
number=81;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}if(sl==82){
number=82;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==83){
number=83;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==84){
number=84;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==85){
number=85;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==86){
number=86;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==87){
number=87;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==88){
number=88;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==89){
number=89;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==90){
number=90;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==91){
number=91;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==92){
number=92;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==93){
number=93;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==94){
number=94;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==95){
number=95;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==96){
number=96;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==97){
number=97;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==98){
number=98;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');n98=value('98');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==99){
number=99;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');n98=value('98');n99=value('99');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
if(sl==100){
number=100;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');n98=value('98');n99=value('99');n100=value('1100');
clicked('updateSurfaceInvoiceInfoAfterChallan');
}
}
function editChallan(sl){
invoiceNo=value('challanInvoiceNo');
challanNo=value('challanNo');
if(sl==1){
number=1;
one=value('1');
clicked('editChallan');

}
if(sl==2){
number=2;
one=value('1'); two=value('2');
clicked('editChallan');
}

if(sl==3){
number=3;
one=value('1');two=value('2');three=value('3');
clicked('editChallan');
}
if(sl==4){
number=4;
one=value('1');two=value('2');three=value('3');four=value('4');
clicked('editChallan');
}
if(sl==5){
number=5;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');
clicked('editChallan');
}
if(sl==6){
number=6;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');
clicked('editChallan');
}
if(sl==7){
number=7;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');
clicked('editChallan');
}
if(sl==8){
number=8;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');
clicked('editChallan');
}
if(sl==9){
number=9;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
clicked('editChallan');
}
if(sl==10){
number=10;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');
clicked('editChallan');
}
if(sl==11){
number=11;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');
clicked('editChallan');
}
if(sl==12){
number=12;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');
clicked('editChallan');
}
if(sl==13){
number=13;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');
clicked('editChallan');
}
if(sl==14){
number=14;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');
clicked('editChallan');
}
if(sl==15){
number=15;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');
clicked('editChallan');
}
if(sl==16){
number=16;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');
clicked('editChallan');
}
if(sl==17){
number=17;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');
clicked('editChallan');
}
if(sl==18){
number=18;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');
clicked('editChallan');
}
if(sl==19){
number=19;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');
clicked('editChallan');
}
if(sl==20){
number=20;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');
clicked('editChallan');
}
if(sl==21){
number=21;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');
clicked('editChallan');
}
if(sl==22){
number=22;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');
clicked('editChallan');
}
if(sl==23){
number=23;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');
clicked('editChallan');
}
if(sl==24){
number=24;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');
clicked('editChallan');
}
if(sl==25){
number=25;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');
clicked('editChallan');
}
if(sl==26){
number=26;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');
clicked('editChallan');
}
if(sl==27){
number=27;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');
clicked('editChallan');
}
if(sl==28){
number=28;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');
clicked('editChallan');
}
if(sl==29){
number=29;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');
clicked('editChallan');
}
if(sl==30){
number=30;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');
clicked('editChallan');
}
if(sl==31){
number=31;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');
clicked('editChallan');
}
if(sl==32){
number=32;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');
clicked('editChallan');
}
if(sl==33){
number=33;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');
clicked('editChallan');
}
if(sl==34){
number=34;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');
clicked('editChallan');
}
if(sl==35){
number=35;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');
clicked('editChallan');
}
if(sl==36){
number=36;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');
clicked('editChallan');
}
if(sl==37){
number=37;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');
clicked('editChallan');
}
if(sl==38){
number=38;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');
clicked('editChallan');
}
if(sl==39){
number=39;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');
clicked('editChallan');
}
if(sl==40){
number=40;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');
clicked('editChallan');
}
if(sl==41){
number=41;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');
clicked('editChallan');
}
if(sl==42){
number=42;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');
clicked('editChallan');
}
if(sl==43){
number=43;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');
clicked('editChallan');
}
if(sl==44){
number=44;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');
clicked('editChallan');
}
if(sl==45){
number=45;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');
clicked('editChallan');
}
if(sl==46){
number=46;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');
clicked('editChallan');
}
if(sl==47){
number=47;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');
clicked('editChallan');
}
if(sl==48){
number=48;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');
clicked('editChallan');
}
if(sl==49){
number=49;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');
clicked('editChallan');
}
if(sl==50){
number=50;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');
clicked('editChallan');
}
if(sl==51){
number=51;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');
clicked('editChallan');
}
if(sl==52){
number=52;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');
clicked('editChallan');
}
if(sl==53){
number=53;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');
clicked('editChallan');
}
if(sl==54){
number=54;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');
clicked('editChallan');
}
if(sl==55){
number=55;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');
clicked('editChallan');
}
if(sl==56){
number=56;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');
clicked('editChallan');
}
if(sl==57){
number=57;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');
clicked('editChallan');
}
if(sl==58){
number=58;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');
clicked('editChallan');
}if(sl==58){
number=58;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');
clicked('editChallan');
}if(sl==59){
number=59;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');
clicked('editChallan');
}
if(sl==60){
number=60;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');
clicked('editChallan');
}
if(sl==61){
number=61;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');
clicked('editChallan');
}
if(sl==62){
number=62;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');
clicked('editChallan');
}
if(sl==63){
number=63;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');
clicked('editChallan');
}
if(sl==64){
number=64;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');
clicked('editChallan');
}
if(sl==65){
number=65;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');
clicked('editChallan');
}
if(sl==66){
number=66;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');
clicked('editChallan');
}
if(sl==67){
number=67;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');
clicked('editChallan');
}
if(sl==67){
number=67;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');
clicked('editChallan');
}
if(sl==68){
number=68;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');
clicked('editChallan');
}
if(sl==69){
number=69;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');
clicked('editChallan');
}
if(sl==70){
number=70;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');
clicked('editChallan');
}
if(sl==71){
number=71;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');
clicked('editChallan');
}
if(sl==72){
number=72;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');
clicked('editChallan');
}
if(sl==73){
number=73;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');
clicked('editChallan');
}
if(sl==74){
number=74;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');
clicked('editChallan');
}
if(sl==75){
number=75;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');
clicked('editChallan');
}
if(sl==76){
number=76;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');
clicked('editChallan');
}
if(sl==77){
number=77;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');
clicked('editChallan');
}
if(sl==78){
number=78;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');
clicked('editChallan');
}
if(sl==79){
number=79;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');
clicked('editChallan');
}
if(sl==80){
number=80;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');
clicked('editChallan');
}
if(sl==81){
number=81;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');
clicked('editChallan');
}
if(sl==81){
number=81;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');
clicked('editChallan');
}if(sl==82){
number=82;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');
clicked('editChallan');
}
if(sl==83){
number=83;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');
clicked('editChallan');
}
if(sl==84){
number=84;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');
clicked('editChallan');
}
if(sl==85){
number=85;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');
clicked('editChallan');
}
if(sl==86){
number=86;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');
clicked('editChallan');
}
if(sl==87){
number=87;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');
clicked('editChallan');
}
if(sl==88){
number=88;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');
clicked('editChallan');
}
if(sl==89){
number=89;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');
clicked('editChallan');
}
if(sl==90){
number=90;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');
clicked('editChallan');
}
if(sl==91){
number=91;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');
clicked('editChallan');
}
if(sl==92){
number=92;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');
clicked('editChallan');
}
if(sl==93){
number=93;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');
clicked('editChallan');
}
if(sl==94){
number=94;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');
clicked('editChallan');
}
if(sl==95){
number=95;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');
clicked('editChallan');
}
if(sl==96){
number=96;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');
clicked('editChallan');
}
if(sl==97){
number=97;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');
clicked('editChallan');
}
if(sl==98){
number=98;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');n98=value('98');
clicked('editChallan');
}
if(sl==99){
number=99;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');n98=value('98');n99=value('99');
clicked('editChallan');
}
if(sl==100){
number=100;
one=value('1');two=value('2');three=value('3');four=value('4');five=value('5');six=value('6');seven=value('7');eight=value('8');nine=value('9');
ten=value('10');n11=value('11');n12=value('12');n13=value('13');n14=value('14');n15=value('15');n16=value('16');n17=value('17');n18=value('18');n19=value('19');n20=value('20');n21=value('21');n22=value('22');n23=value('23');n24=value('24');n25=value('25');n26=value('26');n27=value('27');n28=value('28');n29=value('29');n30=value('30');n31=value('31');n32=value('32');n33=value('33');n34=value('34');n35=value('35');n36=value('36');n37=value('37');n38=value('38');n39=value('39');n40=value('40');n41=value('41');n42=value('42');n43=value('43');n44=value('44');n45=value('45');n46=value('46');n47=value('47');n48=value('48');n49=value('49');n50=value('50');n51=value('51');n52=value('52');n53=value('53');n54=value('54');n55=value('55');n56=value('56');n57=value('57');n58=value('58');n59=value('59');n60=value('60');n61=value('61');n62=value('62');n63=value('63');n64=value('64');n65=value('65');n66=value('66');n67=value('67');n68=value('68');n69=value('69');n70=value('70');n71=value('71');n72=value('72');n73=value('73');n74=value('74');n75=value('75');n76=value('76');n77=value('77');n78=value('78');n79=value('79');n80=value('80');n81=value('81');n82=value('82');n83=value('83');n84=value('84');n85=value('85');n86=value('86');n87=value('87');n88=value('88');n89=value('89');n90=value('90');n91=value('91');n92=value('92');n93=value('93');n94=value('94');n95=value('95');n96=value('96');n97=value('97');n98=value('98');n99=value('99');n100=value('1100');
clicked('editChallan');
}
}

function cancelInvoice(){
clicked('cancelInvoice');
}
function badDraftAction(){
//alert()
badDraftAmount=value('badDraft');
invoiceNo=value('invoiceNo');
dueAmount=value('dueAmount');
newDue=dueAmount-badDraftAmount;
document.getElementById('dueAmount').value=newDue;
clicked('badDraftAction');
}
