function algo() {
    for(i=1;i<=100;i++){
		if(i%3 === 0 && i%5 === 0 && i%7 === 0){
			console.log("Hello World Yoo");
		}
		if(i%5 === 0 && i%7 === 0){
			console.log("World Yoo");
		}
		if(i%3 === 0 && i%7 === 0){
			console.log("Hello Yoo");
		}
		if(i%3 === 0 && i%5 === 0 ){
			console.log("Hello World");
		}
		if(i%3 === 0){
			console.log("Hello");
		}else if(i%5 === 0){
			console.log("World");
		}else if(i%7 === 0){
			console.log("Yoo");
		}else{
			console.log(i);
		}
	}
}

algo()