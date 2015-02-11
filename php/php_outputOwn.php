<?php 
//connect database
//require global var ucwords(),strtoupper()
include'db_connect.php';

function addSupplier($company,$address,$mobile,$representative,$note){
$query1="SELECT * FROM `supplier` WHERE `company`='$company' or `mobile`='$mobile'";
 if($query_run=mysql_query($query1))
			{
					if(mysql_num_rows($query_run)!=NULL){
					//existing company
					//echo"Existing Client";
					}
					else{
					
						$query2="INSERT INTO `supplier`(`company`,`address`,`mobile`,`representative`,`note`)
								VALUES ('$company','$address','$mobile','$representative','$note')";
								
		               if($query_run=mysql_query($query2)){//echo "New Supplier Added!!";
					   }
	                   else  mysql_error();
					
					}
					
			}

}
function addedBankBalance(){

$query1="SELECT * FROM `bank` ORDER BY `bank_name` ASC";	
if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
						echo"<tr><td>No Bank Account Is Found!!</td></tr>";
					}
					else{
						
						while($query_row=mysql_fetch_assoc($query_run)){
						
						
						$bankName=strtoupper($query_row['bank_name']);
						$accountNo=$query_row['account_no'];				
						//$loan=$query_row['loan'];				
						$balance=$query_row['balance'];				
						$note=$query_row['note'];
				
						echo "
								<tr>
								<td>$bankName</td><td>$accountNo</td><td>$balance</td>
								<td>$note</td>

								</tr>
							";
					}
					
					
					}
}}
function addedBankAccount(){

$query1=" SELECT * FROM `bank` ORDER BY id DESC";	
if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
							echo"<tr><td>No Bank Account Is Found!!</td></tr>";
					}
					else{
						
						while($query_row=mysql_fetch_assoc($query_run)){
						
						$id=$query_row['id'];
						$bankName=strtoupper($query_row['bank_name']);
						$accountNo=$query_row['account_no'];				
						//$loan=$query_row['loan'];				
						//$balance=$query_row['balance'];				
						$note=$query_row['note'];
				
						echo "
								<tr>
								<td>$bankName</td><td>$accountNo</td><td>$note</td>	
								<td class='inventoryDelete' >
								<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
								</td>								
								</tr>
							";
					}
					
					
					}
}}
function AddedItem(){
					
				$query1=" SELECT * FROM proforma_invoice ORDER BY id DESC LIMIT 5 ";				
				if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
						echo"No Result Is Found!!";
					}
					else{
						$sl=0;
						
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						$id=$query_row['id'];
						$item_name=ucwords($query_row['item_name']);
						$item_part_no=$query_row['item_part_no'];				
						$item_brand=$query_row['item_brand'];				
						$item_quantity=$query_row['item_quantity'];				
						$item_price=$query_row['item_price'];
//$item_name,$item_part_no,$item_brand,$item_quantity,						
						echo "
								<tr>
								<td>$sl</td><td>$item_name</td><td>$item_part_no</td><td>$item_brand</td>
								<td>$item_quantity</td><td>$item_price</td>
<td class='inventoryEdit'>

<a href = 'javascript:void(0)' onclick = 'editPopUp(\"Edit_Conformation\",$id,$item_quantity,$item_price)'>Edit</a>
</td>								
<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
</td>
								</tr>
							";
					}
					
					
					}
				}


}
 
function AddedClient(){
					
				$query1=" SELECT * FROM `client` ORDER BY `id` DESC";				
				if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
						echo"<tr><td>No Client Added yet!!</td></tr>";
					}
					else{
						$sl=0;
						//echo"<table>";
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						
						$id=$query_row['id'];
						$company=$query_row['company'];
						$address=$query_row['address'];							
						$mobile=$query_row['mobile'];
						$representative=$query_row['representative'];			
						$note=$query_row['note'];				
						echo "
								<tr>
								<td>$company</td><td>$address</td><td>$mobile</td>
								<td>$representative</td><td>$note</td>
								<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
</td>
							";
					}
					
					
					}
				}


}
function AddedSupplier(){
					
				$query1="SELECT * FROM `supplier` ORDER BY `id` DESC ";				
				if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
						echo"No Client Added yet!!";
					}
					else{
						$sl=0;
						//echo"<table>";
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						
						$id=$query_row['id'];
						$company=$query_row['company'];
						$address=$query_row['address'];				
						$mobile=$query_row['mobile'];				
						$representative=$query_row['representative'];				
						$note=$query_row['note'];				
						echo "
								<tr>
								<td>$company</td><td>$address</td><td>$mobile</td>
								<td>$representative</td><td>$note</td>
							
	<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
</td>
								</tr>
							";
					}
					
					
					}
				}


}

