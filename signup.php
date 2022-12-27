<?php

$email =$_POST['email'];
$Password1 = $_POST['Password1'];
$Password2 = $_POST['Password2'];

if(!empty($email) || !empty($Password1))
{
	$host = "localhost";
	$dbusername = "root";
	$dbpassword = "";
	$dbname = "webdevelopment";



// Create connection
$conn = new mysqli ($host, $dbusername, $dpassword, $dbname);
if (mysqli_connect_error()){
	die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
}
else
{
	$SELECT ="SELECT email From signup where email = ? limit 1";
	$INSERT = "INSERT into signup ( email , Password1, Password2 ) values(?,?,?)";

//Prepare statement
 $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $rnum = $stmt->num_rows;

     //checking username
      if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("sss",$email,$Password1,$Password2);
      $stmt->execute();
      echo "New record inserted sucessfully";
     } else {
      echo "Someone already register using this email";
     }
     $stmt->close();
     $conn->close();
  }
}
else {
 echo "All field are required";
 die();
}




?>