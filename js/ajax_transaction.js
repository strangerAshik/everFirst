function transactionHub(clickedOn){
	var xmlhttp;
	if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest(); }
	else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
	

	 if(clickedOn=='cashSaleTransaction'){
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }
	  params="invoice="+invoice+"&clickedOn="+clickedOn;
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}  
	if(clickedOn=='bankSaleTransaction'){
	
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }
	  params="invoice="+invoice+"&clickedOn="+clickedOn;
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	} 
	if(clickedOn=='keepRecordCashSaleTransaction'){
	
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }
	  params="invoice="+invoice+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&amount="+amount+"&note="+note+"&voucherNo="+voucherNo+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='keepRecordBankSaleTransaction'){
	
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }
params="invoice="+invoice+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&chequeOrTtNo="+chequeOrTtNo+"&bankForm="+bankForm+"&voucherNo="+voucherNo+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='getThisBankAccounts'){
	
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("bankAccount").innerHTML=xmlhttp.responseText;
		}
	  }
	  params="bankName="+bankName+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='getThisBankAccounts2nd'){
	
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("toBankAccount").innerHTML=xmlhttp.responseText;
		}
	  }
	  params="bankName="+bankName+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	
	if(clickedOn=='keepRecorNewInvest'){
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="workOrder="+workOrder+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&amount="+amount+"&note="+note+"&voucherNo="+voucherNo+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='keepRecorNewInvestBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="workOrder="+workOrder+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&voucherNo="+voucherNo+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	
	if(clickedOn=='keepRecordBankLoanCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massageLoan").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="loanTransactionId="+loanTransactionId+"&bankName="+bankName+"&bankAccount="+bankAccount+"&amount="+amount+"&note="+note+"&voucherNo="+voucherNo+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='keepRecordBankLoanBank'){
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massageLoanBank").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="loanTransactionId="+loanTransactionId+"&bankName="+bankName+"&bankAccount="+bankAccount+"&amount="+amount+"&note="+note+"&voucherNo="+voucherNo+"&toBankName="+toBankName+"&toBankAccount="+toBankAccount+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='searchExistness'){
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
			
			
		}
	  }
	  params="workOrder="+workOrder+"&clickedOn="+clickedOn;
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	//showDiv('generateVoucher');
	}
	if(clickedOn=='searchExistnessForWorkOrderOrInvoice'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }

	  params="workOrder="+workOrder+"&invoice="+invoice+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	}
	if(clickedOn=='searchExistnessOfUtilityTypeAndBillNo'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }
		
	  params="utilityType="+utilityType+"&billNo="+billNo+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='searchExistnessOfInvoice'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }
		
	  params="invoice="+invoice+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='searchLoanTransaction'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }
		
	  params="loanTransactionId="+loanTransactionId+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='searchExistnessWorkOrderForRepayAdvancePay'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("commonContent").innerHTML=xmlhttp.responseText;
		}
	  }
		
	  params="workOrder="+workOrder+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='repayAdvanceCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="workOrder="+workOrder+"&voucherNo="+voucherNo+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='repayAdvanceCashBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="workOrder="+workOrder+"&voucherNo="+voucherNo+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='creditOtherCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="voucherNo="+voucherNo+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&amount="+amount+"&note="+note+"&workOrder="+workOrder+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='creditOtherCashBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="voucherNo="+voucherNo+"&payFrom="+payFrom+"&mobile="+mobile+"&address="+address+"&amount="+amount+"&note="+note+"&workOrder="+workOrder+"&bankName="+bankName+"&bankAccount="+bankAccount+"&clickedOn="+clickedOn+"&purpose="+purpose;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='debitInfoWithWorkOrderCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }
		
	  params="purpose="+purpose+"&workOrder="+workOrder+"&voucherNo="+voucherNo+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn;
	
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}

	if(clickedOn=='debitInfoWithWorkOrderAndInvoiceCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }
		
	  params="purpose="+purpose+"&workOrder="+workOrder+"&invoice="+invoice+"&voucherNo="+voucherNo+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn;
	
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='debitInfoWithWorkOrderBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="purpose="+purpose+"&workOrder="+workOrder+"&voucherNo="+voucherNo+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&chequeNumber="+chequeNumber+"&clickedOn="+clickedOn;
	
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='debitInfoWithWorkOrderAndInvoiceBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	  params="purpose="+purpose+"&workOrder="+workOrder+"&invoice="+invoice+"&voucherNo="+voucherNo+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&chequeNumber="+chequeNumber+"&clickedOn="+clickedOn;
	
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='utilityBillCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }
	params="purpose="+purpose+"&utilityType="+utilityType+"&billNo="+billNo+"&voucherNo="+voucherNo+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn;
	
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='utilityBillBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }


	params="purpose="+purpose+"&utilityType="+utilityType+"&billNo="+billNo+"&voucherNo="+voucherNo+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&dueAmount="+dueAmount+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&chequeNumber="+chequeNumber+"&clickedOn="+clickedOn;
	
	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='vehicleMaintenanceCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }


	params="purpose="+purpose+"&voucherNo="+voucherNo+"&vehicleNumber="+vehicleNumber+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&reason="+reason+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='vehicleMaintenanceBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	params="purpose="+purpose+"&voucherNo="+voucherNo+"&vehicleNumber="+vehicleNumber+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&reason="+reason+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&chequeNumber="+chequeNumber+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='saleCommissionCash'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	params="purpose="+purpose+"&invoice="+invoice+"&voucherNo="+voucherNo+"&grandTotal="+grandTotal+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&commission="+commission+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='saleCommissionBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	params="purpose="+purpose+"&invoice="+invoice+"&voucherNo="+voucherNo+"&grandTotal="+grandTotal+"&payTo="+payTo+"&mobile="+mobile+"&address="+address+"&commission="+commission+"&amount="+amount+"&note="+note+"&bankName="+bankName+"&bankAccount="+bankAccount+"&chequeNumber="+chequeNumber+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='loanRepayCash'){
	//alert()
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massageloanRepayCash").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	params="purpose="+purpose+"&voucherNo="+voucherNo+"&loanTransactionId="+loanTransactionId+"&storeBank="+storeBank+"&storeAccount="+storeAccount+"&loanAmount="+loanAmount+"&amount="+amount+"&note="+note+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}
	if(clickedOn=='loanRepayBank'){
	
		xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("massage").innerHTML=xmlhttp.responseText;
			setTimeout(function() {location.reload();},1000);
		}
	  }

	params="purpose="+purpose+"&voucherNo="+voucherNo+"&loanTransactionId="+loanTransactionId+"&storeBank="+storeBank+"&storeAccount="+storeAccount+"&loanAmount="+loanAmount+"&amount="+amount+"&note="+note+"&fromBank="+fromBank+"&fromAccount="+fromAccount+"&chequeNumber="+chequeNumber+"&clickedOn="+clickedOn;

	xmlhttp.open("POST","../php/php_transaction_input.php",true);
	
	}

	
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(params); 
}

