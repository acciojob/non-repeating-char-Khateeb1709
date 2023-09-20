function firstNonRepeatedChar(str) {
 // Write your code here
	 for(let i=0;i<str.length-1;i++){
		 let curr = str.charAt(i);
         let next = str.charAt(i+1);
		 if(curr != next){
			 return curr;
		 }
		 else{
			 while(str.charAt(i)==curr)i++;
		 }
	 }
	 return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
