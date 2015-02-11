//basic work for doing staff easy
function value(idName){return document.getElementById(idName).value;}
function warning(idName){return document.getElementById(idName).style.border="2px solid red";}

$(document).ready(function(){
	/*Start Credit page load area */
		   $("#repayAdvancePayment").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/repayAdvancePayment.php');
		    
		   }); 
		     $("#bankRepayAdvancePayment").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankRepayAdvancePayment.php');
		    
		   }); 
		    $("#saleTransaction").click(function(){
			document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/saleTransaction.php');		    
		   }); 
		   $("#bankSaleTransaction").click(function(){
			document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankSaleTransaction.php');		    
		   }); 
		     $("#bankLoan").click(function(){
			 //alert();
			 document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankLoan.php');	    
		   });  
		   $("#bankBankLoan").click(function(){
			 document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankBankLoan.php');		    
		   }); 
		     $("#newInvest").click(function(){
			 document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/newInvest.php');		    
		   }); 
		   $("#bankNewInvest").click(function(){
			 document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankNewInvest.php');		    
		   }); 
		     $("#cashCredit").click(function(){
			 document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/cashCredit.php');		    
		   });  
		   $("#bankCashCredit").click(function(){
			 document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankCashCredit.php');		    
		   }); 
		       $("#others").click(function(){
			   document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/others.php');		    
		   });  
		   $("#bankOthers").click(function(){
			   document.getElementById('result').style.display='block';
		   	$('#result').load('creditPurpases/bankOthers.php');		    
		   });  
		   $("#creditCash").click(function(){
			   document.getElementById('result').style.display='block';
		   	$('#purposes').load('creditPurpases/purposes.php');		    
		   }); 
	/*End Credit page load area */

/*Start Debit page load area */
	/*Cash Debit*/
	 $("#officeRent").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/officeRent.php');		    
		   });
	$("#officeEquipmentPurchase").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/officeEquipmentPurchase.php');		    
		   });
    $("#officeEquipmentService").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/officeEquipmentService.php');		    
		   });
      $("#officeUtilityBill").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/officeUtilityBill.php');		    
		   });
	 $("#localPurchase").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/localPurchase.php');		    
		   });
	 $("#foreignPurchase").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/foreignPurchase.php');		    
		   });
	 $("#salary").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/salary.php');		    
		   });
	 $("#convinceBill").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/convinceBill.php');		    
		   });
	 $("#CFAgentBill").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/CFAgentBill.php');		    
		   });
	$("#vehicleMaintenance").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/vehicleMaintenance.php');		    
		   });
	$("#salesCommission").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/salesCommission.php');		    
		   }); 
	$("#miscellaneous").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/miscellaneous.php');		    
		   });
	$("#advancePayment").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/advancePayment.php');		    
		   }); 
	$("#loanRepay").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/loanRepay.php');		    
		   }); 
	$("#cashDebit").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/cashDebit.php');		    
		   });
	/*Cash debit End */	  
	/*Start Bank Debit */
	 $("#bankOfficeRent").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankOfficeRent.php');		    
		   });
	$("#bankOfficeEquipmentPurchase").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankOfficeEquipmentPurchase.php');		    
		   });
    $("#bankOfficeEquipmentService").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankOfficeEquipmentService.php');		    
		   });
      $("#bankOfficeUtilityBill").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankOfficeUtilityBill.php');		    
		   });
	 $("#bankLocalPurchase").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankLocalPurchase.php');		    
		   });
	 $("#bankForeignPurchase").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankForeignPurchase.php');		    
		   });
	 $("#bankSalary").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankSalary.php');		    
		   });
	 $("#bankConvinceBill").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankConvinceBill.php');		    
		   });
	 $("#bankCFAgentBill").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankCFAgentBill.php');		    
		   });
	$("#bankVehicleMaintenance").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankVehicleMaintenance.php');		    
		   });
	$("#bankSalesCommission").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankSalesCommission.php');		    
		   }); 
	$("#bankMiscellaneous").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankMiscellaneous.php');		    
		   });
	$("#bankAdvancePayment").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankAdvancePayment.php');		    
		   }); 
	$("#bankLoanRepay").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankLoanRepay.php');		    
		   }); 
	$("#bankCashDebit").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitPurposes/bankCashDebit.php');		    
		   });
	/*End Bank Debit */
/*End Debit page load area */
		   