function cashSaleTransaction(){
invoice=value('invoice');
if(invoice==''){alert('Invoice Empty Is Not Allowed');}
else{transactionHub('cashSaleTransaction');}

}

function bankSaleTransaction(){
invoice=value('invoice');
if(invoice==''){alert('Invoice Empty Is Not Allowed');}
else{transactionHub('bankSaleTransaction');}
}
function getThisBankAccounts(){
bankName=value('bankName');
transactionHub('getThisBankAccounts');
}
function getThisBankAccounts2nd(){
bankName=value('toBankName');
transactionHub('getThisBankAccounts2nd');
}

function searchExistness(){
workOrder=value('workOrder');
if(workOrder==''){alert('ERROR: Work Order Is Null.');}
else{
transactionHub('searchExistness');
showDiv('generateVoucher');
}

}

function searchExistnessBank(){
workOrder=value('workOrder');
if(workOrder==''){alert('ERROR: Work Order Is Null.');}
else{
transactionHub('searchExistness');
document.getElementById('bankInfo').style.display='block';
document.getElementById('generateVoucher').style.display='block';
}

}
function searchExistnessForWorkOrderOrInvoice(){
workOrder=value('workOrder');
invoice=value('invoice');
if(workOrder=='' && invoice==''){alert('ERROR: Work Order Is Null.');}
else{
transactionHub('searchExistnessForWorkOrderOrInvoice');
showDiv('generateVoucher');
}
}
function searchExistnessForWorkOrderOrInvoiceBank(){
workOrder=value('workOrder');
invoice=value('invoice');
if(workOrder=='' && invoice==''){alert('ERROR: Work Order Is Null.');}
else{
transactionHub('searchExistnessForWorkOrderOrInvoice');
document.getElementById('bankInfo').style.display='block';
document.getElementById('generateVoucher').style.display='block';
}
}
function officeRentCash(){
workOrder=value('workOrder');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');
}
function searchExistnessOfUtilityTypeAndBillNo(){
utilityType=value('utilityType');
billNo=value('billNo');
if(utilityType=='--Select Utility--'){alert('ERROR: Utility Type Is Not Selected!');}
else if(billNo==''){alert('ERROR: Bill No Is Null')}
else{
transactionHub('searchExistnessOfUtilityTypeAndBillNo');
document.getElementById('generateVoucher').style.display='block';
}
}
function searchExistnessOfUtilityTypeAndBillNoBank(){
utilityType=value('utilityType');
billNo=value('billNo');
if(utilityType=='--Select Utility--'){alert('ERROR: Utility Type Is Not Selected!');}
else if(billNo==''){alert('ERROR: Bill No Is Null')}
else{
transactionHub('searchExistnessOfUtilityTypeAndBillNo');
document.getElementById('bankInfo').style.display='block';
document.getElementById('generateVoucher').style.display='block';
}
}