function AddedUser(){
		$query1="SELECT * FROM `users` ORDER BY `id` DESC ";				
				if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
						echo"No User Added yet!!";
					}
					else{
						$sl=0;
						//echo"<table>";
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						
						$id=$query_row['id'];
						$userName=ucwords($query_row['userName']);
						//$password=$query_row['password'];				
						$desig=strtoupper($query_row['desig']);				
						$mobile=$query_row['mobile'];			
						if($mobile!='01722240864'){
	
						echo "
								<tr>
								<td>$userName</td><td>$desig</td><td>$mobile</td>
								
							
	<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
</td>
								</tr>
								
							";
							}
					}
					
					
					}
				}
}
function getInvoiceNo(){
	$query1="SELECT * FROM `get_invoice_no` WHERE `id`='1'";
	if($query_run=mysql_query($query1)){
	if(mysql_num_rows($query_run)==NULL){echo "No row found";}
	else{
	while($query_row=mysql_fetch_assoc($query_run)){
		$invoice=$query_row['lastInvoiceNum'];
		}
	//echo $invoice;
	}
	}
	else mysql_error();
return $invoice;
}
function updateInvoiceNo(){
$query1="SELECT * FROM `get_invoice_no` WHERE `id`='1'";
if($query_run=mysql_query($query1)){
	if(mysql_num_rows($query_run)==NULL){echo "No row found";}
	else{
	while($query_row=mysql_fetch_assoc($query_run)){
		$invoice=$query_row['lastInvoiceNum'];
		}
		++$invoice;
		$query2="UPDATE `get_invoice_no` SET `lastInvoiceNum`='$invoice' WHERE `id`='1'";
		mysql_query($query2);
	//echo $invoice;
	}
	}
}

function itemName(){
$query1=" SELECT `item_name` FROM `inventory_core` ORDER BY `item_name` ";			
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"There is no item yet";
				}
		else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$value=$query_row['item_name'];				
					echo"<option value='$value'>$value</option>";
				}
					
					
			}
}
}

function getPartNo($itemName,$brand){

$query1="SELECT `part_no` FROM `inventory_core` WHERE `item_name`='$itemName' AND `brand`='$brand' ORDER BY `part_no` ";
if($itemName!='--select item--'){		
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"<option >--No Part Exist--</option>";	
				}
		else{				
				echo"<option >--Select Part No.--</option>";	
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$value=$query_row['part_no'];				
					echo"<option value='$value'>$value</option>";
				}
					
					
			}
}
}
else echo"<option>--Select Item First--</option>";	
}
/*function getPartNo(){

$query1=" SELECT `part_no` FROM `inventory_core` ORDER BY `part_no` ";
if($itemName!='--select item--'){		
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"There is no item yet";
				}
		else{				
					
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$value=$query_row['part_no'];				
					echo"<option value='$value'>$value</option>";
				}
					
					
			}
}
}
else echo"<option>--Select Item First--</option>";	
}*/

function getBrand(){
$query1=" SELECT `brand` FROM `inventory_core` ORDER BY `brand` ";
if($itemName!='--select item--'){		
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"There is no item yet";
				}
		else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$value=$query_row['brand'];				
					echo"<option value='$value'>$value</option>";
				}
					
					
			}
}
}
else echo"<option>--Select Item First--</option>";	
}
function getItemList($brand){
$query=" SELECT * FROM `inventory_core` WHERE `brand`='$brand' ORDER BY `item_name` ";
if($brand!='--select brand--'){		
if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)==NULL){
				echo"<option value='$value'>No Item Exist For This Brand</option>";
				}
		else{				
						echo"<option >--Select Item--</option>";
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$value=$query_row['item_name'];				
					echo"<option value='$value'>$value</option>";
				}
					
					
			}
}
}
else echo"<option>--Select Brand First--</option>";	
}

