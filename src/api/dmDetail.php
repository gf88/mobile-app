<?php
    header("content-type:text/html;charset=utf-8");
    date_default_timezone_set('PRC'); //设置中国时区 
    $mysqli=new mysqli("localhost","root","root","yunbiao");
    $mysqli->set_charset("utf8");
    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }

    $goodsCode=$_GET["goodsCode"];

        $sql="select * from list  where Id=$goodsCode";
    
    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            $list[] = $row;
        }
        $data=array("error"=>0,"detail"=>$list);
    }else{
        $data=array("error"=>1);
    }

    echo json_encode($data);

?>