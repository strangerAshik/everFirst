<?php
include'../../php/db_connect.php';
function getBankList(){
$query="SELECT DISTINCT `bank_name` FROM `bank`";
if($query_run=mysql_query($query)){
	while($query_row=mysql_fetch_assoc($query_run)){
			 $bankName=$query_row['bank_name'];
			 echo"<option>$bankName</option>";
			 }
}
else{echo"Query Failed!!";}
	
}
function getVoucherNo(){
	$query="SELECT * FROM `get_voucher_no` WHERE `id`='1'";
	if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){echo "No row found";}
	else{
	while($query_row=mysql_fetch_assoc($query_run)){
		$current_voucher=$query_row['current_voucher'];
		}
	//echo $invoice;
	}
	}
	else mysql_error();
return $current_voucher;
}

?>