function searchExistnessOfInvoice(){
invoice=value('invoice');
if(invoice==''){alert('ERROR:Invoice Is Null')}
else{
transactionHub('searchExistnessOfInvoice');
document.getElementById('generateVoucher').style.display='block';
}

}
function searchExistnessOfInvoiceBank(){
invoice=value('invoice');
if(invoice==''){alert('ERROR:Invoice Is Null')}
else{
transactionHub('searchExistnessOfInvoice');
document.getElementById('bankInfo').style.display='block';
document.getElementById('generateVoucher').style.display='block';
}
}
function searchLoanTransaction(){
loanTransactionId=value('loanTransactionId');
if(loanTransactionId==''){alert('ERROR:Loan Transaction Id Is Null')}
else{
transactionHub('searchLoanTransaction');

document.getElementById('generateVoucher').style.display='block';
}
}
function searchLoanTransactionBank(){
loanTransactionId=value('loanTransactionId');
if(loanTransactionId==''){alert('ERROR:Loan Transaction Id Is Null')}
else{
transactionHub('searchLoanTransaction');
document.getElementById('bankInfo').style.display='block';
document.getElementById('generateVoucher').style.display='block';
}
}
function searchExistnessWorkOrderForRepayAdvancePay(){
workOrder=value('workOrder');
if(workOrder==''){alert('ERROR: Work Order Is Null.');}
else{
transactionHub('searchExistnessWorkOrderForRepayAdvancePay');
showDiv('generateVoucher');
}
}
function searchExistnessWorkOrderForRepayAdvancePayBank(){
workOrder=value('workOrder');
if(workOrder==''){alert('ERROR: Work Order Is Null.');}
else{
transactionHub('searchExistnessWorkOrderForRepayAdvancePay');
document.getElementById('bankInfo').style.display='block';
document.getElementById('generateVoucher').style.display='block';
}
}
function calculateSaleCommissionAmount(grandTotal){
commissionInParsentage=value('commission');
var amountPattern = /^[.0-9]*$/i;
if(!amountPattern.test(commissionInParsentage)){alert('Amount Should Positive Number');}
else{
amount=grandTotal*(commissionInParsentage/100);
document.getElementById('amount').value=amount;}
}

