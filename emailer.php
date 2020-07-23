<?php
if( isset ($_POST['userName']) && isset($_POST['userEmail']) ){
  $userName = $_POST['userName'];
  $userEmail = $_POST['userEmail'];
  $to = "mathew@lacultura.com";
  $from = $userEmail
  $subject = 'Contact form info'
  $message = '<b> Name:</b>'.$userName.' <br> <b> Email:</b>'.userEmail.;
  $headers = "From: $from\n";
  $headers .= "MIME-Version: 1.0\n"
  $headers .= "Content-type: text/html; charset=iso-8859-1\n"
  if (mail($to, $subject, $message, $headers)){
    echo "success";
  }else{
    echo "The server Failed to send Data"
  }
}
?>