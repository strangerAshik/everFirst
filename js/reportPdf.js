function reportPdf(){

optionContainer=value('optionContainer');

if(optionContainer=='Stored Product with provision'){

url='../php/pdf/pdfStoredProductWithProvision.php';
win = window.open(url, '_blank');
}
else if(optionContainer=='Invoice'){
fromdate=value('date1');
todate=value('date2');
//alert(fromdate)
url='../php/pdf/pdfInvoiceReport.php?fromdate='+fromdate+'&todate='+todate;
win = window.open(url, '_blank');
}
else if(optionContainer=='Salary Report'){
fromdate=value('date1');
todate=value('date2');
//alert(fromdate)
url='../php/pdf/pdfSalaryReport.php?fromdate='+fromdate+'&todate='+todate;
win = window.open(url, '_blank');
}
else if(optionContainer=='Credit Transaction'){
fromdate=value('date1');
todate=value('date2');
//alert(fromdate)
url='../php/pdf/pdfCreditTransactionReport.php?fromdate='+fromdate+'&todate='+todate;
win = window.open(url, '_blank');
}
else if(optionContainer=='Debit Transaction'){
fromdate=value('date1');
todate=value('date2');
//alert(fromdate)
url='../php/pdf/pdfDebitTransactionReport.php?fromdate='+fromdate+'&todate='+todate;
win = window.open(url, '_blank');
}
else if(optionContainer=='Customer Wise Report'){
fromdate=value('date1');
todate=value('date2');
name=value('existingCustomerName');
if(name=='--Select Customer--'){alert('ERROR: Customer Name Is Not Selected!!');}
else{
//alert(fromdate)
url='../php/pdf/pdfInvoiceAndTransaction.php?fromdate='+fromdate+'&todate='+todate+'&name='+name;
win = window.open(url, '_blank');}
}
//setTimeout(function() {location.href ='../php/pdf/pdfInvoice.php?fromdate='+fromdate+'&todate'+todate+'&optionContainer'+optionContainer;},1000);
}
function pdfInvoice(){
url='../php/pdf/pdfInvoice.php?invoiceNo='+document.getElementById('invoiceNo').value;
win = window.open(url, '_blank');

}
function pdfChallan(){
url='../php/pdf/pdfChallan.php?invoiceNo='+document.getElementById('challanInvoiceNo').value+"&challanNo="+document.getElementById('challanNo').value;
win = window.open(url, '_blank');

}
function debitVoucher(){
//setTimeout(function() {location.href ='},1000);
url='../php/pdf/debitVoucher.php?voucherNo='+document.getElementById('voucherNo').value;
win = window.open(url, '_blank');
}
function creditVoucher(){
url='../php/pdf/creditVoucher.php?voucherNo='+document.getElementById('voucherNo').value;;
win = window.open(url, '_blank');

}
function reportDebitVoucherNo(){
url='../php/pdf/debitVoucher.php?voucherNo='+document.getElementById('debitVoucherNo').value;;
win = window.open(url, '_blank');
}
function reportCreditVoucherNo(){
url='../php/pdf/creditVoucher.php?voucherNo='+document.getElementById('creditVoucherNo').value;;
win = window.open(url, '_blank');
}
function storedProductWithProvision(){
url='../php/pdf/pdfStoredProductWithProvision.php';
win = window.open(url, '_blank');
}