//Start credit js function 
function repayAdvanceCash(){
purpose=value('creditPurposesCash');
workOrder=value('workOrder');
voucherNo=value('voucherNo');
payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');
//alert(voucherNo)
var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(workOrder==''){alert('Work Order cant Remain Empty');}
else if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('repayAdvanceCash');}
}
function repayAdvanceCashBank(){
purpose=value('creditPurposesBank');
workOrder=value('workOrder');
voucherNo=value('voucherNo');
payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');
bankName=value('bankName');
bankAccount=value('bankAccount');
//alert(voucherNo)
var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(workOrder==''){alert('Work Order cant Remain Empty');}
else if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(bankName=='--Select Bank--'){alert('ERROR: Bank Name Is Not Selected!!')}
else if(bankAccount=='--Select Bank--'){alert('ERROR: Account Is Not Selected!!')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('repayAdvanceCashBank');}
}
function creditOtherCash(){
purpose=value('creditPurposesCash');
workOrder=value('workOrder');
voucherNo=value('voucherNo');
payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
amount=value('amount');
note=value('note');

var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(workOrder==''){alert('Work Order cant Remain Empty');}
else if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('creditOtherCash');}

}
function creditOtherCashBank(){
purpose=value('creditPurposesBank');
workOrder=value('workOrder');
voucherNo=value('voucherNo');
payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
amount=value('amount');
note=value('note');
bankName=value('bankName');
bankAccount=value('bankAccount');

var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(workOrder==''){alert('Work Order cant Remain Empty');}
else if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('creditOtherCashBank');}

}
function keepRecordCashSaleTransaction(){
purpose=value('creditPurposesCash');
voucherNo=value('voucherNo');
invoice=value('invoice');
payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
amount=value('amount');
note=value('note');
var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('keepRecordCashSaleTransaction');}

}
function keepRecordBankSaleTransaction(){
purpose=value('creditPurposesBank');
voucherNo=value('voucherNo');
invoice=value('invoice');
payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
amount=value('amount');
note=value('note');

bankName=value('bankName');
bankAccount=value('bankAccount');
chequeOrTtNo=value('chequeOrTtNo');
bankForm=value('bankForm');

var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('keepRecordBankSaleTransaction');}
}
function keepRecorNewInvestCash(){
purpose=value('creditPurposesCash');
voucherNo=value('voucherNo');
workOrder=value('workOrder');

payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
amount=value('amount');
note=value('note');

var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(workOrder==''){alert('Work Order cant Remain Empty');}
else if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('keepRecorNewInvest');}
}
function keepRecorNewInvestBank(){
purpose=value('creditPurposesBank');
voucherNo=value('voucherNo');
workOrder=value('workOrder');

payFrom=value('payFrom');
mobile=value('mobile');
address=value('address');
amount=value('amount');
note=value('note');
bankName=value('bankName');
bankAccount=value('bankAccount');

var amountPattern = /^[0-9]*$/i;
var mobilePattern = /^([+0-9]{1,3})?([0-9]{10,11})$/i;
if(workOrder==''){alert('Work Order cant Remain Empty');}
else if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(!mobilePattern.test(mobile)){alert('Invalid Mobile number')}
else if(payFrom==''){alert('Pay From Can not Remain Empty!!');}
else{transactionHub('keepRecorNewInvestBank');}
}
function keepRecordBankLoanCash(){
purpose=value('creditPurposesCash');
voucherNo=value('voucherNo');
loanTransactionId=value('loanTransactionId');
bankName=value('bankName');
bankAccount=value('bankAccount');
amount=value('amount');
note=value('note');
var amountPattern = /^[0-9]*$/i;
if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(loanTransactionId==''){alert('Error:Loan Transaction ID Can Not Empty')}
else{transactionHub('keepRecordBankLoanCash');}

}
function keepRecordBankLoanBank(){
purpose=value('creditPurposesBank');
voucherNo=value('voucherNo');

loanTransactionId=value('loanTransactionId');
bankName=value('bankName');
bankAccount=value('bankAccount');
amount=value('amount');
note=value('note');
toBankName=value('toBankName');
toBankAccount=value('toBankAccount');
var amountPattern = /^[0-9]*$/i;
if(!amountPattern.test(amount)){alert('Amount Should Positive Intiger');}
else if(loanTransactionId==''){alert('Error:Loan Transaction ID Can Not Empty')}
else{transactionHub('keepRecordBankLoanBank');}

}

