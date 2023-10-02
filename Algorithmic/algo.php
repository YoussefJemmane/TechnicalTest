<?php

  for ($i=1;$i<=100;$i++){
    if ($i%3 === 0 && $i%5 === 0 && $i%7 === 0) {
        echo "Hello World Yoo\n";
    } elseif ($i%3 === 0 && $i%5 === 0) {
        echo "Hello World\n";
    } elseif ($i%3 === 0 && $i%7 === 0) {
        echo "Hello Yoo\n";
    } elseif ($i%5 === 0 && $i%7 === 0) {
        echo "World Yoo\n";
    } elseif ($i%3 === 0) {
        echo "Hello\n";
    } elseif ($i%5 === 0) {
        echo "World\n";
    } elseif ($i%7 === 0) {
        echo "Yoo\n";
    } else {
        echo $i . "\n";
    }
  }

?>