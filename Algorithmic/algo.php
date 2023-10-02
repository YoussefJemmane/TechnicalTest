<?php 
  for($i=1;$i<=100;$i++){
    if($i%3 === 0){
      echo "Hello \x20";
    }else if($i%5 === 0){
      echo "World \x20";
    }else if($i%7 === 0){
      echo "Too \x20 ";
    } else{
      echo $i. "\x20";
    }
  }
?> 