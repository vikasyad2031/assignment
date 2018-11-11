<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-type: application/json');
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

	session_start();
	
	$con = mysqli_connect("localhost", "id3661830_ravichamp59", "Ravi@9416906558", "id3661830_apsara");
	$response = [];
	$data = json_decode(file_get_contents("php://input"));

	$username = mysqli_real_escape_string($con, $data->username);
	$password = mysqli_real_escape_string($con, $data->password);

	$query = "SELECT * FROM login WHERE username = '$username' AND password = '$password'";
	$result = mysqli_query($con, $query);

	if (mysqli_num_rows($result) > 0) {
		$x = mysqli_fetch_array($result);
		$response["status"] = true; 
		$response["username"] = $username;
		$response["user_id"] = $x["id"];
		$response["name"] = $x["name"];
		$response["phone"] = $x["phone"];
	} else {
		$response["status"] = false;
		$response["msg"] = "Username or Password is incorrect";
	}

	echo json_encode($response);  
	 
?>