function existingCustomer(){
$query1=" SELECT DISTINCT `company` FROM `client`";			
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"There is no Client yet";
				}
		else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$value=$query_row['company'];				
					echo"<option value='$value'>$value</option>";
				}
					
					
			}
}
}
function existingSupplierList(){
$query1=" SELECT company FROM `supplier` ORDER BY company ";			
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"There is no Client yet";
				}
		else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$company=$query_row['company'];				
					echo"<option value='$company'>$company</option>";
				}
					
					
			}
}
}
function addedToCart(){
$invoiceNo=getInvoiceNo();
$query1="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo' ORDER BY `id` DESC";
if($query_run=mysql_query($query1)){

	if(mysql_num_rows($query_run)==NULL){echo "<tr><td >No Item Added Yet!!</td></tr>";}
	else{
	
	$sl=0;
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;
		$id=$query_row['id'];
		$itemName=$query_row['item_name'];
		$partNo=$query_row['part_no'];
		$brand=$query_row['brand'];
		$unitPrice=$query_row['unit_price'];
		$quantity=$query_row['quantity'];
		
		echo"<tr>
			            <td>$sl</td><td>$itemName</td><td>$partNo</td><td>$brand</td><td>$unitPrice</td><td>$quantity</td>
		<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
</td>
			</tr>";
		
		}
	
	}
	}
	else {echo "Query is not Runed";};

}

function getSubTotal(){
$invoiceNo=getInvoiceNo();
$query1="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo'";
if($query_run=mysql_query($query1)){

	if(mysql_num_rows($query_run)==NULL){echo "No Item Added Yet!!";}
	else{
	
	$subTotal=0;
	while($query_row=mysql_fetch_assoc($query_run)){
		
		$unitPrice=$query_row['unit_price'];
		$quantity=$query_row['quantity'];
		$subTotal+=$unitPrice*$quantity;
		}
		
		}
}
return @$subTotal;
}

