<?php
    header("content-type:text/html;charset=utf-8");
    date_default_timezone_set('PRC'); //设置中国时区 
    $mysqli=new mysqli("localhost","root","root","yunbiao");

    $mysqli->set_charset("utf8");
    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }
    $sql="select * from car";
    $result=$mysqli->query($sql);
    while($row=$result->fetch_assoc()){
        $data[]=$row;
    }
    echo json_encode($data);

    // $sql1="select dianpu from car";
    // $result1=$mysqli->query($sql1);
    // while($row1=$result1->fetch_assoc()){
    //     $data1[]=$row1;
    // }
    // echo json_encode($data1);
?>