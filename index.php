<?php
	if(isset($_POST['submit'])){
		if(isset( $_POST['name']))
		$name = $_POST['name'];
		if(isset( $_POST['email']))
		$email = $_POST['email'];
		if(isset( $_POST['message']))
		$message = $_POST['message'];
		if(isset( $_POST['phone']))
		$phone = $_POST['phone'];
		$subject = 'Visited your site';
		if ($name === ''){
		echo "Name cannot be empty.";
		die();
		}
		if ($email === ''){
		echo "Email cannot be empty.";
		die();
		} else {
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
		echo "Email format invalid.";
		die();
		} if ($message === ''){
		echo "Message cannot be empty.";
		die();
		}
		// if(isset($_POST['submit-btn'])){ //check if form was submitted
	 	//  		$message = "Success! You entered: ".$input;
		// }  


		$content="From: $name \n Email: $email \n Message: $message";
		$recipient = "a1jazmyn@gmail.com";
		$mailheader = "From: $email \r\n";
		mail($recipient, $subject, $content, $mailheader) or die("Error!");
		echo "Email sent!";
	}
?>