function convert_number_to_words($number) {
   
    $hyphen      = '-';
    $conjunction = ' and ';
    $separator   = ', ';
    $negative    = 'negative ';
    $decimal     = ' point ';
    $dictionary  = array(
        0                   => 'Zero',
        1                   => 'One',
        2                   => 'Two',
        3                   => 'Three',
        4                   => 'Four',
        5                   => 'Five',
        6                   => 'Six',
        7                   => 'Seven',
        8                   => 'Eight',
        9                   => 'Nine',
        10                  => 'Ten',
        11                  => 'Eleven',
        12                  => 'Twelve',
        13                  => 'Thirteen',
        14                  => 'Fourteen',
        15                  => 'Fifteen',
        16                  => 'Sixteen',
        17                  => 'Seventeen',
        18                  => 'Eighteen',
        19                  => 'Nineteen',
        20                  => 'Twenty',
        30                  => 'Thirty',
        40                  => 'Fourty',
        50                  => 'Fifty',
        60                  => 'Sixty',
        70                  => 'Seventy',
        80                  => 'Eighty',
        90                  => 'Ninety',
        100                 => 'Hundred',
        1000                => 'Thousand',
        1000000             => 'Million',
        1000000000          => 'Billion',
        1000000000000       => 'trillion',
        1000000000000000    => 'quadrillion',
        1000000000000000000 => 'quintillion'
    );
   
    if (!is_numeric($number)) {
        return false;
    }
   
    if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) {
        // overflow
        trigger_error(
            'convert_number_to_words only accepts numbers between -' . PHP_INT_MAX . ' and ' . PHP_INT_MAX,
            E_USER_WARNING
        );
        return false;
    }

    if ($number < 0) {
        return $negative . convert_number_to_words(abs($number));
    }
   
    $string = $fraction = null;
   
    if (strpos($number, '.') !== false) {
        list($number, $fraction) = explode('.', $number);
    }
   
    switch (true) {
        case $number < 21:
            $string = $dictionary[$number];
            break;
        case $number < 100:
            $tens   = ((int) ($number / 10)) * 10;
            $units  = $number % 10;
            $string = $dictionary[$tens];
            if ($units) {
                $string .= $hyphen . $dictionary[$units];
            }
            break;
        case $number < 1000:
            $hundreds  = $number / 100;
            $remainder = $number % 100;
            $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
            if ($remainder) {
                $string .= $conjunction . convert_number_to_words($remainder);
            }
            break;
        default:
            $baseUnit = pow(1000, floor(log($number, 1000)));
            $numBaseUnits = (int) ($number / $baseUnit);
            $remainder = $number % $baseUnit;
            $string = convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
            if ($remainder) {
                $string .= $remainder < 100 ? $conjunction : $separator;
                $string .= convert_number_to_words($remainder);
            }
            break;
    }
   
    if (null !== $fraction && is_numeric($fraction)) {
        $string .= $decimal;
        $words = array();
        foreach (str_split((string) $fraction) as $number) {
            $words[] = $dictionary[$number];
        }
        $string .= implode(' ', $words);
    }
   
    return $string;
}
function updateInventoryStoreAfterSell(){

echo $invoiceNo=getInvoiceNo();

$query1="SELECT * FROM `invoice_product_detail` WHERE `invoiceNo`='$invoiceNo'";

if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				echo"There is No Item For This Invoice!";
				}
		else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$itemName=$query_row['itemName'];				
					$partNo=$query_row['partNo'];				
					$brand=$query_row['brand'];				
					$quantity=$query_row['quantity'];				
					//$unitPrice=$query_row['unitPrice'];		
					
					$query2="SELECT * FROM `enventory_stock` WHERE `item_name`='$itemName' AND `item_part_no`='$partNo' AND `item_brand`='$brand'";
					$query_run=mysql_query($query2);
					while($query_row_inside=mysql_fetch_assoc($query_run)){
                       $quantityAtStore=$query_row_inside['item_quantity'];
					   $newQuantity=$quantityAtStore-$quantity;
					   
					   $query3="UPDATE `enventory_stock` SET `item_quantity`=' $newQuantity' WHERE `item_name`='$itemName' AND `item_part_no`='$partNo' AND `item_brand`='$brand'";
					   if(mysql_query($query3)){echo"Inventory Stock Updated";}
					   else mysql_error();
					}

				
				}
					
					
			}
}

}
function recentAddedInventory(){
$query1="SELECT * FROM `inventory_surface` ORDER BY id DESC LIMIT 5";
if($query_run=mysql_query($query1)){
//if(mysql_num_rows($query_run)==NULL){
$i=0;
	while($query_row=mysql_fetch_assoc($query_run)){					
						++$i;
						$id=$query_row['id'];
						$purchase_invoice=$query_row['purchase_invoice'];
						$item_name=strtoupper($query_row['item_name']);				
						$part_no=strtoupper($query_row['part_no']);				
						$brand=strtoupper($query_row['brand']);				
						$quantity=$query_row['quantity'];
				
						echo "
								<tr>
								<td>$i</td><td>$purchase_invoice</td><td>$item_name</td><td>$part_no</td><td>$brand</td><td>$quantity</td><td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a>
</td>
								</tr>
							";
		//	}		
		}
			
//else{echo"<tr><td>No Item Added Recently</td></tr>";}
}
else{echo"Query Run Failed";}
}
function showClientInfo($name){
$query1=" SELECT * FROM `client` WHERE `company`='$name' ";			
if($query_run=mysql_query($query1)){
		if(mysql_num_rows($query_run)==NULL){
				  echo "
			 <table class='Customerdetails tableMargin'>
			 <tr ><th colspan='5' style='width:872px'></th></tr>
			    <tr>	
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr>
				  <td><input  id='company' type='text' /></td>
				  <td><input id='address' type='text' /></td>
				  <td><input id='mobile' type='text' /></td>
				  <td ><input id='representative' type='text' /></td>
				  <td><input id='note' type='text' /></td>
				</tr>
			</table>"
				  ;		
				}
		else{				
						
				while($query_row=mysql_fetch_assoc($query_run))
				{						
					$company=$query_row['company'];				
					$address=$query_row['address'];				
					$mobile=$query_row['mobile'];				
					$representative=$query_row['representative'];				
					$note=$query_row['note'];		
                    
					
                   echo "
			 <table class='Customerdetails tableMargin'>
			 <tr ><th colspan='5' style='width:872px'></th></tr>
			    <tr>	
					<th>Company</th>
					<th>Address</th>
					<th>Mobile</th>
					<th>Representative</th>
					<th>Note</th>
				</tr>
				<tr>
				  <td><input  id='company' type='text' value='$company' readonly/></td>
				  <td><input id='address' type='text' value='$address' readonly/></td>
				  <td><input id='mobile' type='text' value='$mobile'readonly/></td>
				  <td ><input id='representative' type='text' value='$representative' readonly/></td>
				  <td><input id='note' type='text' value='$note' readonly/></td>
				</tr>
			</table>"
				  ;		
				  break;
				
				}
				
					
					
			}
}
}
function showChallanAndWorkOrder($challan,$work_order){					
					echo"
					<div class='customerDetails fix'>
						<input style='display:none' type='text' value=$challan id='challanNo'>
							<table class='challanTable'>
							<tr ><th colspan='5' style='width:872px'>Invoice Information</th></tr>
								<tr>
									<th>Challan</th><th>Work Order No.</th>
								</tr>
								<tr>
									
									<td>$challan</td><td>$work_order</td>
								</tr>
							</table>
						</div>
					";}
function showInvoiceProductDetails($invoiceNo){
					$query1="SELECT * FROM `invoice_surface` WHERE `invoice_no`='$invoiceNo'";
					if($query_run=mysql_query($query1)){
					$sl=0;
					echo"
						<div class='productDetails fix'>
						
							
							
							<table class='customerDetails fix'>
								
								<tr ><th colspan='6' style='width:872px'>Product Details</th></tr>
									<tr>
										<th>SL</th>
										<th>Item Name</th>
										<th>Part No.</th>
										<th>Brand</th>
										<th>Due Quantity</th>
										<th>Delivered Product</th>
									
																				
									</tr>
								
					
					";
						while($query_row=mysql_fetch_assoc($query_run))
							{						
								++$sl;
								$brand=$query_row['brand'];
								$item_name=$query_row['item_name'];
								$part_no=$query_row['part_no'];
								$quantity=$query_row['quantity'];
								$delevaedQuantity=$query_row['delevaed_quantity'];
								$dueQuantity=$quantity-$delevaedQuantity;
							
								echo"<tr>
										<td>$sl</td>
										<td>$item_name</td>
										<td>$part_no</td>
										<td>$brand</td>
										<td>$dueQuantity</td>
										<td><input type='text' id='$sl'/></td>											
									</tr>	";								
								
							}
							echo"
							</tbody>
							</table>

							
							<table>
						
								<tr>
								
								
								<td class='noBorder' style='width:722px;'>
								</td>
								
								<td class='noBorder'>
								<input type='button' value='Cancel'  class='submit' /> 
								</td>
								<td class='noBorder'>
								<input type='button' value='Generate Challan' onclick=\"updateSurfaceInvoiceInfoAfterChallan($sl);\"  class='submit'/>
								</td>
							
							</tr>
							</table>
						
						</div>
							";
					
					}		
}					
function updateProvisionAndQuantity($part_no,$item_name,$brand,$NewDelevaedQuantity){
							$query1="SELECT * FROM `inventory_core` WHERE `part_no`='$part_no' AND `item_name`='$item_name' AND `brand`='$brand'";
								if($query_run1=mysql_query($query1)){
									while($query_row1=mysql_fetch_assoc($query_run1))
											{	
												echo $existQuantity=$query_row1['quantity'];
												 echo $existProvision=$query_row1['provision'];
												 
												
												$updateQuantity=$existQuantity-$NewDelevaedQuantity;
												$updateProvision=$existProvision-$NewDelevaedQuantity;
												if($updateQuantity<0){$updateQuantity=0;}
												if($updateProvision<0){$updateProvision=0;}
												//if($updateQuantity>0 && $updateProvision>0 ){
												$query2="UPDATE `inventory_core` SET `quantity`='$updateQuantity',`provision`='$updateProvision' WHERE  `part_no`='$part_no' AND `brand`='$brand' AND `item_name`='$item_name' ";
												if(mysql_query($query2)){$sucess=1;}else{echo"<br/> Failed ";}
												//}
												//else{echo '<br/>'.$part_no.'-'.$item_name.'-'.$brand.'-is stock out!!';}
											}
								}
								else{echo'Query Failed';}
								}
function updateChallan($invoiceNo){
							$query1="SELECT * FROM `invoice_core` WHERE `invoice_no`='$invoiceNo'";
							if($query_run=mysql_query($query1)){
								while($query_row=mysql_fetch_assoc($query_run))
									{	
										 $challanNo=$query_row['challan_no'];
										  ++$challanNo;
										$query2="UPDATE `invoice_core` SET `challan_no`='$challanNo' WHERE `invoice_no`='$invoiceNo'";
										if(mysql_query($query2)){echo'<br>Challan Number Updated!!';}
										else{echo '<br>Challan Number Updated Failed!!';}										
									}
							}
						}

function waitingChallan(){
$query1="SELECT * FROM `invoice_core` WHERE `challan_no`='1' ";
if($query_run=mysql_query($query1)){
					while($query_row=mysql_fetch_assoc($query_run))
						{	 
						     $company=$query_row['company'];
						     $invoice_no=$query_row['invoice_no'];							 
							 $mobile=$query_row['mobile'];
							// echo $query="SELECT * FROM `client` WHERE `company`='$company'";
							 //if($query_run=mysql_query($query))
							//	{
								//	while($query_row=mysql_fetch_assoc($query_run))
									//		{	
										//		 $address=$query_row['address'];
									//			 $representative=$query_row['representative'];
												echo"<tr>					
										<td>$invoice_no</td>
										<td>$company</td>										
										
										<td> $mobile</td>
																	
									</tr>";
											}
												 
								//}
							//	else"client Selection failed";
						
							  
							
								
				        }
	}
function inventoryStatusWithProvision(){
$query1="SELECT * FROM `inventory_core` ORDER BY `brand` ";
if($query_run=mysql_query($query1)){
$sl=0;	if(mysql_num_rows($query_run)!=NULL){
					while($query_row=mysql_fetch_assoc($query_run))
						{	 ++$sl;
						     $part_no=$query_row['part_no'];
						     $item_name=$query_row['item_name'];
						     $brand=$query_row['brand'];
						     $quantity=$query_row['quantity'];
						     $provision=$query_row['provision'];
							echo" <tr>
										<td>$sl</td>
										<td>$brand</td>	
										<td>$part_no</td>
										<td> $item_name</td>
																															
										<td>$quantity</td>
										<td> $provision</td>										
									</tr>";
						}
						}
						else{	echo"<tr><td>No Inventory Item Added Yet!!</td></tr>";}
					}
		

}

function recentInvoice(){
$query1="SELECT * FROM `invoice_core` ORDER BY `id` DESC LIMIT 8";
if($query_run=mysql_query($query1)){
$sl=0;
		if(mysql_num_rows($query_run)==NULL){
				echo"<tr><td>No Invoice Generated Yet</td></tr>";
				}
		else{
				while($query_row=mysql_fetch_assoc($query_run))
				{	++$sl;					
					$invoice_no=$query_row['invoice_no'];
					$company=$query_row['company'];
					$mobile=$query_row['mobile'];
					$grand_total=$query_row['grand_total'];
					echo"
						<tr>
							<td>$sl</td><td>$invoice_no</td><td>$company</td><td>$mobile</td><td>$grand_total</td>
							<!--<td class='inventoryDelete' >
								<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$invoice_no)'>Delete</a>
							</td>-->
						</tr>
					";
				}
		
		}		
				
		}
}					

