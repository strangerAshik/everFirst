<?php 

$date1=$_POST['date1'];<br>
$date2=$_POST['date2'];<br>

		$query="SELECT * FROM inventory_surface WHERE date BETWEEN 'date1' AND 'date2' ";;
			if($query_run=mysql_query($query)){
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
					<td>$i</td><td>$purchase_invoice</td><td>$item_name</td><td>$part_no</td><td>$brand</td><td>$quantity</td>
					<td class='inventoryDelete' ><a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a></td>
					</tr>
					";
					}
}
else{echo"Query Run Failed";}

?>

