<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-type: application/json');
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
	
	$con = mysqli_connect("localhost", "id3661830_ravichamp59", "Ravi@9416906558", "id3661830_apsara");
	$response = [];
	$data = json_decode(file_get_contents("php://input"));

	if(!empty($data)) {
		$name = mysqli_real_escape_string($con, $data->name);
		$phone = mysqli_real_escape_string($con, $data->phone);
		$username = mysqli_real_escape_string($con, $data->username);
		$password = mysqli_real_escape_string($con, $data->password);

		$query = "SELECT * FROM login WHERE username = '$username'";
		$result = mysqli_query($con, $query);

		if (mysqli_num_rows($result) > 0) {
			$response["status"] = false; 
			$response["msg"] = "Email already registered";	
		} else {
			$query2 = "INSERT INTO login (name, phone, username, password) VALUES ('$name', '$phone', '$username', '$password')";
			$result2 = mysqli_query($con, $query2);
			if ($result2) {
				$response["status"] = true;
				$response["username"] = $username;
			}
		}
	}

	echo json_encode($response);  
	 
?>