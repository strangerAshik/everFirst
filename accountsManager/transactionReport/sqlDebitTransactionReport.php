<?php
$date1=$_POST['date1'];<br>
$date2=$_POST['date2'];<br>

$query=SELECT * FROM `debit_transaction` 
WHERE date BETWEEN 'date1' AND 'date2';
if($query_run=mysql_query($query)){
$i=0;
while($query_row=mysql_fetch_assoc($query_run)){ 
++$i;
$id=$query_row['id'];
$date=$query_row['date'];
$purpose=strtoupper($query_row['purpose']); 	
$invoice_no=strtoupper($query_row['invoice_no']);
$work_order=strtoupper($query_row['work_order']); 	
$voucher=$query_row['voucher'];
$due_amount=$query_row['due_amount'];
$paid_amount=$query_row['paid_amount'];
$pay_to=strtoupper($query_row['pay_to']); 
$mobile=strtoupper($query_row['mobile']);
$address=strtoupper($query_row['address']);
$note=$query_row['note'];
$loan_transaction_id=$query_row['loan_transaction_id'];
$bank_name=$query_row['bank_name'];
$account_no=strtoupper($query_row['account_no']);
$cheque_no=strtoupper($query_row['cheque_no']);
$utility_bill_no=strtoupper($query_row['utility_bill_no']);
$utility_type=$query_row['utility_type'];
$vehicle_no=$query_row['vehicle_no'];
$vehicle_cost_type=strtoupper($query_row['vehicle_cost_type']); 	
$sale_commision_percentage=strtoupper($query_row['sale_commision_percentage']);	
$sale_comission_amount=strtoupper($query_row['sale_comission_amount']);

echo "
<tr>
<th>id</th>
<th>Date</th>
<th>Purpose</th>
<th>Invoice No</th>
<th>Work Order</th>
<th>Voucher</th>
<th>Due Amount</th>
<th>Paid Amount</th>
<th>Pay To</th>
<th>Mobile</th>
<th>Address</th>
<th>Note</th>
<th>Loan Transaction Id</th>
<th>Bank Name</th>
<th>Account No</th>
<th>Cheque No</th>
<th>Utility Bill No</th>
<th>Utility Type</th>
<th>Vehicle No</th>
<th>Vehicle Cost Type</th>
<th>Sale Commision Percentage</th>
<th>Sale Comission Amount</th>
</tr>
<tr>
<td>$id</td>
<td>$date</td>
<td>$purpose</td>
<td>$invoice_no</td>
<td>$work_order</td>
<td>$voucher</td>
<td>$due_amount</td>
<td>$paid_amount</td>
<td>$pay_to</td>
<td>$mobile</td>
<td>$address</td>
<td>$note</td>
<td>$loan_transaction_id</td>
<td>$bank_name</td>
<td>$account_no</td>
<td>$cheque_no</td>
<td>$utility_bill_no</td>
<td>$utility_type</td>
<td>$vehicle_no</td>
<td>$vehicle_cost_type</td>
<td>$sale_commision_percentage</td>
<td>$sale_comission_amount</td>
</tr>
";
 }
}
else{echo"Query Run Failed";}
?>



