//End credit js function 
function debitInfoWithWorkOrderCash(){
purpose=value('debitPurposesCash');
workOrder=value('workOrder');
voucherNo=value('voucherNo');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');

transactionHub('debitInfoWithWorkOrderCash');
}
function debitInfoWithWorkOrderBank(){
purpose=value('debitPurposesBank');
workOrder=value('workOrder');
voucherNo=value('voucherNo');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');
bankName=value('bankName');
bankAccount=value('bankAccount');
chequeNumber=value('chequeNumber');

transactionHub('debitInfoWithWorkOrderBank');
}
function debitInfoWithWorkOrderAndInvoiceCash(){
purpose=value('debitPurposesCash');
workOrder=value('workOrder');
invoice=value('invoice');
voucherNo=value('voucherNo');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');

transactionHub('debitInfoWithWorkOrderAndInvoiceCash');
}
function debitInfoWithWorkOrderAndInvoiceBank(){
purpose=value('debitPurposesBank');
workOrder=value('workOrder');
invoice=value('invoice');
voucherNo=value('voucherNo');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');
bankName=value('bankName');
bankAccount=value('bankAccount');
chequeNumber=value('chequeNumber');

transactionHub('debitInfoWithWorkOrderAndInvoiceBank');
}
function utilityBillCash(){
purpose=value('debitPurposesCash');

utilityType=value('utilityType');
billNo=value('billNo');
voucherNo=value('voucherNo');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');

transactionHub('utilityBillCash');
}
function utilityBillBank(){
purpose=value('debitPurposesBank');

utilityType=value('utilityType');
billNo=value('billNo');
voucherNo=value('voucherNo');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
dueAmount=value('dueAmount');
amount=value('amount');
note=value('note');
bankName=value('bankName');
bankAccount=value('bankAccount');
chequeNumber=value('chequeNumber');

transactionHub('utilityBillBank');
}
function vehicleMaintenanceCash(){
purpose=value('debitPurposesCash');
voucherNo=value('voucherNo');
vehicleNumber=value('vehicleNumber');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
reason=value('reason');
amount=value('amount');
note=value('note');

transactionHub('vehicleMaintenanceCash');
}
function vehicleMaintenanceBank(){
purpose=value('debitPurposesBank');
voucherNo=value('voucherNo');
vehicleNumber=value('vehicleNumber');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
reason=value('reason');
amount=value('amount');
bankName=value('bankName');
bankAccount=value('bankAccount');
chequeNumber=value('chequeNumber');
note=value('note'); 

transactionHub('vehicleMaintenanceBank');
}
function saleCommissionCash(){
purpose=value('debitPurposesBank');
invoice=value('invoice');
voucherNo=value('voucherNo');
grandTotal=value('grandTotal');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
commission=value('commission'); 
amount=value('amount');
note=value('note'); 

transactionHub('saleCommissionCash');

}
function saleCommissionBank(){
purpose=value('debitPurposesBank');
invoice=value('invoice');
voucherNo=value('voucherNo');
grandTotal=value('grandTotal');
payTo=value('payTo');
mobile=value('mobile');
address=value('address');
commission=value('commission'); 
amount=value('amount');
note=value('note'); 
bankName=value('bankName');
bankAccount=value('bankAccount');
chequeNumber=value('chequeNumber');

transactionHub('saleCommissionBank');
}
function loanRepayCash(){
purpose=value('debitPurposesCash');
voucherNo=value('voucherNo');
loanTransactionId=value('loanTransactionId');
storeBank=value('storeBank');
storeAccount=value('storeAccount');
loanAmount=value('loanAmount');
amount=value('amount');
note=value('note');

transactionHub('loanRepayCash');
}
function loanRepayBank(){
purpose=value('debitPurposesBank');
voucherNo=value('voucherNo');
loanTransactionId=value('loanTransactionId');
storeBank=value('storeBank');
storeAccount=value('storeAccount');
loanAmount=value('loanAmount');
amount=value('amount');
note=value('note');

fromBank=value('bankName');
fromAccount=value('bankAccount');
chequeNumber=value('chequeNumber');

transactionHub('loanRepayBank');
}