function currentCashInHand(){
$query1="SELECT * FROM `hand_cash` ORDER BY id DESC LIMIT 1";
if($query_run=mysql_query($query1)){
					while($query_row=mysql_fetch_assoc($query_run))
						{
							$amount=$query_row['amount'];
						}
					}
return $amount;
}

function currentBankLoanStatus(){

$query="SELECT * FROM `credit_transaction` WHERE `purpose`='bank loan' AND `amount`>'0' ORDER BY `date` DESC";
if($query_run=mysql_query($query)){

	if(mysql_num_rows($query_run)==NULL){echo "<tr><td >No Bank Loan :)!!</td></tr>";}
	else{
	
	$sl=0;
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;
		$date=$query_row['date'];
		$from_bank=$query_row['from_bank'];
		$from_account=$query_row['from_account'];
		$loan_transaction_id=$query_row['loan_transaction_id'];
		$amount=$query_row['amount'];
		$paidAmount=$query_row['paid_amount'];
		$dueAmount=$amount-$paidAmount;
			echo"<tr><td>$sl</td><td>$date</td><td>$from_bank</td><td>$from_account</td><td>$loan_transaction_id</td><td>$dueAmount</td></tr>";
		}
}
}
}
//
function currentUnpaidIssues(){
$query="SELECT DISTINCT `invoice_no`,`purpose`,`work_order` FROM `debit_transaction` WHERE `paid_amount` <> `amount` AND `purpose`<>'loan repay' ORDER By `purpose`";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)!=NULL){
	$sl=0;
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;	
		$purpose=$query_row['purpose'];		
		$invoice_no=$query_row['invoice_no'];
		$work_order=$query_row['work_order'];
		
		$query1="SELECT * FROM `debit_transaction` WHERE `invoice_no`='$invoice_no' AND `work_order`='$work_order' AND `purpose`='$purpose' ";
		if($query_run1=mysql_query($query1)){	
		while($query_row1=mysql_fetch_assoc($query_run1)){
		$id=$query_row1['id'];
		$pay_to=$query_row1['pay_to'];
		$mobile=$query_row1['mobile'];
		$address=$query_row1['address'];
		$amount=$query_row1['amount'];
		$paid_amount=$query_row1['paid_amount'];
		$due=$amount-$paid_amount;	
		}
		if($amount>$paid_amount)
				echo"<tr><td>$sl</td><td>$purpose</td><td>$pay_to</td><td>$mobile</td><td>$address</td><td>$amount</td><td>$due</td><td>$work_order</td><td>$invoice_no</td></tr>";
				
		
		}
		//$last_paid=$query_row['last_paid'];
		
		
		}
	
	}
	else{	
	echo "<tr><td >No Unpaid Issue Exist!! :)!!</td></tr>";
}
}
}