/*Start Report page load area */
		$("#creditTransactionReport").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('creditTransactionReport.php');		    
		   });
		$("#debitTransactionReport").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('debitTransactionReport.php');		    
		   });
		$("#invoiceReport").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('invoiceReport.php');		    
		   });
		$("#brandInventoryReport").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('transactionReport/brandInventoryReport.php');		    
		   });
		$("#itemInventoryReport").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('transactionReport/itemInventoryReport.php');		    
		   });
		$("#partInventoryReport").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('transactionReport/partInventoryReport.php');		    
		   });
		$("#bankCashDebit").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('transactionReport/bankCashDebit.php');		    
		   });
/*End Report page load area */

/* Pdf generate */
	$("#pdfInvoice").click(function(){
		   document.getElementById('result').style.display='block';
		   	$('#result').load('../php/pdf//pdfInvoice.php');		    
		   });
/* End Pdf generate */

});

function showDiv(show1){
document.getElementById(show1).style.display='block';
}
function showDiv(show1,show2){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
}
function showDiv(show1,show2,show3){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
document.getElementById(show3).style.display='block';
}
function showDiv(show1,show2,show3,show4){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
document.getElementById(show3).style.display='block';
document.getElementById(show4).style.display='block';
}
function showDiv(show1,show2,show3,show4,show5){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
document.getElementById(show3).style.display='block';
document.getElementById(show4).style.display='block';
document.getElementById(show5).style.display='block';
}
function showDiv(show1,show2,show3,show4,show5,show6){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
document.getElementById(show3).style.display='block';
document.getElementById(show4).style.display='block';
document.getElementById(show5).style.display='block';
document.getElementById(show6).style.display='block';
}
function showDiv(show1,show2,show3,show4,show5,show6,show7){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
document.getElementById(show3).style.display='block';
document.getElementById(show4).style.display='block';
document.getElementById(show5).style.display='block';
document.getElementById(show6).style.display='block';
document.getElementById(show7).style.display='block';
}
function showDiv(show1,show2,show3,show4,show5,show6,show7,show8){
document.getElementById(show1).style.display='block';
document.getElementById(show2).style.display='block';
document.getElementById(show3).style.display='block';
document.getElementById(show4).style.display='block';
document.getElementById(show5).style.display='block';
document.getElementById(show6).style.display='block';
document.getElementById(show7).style.display='block';
document.getElementById(show8).style.display='block';
}

function hideDiv(hide1){
document.getElementById(hide1).style.display = 'none';
}
function hideDiv(hide1,hide2){
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
}
function hideDiv(hide1,hide2,hide3){
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
document.getElementById(hide3).style.display = 'none';
}
function hideDiv(hide1,hide2,hide3,hide4){
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
document.getElementById(hide3).style.display = 'none';
document.getElementById(hide4).style.display = 'none';
}
function hideDiv(hide1,hide2,hide3,hide4,hide5){
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
document.getElementById(hide3).style.display = 'none';
document.getElementById(hide4).style.display = 'none';
document.getElementById(hide5).style.display = 'none';
}
function hideDiv(hide1,hide2,hide3,hide4,hide5,hide6){
alert('hello');
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
document.getElementById(hide3).style.display = 'none';
document.getElementById(hide4).style.display = 'none';
document.getElementById(hide5).style.display = 'none';
document.getElementById(hide6).style.display = 'none';
}
function hideDiv(hide1,hide2,hide3,hide4,hide5,hide6,hide7){
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
document.getElementById(hide3).style.display = 'none';
document.getElementById(hide4).style.display = 'none';
document.getElementById(hide5).style.display = 'none';
document.getElementById(hide6).style.display = 'none';
document.getElementById(hide7).style.display = 'none';
}
function hideDiv(hide1,hide2,hide3,hide4,hide5,hide6,hide7,hide8){
document.getElementById(hide1).style.display = 'none';
document.getElementById(hide2).style.display = 'none';
document.getElementById(hide3).style.display = 'none';
document.getElementById(hide4).style.display = 'none';
document.getElementById(hide5).style.display = 'none';
document.getElementById(hide6).style.display = 'none';
document.getElementById(hide7).style.display = 'none';
document.getElementById(hide8).style.display = 'none';
}
function showHide(show){//1 element
			document.getElementById(show).style.display = 'block';
}

