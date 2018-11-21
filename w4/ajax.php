<?php
    $string = file_get_contents("./students.sample.json");
    $student = json_decode($string, true);

    if(!empty($_GET)){
        if ($_GET["func"]  == 'list' ){
            if($_GET["ID"] == 'ALL'){
                list_all();
            }else{
                search($_GET["ID"]);
            }
        }
    }
    if(!empty($_POST)){
        if ($_POST["func"]  == 'add' ){
            add($_POST["ID"], $_POST["name"]);
        }else if($_POST["func"]  == 'del'){
            delete($_POST["ID"]);
        }
    }

    function list_all() {
        global $student;
        foreach ($student as $key => $value) {
            $echo_data =  htmlspecialchars( '"'.$key.'":"'.$value.'"' , ENT_QUOTES ,'UTF-8');
            echo $echo_data.'<br>';
        }
    }

    function search($ID){
        global $student;
        global $key;
        global $value;
        foreach ($student as $key => $value){
            if($key == $ID){
                echo  htmlspecialchars('Hello,'.$value, ENT_QUOTES, 'UTF-8');
                return;
            }
        }
        echo 'Student not found';
    }

    function add($ID, $name){
        global $student;
        foreach ($student as $key => $value) {
            if($key == $ID){
                echo 'ID already exists. Fail!';
                return;
            }
        }
            $student[$ID] = $name;
            $student = json_encode($student);
            file_put_contents('students.sample.json', $student);
            echo 'Success!';
    }

    function delete($ID){
        global $student;
        foreach ($student as $key => $value){
            if($key == $ID){
                unset($student[$ID]);
                $student = json_encode($student);
                file_put_contents('students.sample.json', $student);
                echo 'Success!';
                return;
            }
        }
        echo 'Student not found. Fail!';
    }
?>
