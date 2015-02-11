function HubFunctionEdit(note){

var xmlhttp;
if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest(); }
else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
// funtion option start
 if(note=='proformaInvoice'||note=='invoice'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("editMassage").innerHTML=xmlhttp.responseText;
	setTimeout(function() {location.reload();},1000);
    }
  }
  params="rowId="+rowId+"&editItem_quantity="+quantity+"&editItem_price="+price+"&note="+note;
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='updateInventory'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("storeInvoiceInfoMassage").innerHTML=xmlhttp.responseText;
	
    }
  }
  params="note="+note;
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='InvoiceCancle'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("storeInvoiceInfoMassage").innerHTML=xmlhttp.responseText;
	setTimeout(function() {location.reload();},1000);
    }
  }
  params="note="+note;
  //alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='changePass'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("massage").innerHTML=xmlhttp.responseText;
	setTimeout(function() {location.reload();},1000);
	//
    }
  }
  params="oldPass="+oldPass+"&newPass="+newPass+"&note="+note;
  //alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='editInvoice'){
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("editMassage").innerHTML=xmlhttp.responseText;
	//setTimeout(function() {location.reload();},1000);
	//
    }
  }
  params="invoice="+invoice+"&note="+note;
  //alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='updateUnitPrice'){
//alert(tid);
//alert(unitPrice);
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    document.getElementById("subtotal").value=xmlhttp.responseText;
	//setTimeout(function() {location.reload();},1000);
	//
    }
	//
  }
  //id=id;value=value;
  params="id="+tid+"&unitPrice="+unitPrice+"&invoice="+invoice+"&note="+note;
  //alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='updateQuantity'){
//alert(tid);
//alert(unitPrice);
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    document.getElementById("subtotal").value=xmlhttp.responseText;
	//setTimeout(function() {location.reload();},1000);
	//
    }
	//
  }
  //id=id;value=value;
  params="id="+tid+"&qantity="+qantity+"&invoice="+invoice+"&note="+note;
 // alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='setDiscount'){
//alert(tid);
//alert(unitPrice);
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    document.getElementById("grandTotal").innerHTML=xmlhttp.responseText;
	//setTimeout(function() {location.reload();},1000);
	//
    }
	//
  }

  params="invoice="+invoice+"&discount="+discount+"&note="+note;
 // alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
if(note=='setVatOrTax'){
/*alert(invoice);
alert(idValue);
alert(option);*/
//alert(unitPrice);
//,parcentage,vatOrTax
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	
    document.getElementById("grandTotal").innerHTML=xmlhttp.responseText;
	//setTimeout(function() {location.reload();},1000);
	//
    }
	//
  }

  params="invoice="+invoice+"&idValue="+idValue+"&option="+option+"&note="+note;
 //alert(params)
xmlhttp.open("POST","../php/php_edit.php",true);
}
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(params);
	//clicked('YesDelete');
	
	}
function updateInventoryStore(note){
note=note;
HubFunctionEdit(note);
}
function YesSave(note){
	note=note;
	rowId=value('saveIdForEdit');
	quantity=value('editItem_quantity');
	price=value('editItem_price');
	
	HubFunctionEdit(note);
}
function InvoiceCancle(){

HubFunctionEdit('InvoiceCancle');
}
function changePass(){
oldPass=value('oldPass');
newPass=value('newPass');
confNewPass=value('confNewPass');
if(newPass!=confNewPass){alert('ERROR: Conformation Pass. Is Not Match With New Pass.!!')}
else if(oldPass=='' || oldPass=='' || confNewPass==''){alert('ERROR:Empty Field Is Not Allowed!')}
else
HubFunctionEdit('changePass');

}
//no need
function editInvoice(){
	invoice=value('editInvoice');
	HubFunctionEdit('editInvoice');
}
//End no need
function updateUnitPrice(id, UnitPrice, invoiceNo){
tid=id;unitPrice=UnitPrice;invoice=invoiceNo;

HubFunctionEdit('updateUnitPrice');
}
function updateQuantity(id,Qantity,invoiceNo){
tid=id;qantity=Qantity;invoice=invoiceNo;

HubFunctionEdit('updateQuantity');
}
function setDiscount(value, invoiceNo){
discount=value;
invoice=invoiceNo;
HubFunctionEdit('setDiscount');

}
function vatTaxAmount(parcentage,idName){
//alert(id)
subTotal=value('subtotal');
discount=value('discount');
vatP=parcentage;
amount=Math.round((subTotal-discount)*(vatP/100));
document.getElementById(idName).value=amount;
}
function setVatOrTax(invoiceNo,vatOrTax,idName){
//alert(invoiceNo)
invoice=invoiceNo;
idValue=value(idName);
option=vatOrTax;
HubFunctionEdit('setVatOrTax');
}