function showHide(show,hide){//2 element
			document.getElementById(show).style.display = 'block';
			document.getElementById(hide).style.display = 'none';
}
function showHide(show,hide1,hide2){//3 elements
			document.getElementById(show).style.display = 'block';
			document.getElementById(hide1).style.display = 'none';
		    document.getElementById(hide2).style.display = 'none';

}
function showHide(show,hide1,hide2,hide3){//4 element
			document.getElementById(show).style.display = 'block';
			document.getElementById(hide1).style.display = 'none';
		    document.getElementById(hide2).style.display = 'none';
			document.getElementById(hide3).style.display = 'none';
}
function showHide(show,hide1,hide2,hide3,hide4){//5 element
			document.getElementById(show).style.display = 'block';
			document.getElementById(hide1).style.display = 'none';
		    document.getElementById(hide2).style.display = 'none';
			document.getElementById(hide3).style.display = 'none';
			document.getElementById(hide4).style.display = 'none';
}
function showHide(show,hide1,hide2,hide3,hide4,hide5){//6 element
			document.getElementById(show).style.display = 'block';
			document.getElementById(hide1).style.display = 'none';
		    document.getElementById(hide2).style.display = 'none';
			document.getElementById(hide3).style.display = 'none';
			document.getElementById(hide4).style.display = 'none';
			document.getElementById(hide5).style.display = 'none';
}

//function for transaction
function showMultipleHideMultiple(show1,show2,show3,show4,show5,hide1,hide2,hide3,hide4,hide5){

	    	document.getElementById(show1).style.display = 'block';
			document.getElementById(show2).style.display = 'block';
			document.getElementById(show3).style.display = 'block';
			document.getElementById(show4).style.display = 'block';
			document.getElementById(show5).style.display = 'block';
			document.getElementById(hide1).style.display = 'none';
			document.getElementById(hide2).style.display = 'none';
			document.getElementById(hide3).style.display = 'none';
			document.getElementById(hide4).style.display = 'none';
			document.getElementById(hide5).style.display = 'none';
			alert("hello");		
}

// active tab
function activeTab(activeTab,inactiveTab){
			activeTab=document.getElementById(activeTab).style;
			inactiveTab=document.getElementById(inactiveTab).style;
			activeTab.background='#97C5F8';
			inactiveTab.background='#fff';
			}
function activeMenu(page){
			if(page=='Invetory'){activeMenu=document.getElementById(page).style;
			activeMenu.background='#97C5F8';
			activeMenu.border='2px solid #FFF';}
			else if(page=='Invoice'){activeMenu=document.getElementById(page).style;
			activeMenu.background='#97C5F8';
			activeMenu.border='2px solid #FFF';}
			else if(page=='Transaction'){activeMenu=document.getElementById(page).style;
			activeMenu.background='#97C5F8';
			activeMenu.border='2px solid #FFF';}
			else if(page=='Report'){activeMenu=document.getElementById(page).style;
			activeMenu.background='#97C5F8';
			activeMenu.border='2px solid #FFF';}
			
			}

window.onload = function(){//Reload a DIV tag without reloading the web page
var auto_refresh = setInterval(function (){url='inventory.php'; $('.recentAddedInventory').load(url + ' #reload');},500);
var auto_refresh = setInterval(function (){url='client.php'; $('.AddedClient').load(url + ' #AddedClient');},500);
var auto_refresh = setInterval(function (){url='supplier.php'; $('.addedSupplier').load(url + ' #reload');},500);
var auto_refresh = setInterval(function (){url='userManagement.php'; $('.addedUser').load(url + ' #reload');},500);
var auto_refresh = setInterval(function (){url='invoice.php'; $('.adderToCartTable').load(url + ' #reload');},500);
var auto_refresh = setInterval(function (){url='invoice.php'; $('.totalAmount').load(url + ' #reloadTotal');},500);
var auto_refresh = setInterval(function (){url='bank.php'; $('.addedBank').load(url + ' #reloadAddedBank');},500);
var auto_refresh = setInterval(function (){url='managingDirectorHomePage.php'; $('.currentBankBalance').load(url + ' #currentBankBalance');},500);


 // refresh every 500 milliseconds
}
//user Option toggle 
function userOption(){$("#options").slideToggle(05);};

function setExistingCustomerInfo(client_address,client_mobile,client_note){
alert(client_address)
var a= document.getElementById("address");a.value = client_address;
var b= document.getElementById("mobile");b.value = client_mobile;
var c= document.getElementById("ref");c.value = client_note;
}






	