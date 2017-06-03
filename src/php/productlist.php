<?php
    $servername = "localhost";   
    $username = "root";
    $password = "";
    $dbname = 'hdys_2017';   //表名

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接
    // if ($conn->connect_error) {
    //     die("连接失败: " . $conn->connect_error);
    // } 
    //echo "连接成功";

    $sql = "select * from productlist";          //查询表
    $result = $conn->query('set names utf8');    //设置编码
    $result = $conn->query($sql);
    $row =$result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);   //返回数据给前端
?>