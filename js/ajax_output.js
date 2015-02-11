function HubFunctionOutput(note){
var xmlhttp;
if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest(); }
else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }

// funtion option start
 if(note=='getPartNo'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("selectItemPartNo").innerHTML=xmlhttp.responseText;
	
    }
  }
  
params="brand="+brand+"&itemName="+itemName+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
 if(note=='getItemList'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("selectItem").innerHTML=xmlhttp.responseText;
	
    }
  }
  
params="brand="+brand+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}

 if(note=='getBrand'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("selectBrand").innerHTML=xmlhttp.responseText;
	
    }
  }
  
params="itemName="+itemName+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
if(note=='getUnitPrice'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    
	document.getElementById("unitPrice").placeholder='SuggestPrice:'+xmlhttp.responseText;
	
    }
  }
  
params="itemName="+itemName+"&brand="+brand+"&itemPartNo="+itemPartNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
if(note=='getQuantity'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    
	document.getElementById("quantity").value=xmlhttp.responseText;
	//alert(xmlhttp.responseText);
	
    }
  }
  
params="itemName="+itemName+"&brand="+brand+"&itemPartNo="+itemPartNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
if(note=='getProvision'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    
	document.getElementById("provision").value=xmlhttp.responseText;
	//alert(xmlhttp.responseText);
	
    }
  }
  
params="itemName="+itemName+"&brand="+brand+"&itemPartNo="+itemPartNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
if(note=='getPurchasePrice'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    
	document.getElementById("purchaseUnitPrice").value=xmlhttp.responseText;
	
    }
  }
  
params="itemName="+itemName+"&brand="+brand+"&itemPartNo="+itemPartNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}  
if(note=='showChallanInfo'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("challanDetailes").innerHTML=xmlhttp.responseText;
	
    }
  }
  
params="invoiceNo="+invoiceNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
if(note=='badDraftIssue'){

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("invoiceDetail").innerHTML=xmlhttp.responseText;
	
    }
  }
  
params="invoiceNo="+invoiceNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}
if(note=='showEditChallanInfo'){

xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("editChallanInfo").innerHTML=xmlhttp.responseText;
	
    }
  }

params="invoiceNo="+challanInvoiceNo+"&challanNo="+challanNo+"&clicked_on="+note;

xmlhttp.open("POST","../php/php_input.php",true);
}

//send params
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(params);

}

//event function call
function getItemList(){
brand=value('selectBrand');
HubFunctionOutput('getItemList');
}
function getPartNo(){
brand=value('selectBrand');
itemName=value('selectItem');

HubFunctionOutput('getPartNo');
}
function getQuantity(){
brand=value('selectBrand');
itemName=value('selectItem');
itemPartNo=value('selectItemPartNo');
HubFunctionOutput('getQuantity');
}
function getProvision(){
brand=value('selectBrand');
itemName=value('selectItem');
itemPartNo=value('selectItemPartNo');
HubFunctionOutput('getProvision');
}
function getBrand(){
itemName=value('selectItem');

HubFunctionOutput('getBrand');
}
function getUnitPrice(){
brand=value('selectBrand');
itemName=value('selectItem');
itemPartNo=value('selectItemPartNo');
HubFunctionOutput('getUnitPrice');
}
function getPurchasePrice(){
brand=value('selectBrand');
itemName=value('selectItem');
itemPartNo=value('selectItemPartNo');
HubFunctionOutput('getPurchasePrice');
}
function showChallanInfo(){
invoiceNo=value('challanInvoiceNo');
if(invoiceNo==''){alert('This Field Can Not Remain Empty ')}
else 
HubFunctionOutput('showChallanInfo');
}
function badDraftIssue(){
invoiceNo=value('invoiceNo');
if(invoiceNo==''){alert('ERROR: Invoice No. Is Null')}
else
HubFunctionOutput('badDraftIssue');
}
function showEditChallanInfo(){
challanInvoiceNo=value('challanInvoiceNo');
challanNo=value('challanNo');
if(challanInvoiceNo==''||challanNo==''){alert('ERROR: Invoice No. or Challan NO. Is Null')}
else
HubFunctionOutput('showEditChallanInfo');
}