function owingMoney(){
$query="SELECT * FROM `invoice_core` WHERE `paid`<`grand_total`";
if($query_run=mysql_query($query)){
$sl=0;
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;
		
		$date=$query_row['date'];
		$invoice_no=$query_row['invoice_no'];
		$company=$query_row['company'];
		$mobile=$query_row['mobile'];
		$grand_total=$query_row['grand_total'];
		$paid=$query_row['paid'];
		$due=$grand_total-$paid;
			echo"<tr><td>$sl</td><td>$date</td><td>$invoice_no</td><td>$company</td><td>$mobile</td><td>$grand_total</td><td>$due</td></tr>";
		}

}

}
function advanceInfo(){
$query="SELECT `id`, `date`, `purpose`, `invoice_no`, `work_order`, `voucher`, `amount`, `paid_amount`, `last_paid`, `pay_to`, `mobile`, `address`, `note`, `loan_transaction_id`, `from_bank`, `from_account`, `store_bank`, `store_account`, `cheque_no`, `utility_bill_no`, `utility_type`, `vehicle_no`, `vehicle_cost_type`, `grand_total`, `sale_commision_percentage`, `sale_comission_amount` FROM `debit_transaction` WHERE `amount`> `paid_amount`";
if($query_run=mysql_query($query)){
	if(mysql_num_rows($query_run)==NULL){echo "<tr><td >No Advance Issue Exist!! :)!!</td></tr>";}
	else{	
	$sl=0;
	
	while($query_row=mysql_fetch_assoc($query_run)){
		++$sl;	
		$date=$query_row['date'];		
		$payTo=$query_row['pay_to'];
		$mobile=$query_row['mobile'];
		$amount=$query_row['amount'];		
		$workOrder=$query_row['work_order'];		
		$due=$amount-$query_row['paid_amount'];
		//$due=$amount-$paid_amount;	
		$note=$query_row['note'];
			echo"<tr><td>$sl</td><td>$date</td><td>$workOrder</td><td>$payTo</td><td>$mobile</td><td>$amount</td><td>$due</td><td>$note</td></tr>";
		}
		}
	}
}
function todaysDebitTransaction(){
$today = date("Y-m-d");
$query="SELECT * FROM `debit_transaction` WHERE `date`='$today' ORDER BY `id` DESC ";
if($query_run=mysql_query($query)){
					if(mysql_num_rows($query_run)==NULL){
						echo"<tr><td> No Debit Transaction Done Yet Today!!</td></tr>";
					}
					else{
						$sl=0;
						//echo"<table>";
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						
						$voucher=$query_row['voucher'];
						$pay_to=$query_row['pay_to'];
						$purpose=$query_row['purpose'];
						$workOrder=$query_row['work_order'];
						//$address=$query_row['address'];							
						$mobile=$query_row['mobile'];
						$purpose=$query_row['purpose'];			
						$amount=$query_row['amount'];			
						$note=$query_row['note'];				
						echo "
								<tr>
								<td>$sl</td><td>$workOrder</td><td>$purpose</td><td>$pay_to</td><td>$mobile</td>
								<td>$amount</td><td>$note</td>
								<!--<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformationDebitTransaction\",$voucher)'>Delete</a>
</td>--></tr>
							";
					}
					
					
					}
				}
}
function todaysCreditTransaction(){
$today = date("Y-m-d");
$query="SELECT * FROM `credit_transaction` WHERE `date`='$today' ORDER BY `id` DESC ";
if($query_run=mysql_query($query)){
					if(mysql_num_rows($query_run)==NULL){
						echo"<tr><td> No Credit Transaction Done Yet Today!!</td></tr>";
					}
					else{
						$sl=0;
						//echo"<table>";
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						
						$voucher=$query_row['voucher'];
						$pay_from=$query_row['pay_from'];
						$purpose=$query_row['purpose'];
						$workOrder=$query_row['work_order'];
						//$address=$query_row['address'];							
						$mobile=$query_row['mobile'];
						$purpose=$query_row['purpose'];			
						$amount=$query_row['amount'];			
						$note=$query_row['note'];				
						echo "
								<tr>
								<td>$sl</td><td>$workOrder</td><td>$purpose</td><td>$pay_from</td><td>$mobile</td>
								<td>$amount</td><td>$note</td>
								<!--<td class='inventoryDelete' >
<a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformationCreditTransaction\",$voucher)'>Delete</a>
</td>--></tr>
							";
					}
					
					
					}
				}

}
function grandTotal($invoice){
$query="SELECT  `subtotal`, `discount`, `vat`, `tax` FROM `invoice_core` WHERE `invoice_no`='$invoice'";
if($query_run=mysql_query($query)){
    while($query_row=mysql_fetch_assoc($query_run)){
						$subtotal=$query_row['subtotal'];
						$discount=$query_row['discount'];
						$vat=$query_row['vat'];
						$tax=$query_row['tax'];
						}
			echo $grandTotal=$subtotal+$vat+$tax-$discount;
}
}
?>