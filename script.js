function toCase(text) {
  // write your code here
	if(text=== ""){
		return "-";
	}
	
	const lowertext=text.toLowerCase();
	const Uppertext=text.toUpperCase();

	return `${lowertext}-${Uppertext}`;
	
	
	
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
