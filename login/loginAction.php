<?php 
//connect database
include'../php/db_connect.php';
session_start();
$_SESSION['designation'];
$userName=htmlentities(addslashes(strtolower(trim($_POST['userName']))));
$password=md5($_POST['password']);
$designation=$_SESSION['designation'];

echo $query="SELECT * from `users` where `desig`='$designation' AND `userName`='$userName' AND `password`='$password'";

if($query_run=mysql_query($query)){
					if(mysql_num_rows($query_run)!=NULL){
					while($query_row=mysql_fetch_assoc($query_run)){						
						
						$userName=$query_row['userName'];
						$desig=$query_row['desig'];
						}
						$_SESSION['userName']=$userName;
						$_SESSION['desig']=$desig;
						$_SESSION['logStatus']='login';
					
					if($designation=='md'){ header('Location:../managingDirector/managingDirectorHomePage.php') ;}
					if($designation=='am'){ header('Location:../accountsManager/accountsManagerHomepage.php') ;}
					if($designation=='sm'){ header('Location:../storeManager/storeManagerHomepage.php'); }
					
					}					
					else{
					header("Location:../index.php?massage=error");
					//session_start();
					//$_SESSION['massage']="wrong Password";
					}					
					}
else{echo "query run failed";}

?>