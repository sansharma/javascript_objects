// Question no 1

function squash(){		
		var a = [3,2,1,10,2,3,4,5,1,11];
		document.write(a+"<br>");
		var n = prompt("Enter the count of items to be removed from the end of array: ");
		last(a,n);
}
function last(a,n){		
		var i=0;
		var reverseArray = a.reverse();
		document.write("The items removed are ");
		for(i=0;i<n;i++){
			if(i==n-1){
				document.write(reverseArray[i]+".");	
			}
			else{
				document.write(reverseArray[i]+", ");	
			}
		}				
}

//Question no 2

function joinString(){		
		var intro=["All","Birds","can","not","fly"];
		var result = intro.join();
		document.write("The String after join operation is <b>"+result+"</b>");		
	}
	
//Question no 3

function removeElement(){		
		var array = [2,3,4,5,5];
		document.write("<h2>The element in array are: "+array+"</h2>");
		var n = Number(prompt("Enter the element to remove:"));
		
		remove_element(array,n);
	}
	function remove_element(array,n){		
		var index = array.indexOf(n);
		if(index > -1){
			array.splice(index,1);	
		}
		document.write("<h2>Remaining elements in array are: "+array+"</h2");
	}
	
	
//Question no 4

function protectEmail(){
		var email = prompt("Enter your email: ");
		var length = email.length;
		var i = 0;
		var j = 0;
		document.write("<br>Your protected email address is <h3>"+email[0]+email[1]+email[2]+email[3]+email[4]);
		for(i = 4; i<length;i++){
			if(email[i] === '@'){
				for(j=i;j<length;j++){+
					document.write(email[j]);
				}
				break;	
			}
			document.write("*");	
		}		
		document.write("</h4>");
	}
	
//Question no 5
function repeatString(){
		var repeatString = prompt("Enter any string that need to be repeated: ");
		document.write("The string you entered is <h3>"+repeatString+"</h3><br><br>");
		var repeatTime = prompt("How many times do you want to repeat the string: "); 
		repeat(repeatString,repeatTime);
	}
	
	function repeat(repeatString,repeatTime){
		document.write("The string after repetition is <h3>");
		var i = 0;
		for(i = 0; i<repeatTime;i++){
			document.write(repeatString);
		}
		document.write("</h3>");
	}
	
//Question no 6
function insertString(){
		var array = "All birds cannot ";
		document.write("Given string is <h5>"+array+"</h5>"); 		
		var insertString = prompt("Enter any string to add to given string: ");
		var insertIndex = prompt("Enter index at which the string gets added: ");
		insert_string(array,insertString,insertIndex);
	}
	
	function insert_string(array,insertString,insertIndex){
		insertString  = insertString+" ";
		document.write("<br>Final string is <h5>"+array.substring(0,insertIndex-1)+insertString+array.substring(insertIndex-1)+"</h5>");
	}
	
//Question no 7
function getMonth(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		var month = date.getMonth()+1;
		month_name(month);
	}

	function month_name(month){
		switch(month){
			case 1:
				document.write("The month is January.");
				break;
			case 2:
				document.write("The month is February.");
				break;
			case 3:
				document.write("The month is March.");
				break;
			case 4:
				document.write("The month is April.");
				break;
			case 5:
				document.write("The month is May.");
				break;
			case 6:
				document.write("The month is June");
				break;
			case 7:
				document.write("The month is July.");
				break;
			case 8:
				document.write("The month is August.");
				break;
			case 9:
				document.write("The month is September.");
				break;
			case 10:
				document.write("The month is October.");
				break;
			case 11:
				document.write("The month is November.");
				break;
			case 12:
				document.write("The month is December.");
				break;
		}
		
	}
	
//Question no 8
function yesterdayDay(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The current day is "+date+"<br>");
		yesterday(date);
	}

	function yesterday(date){
		date.setDate(date.getDate()-1);
		document.write("The day before the above day was "+date);
	}


//Question no 9
function alphaNumeric(){				
		var input = prompt("Enter a character: ");
		check_alpha(input[0]);
	}

	function check_alpha(input){
		if((input>='a' && input<='z') ||(input>='A' && input<='Z') ||(input>='0' && input<='9')){
			document.write("The entered input character is an alphanumeric character.");
		}
		else{
			document.write("The entered input character is not an alphanumeric character.");
		}
	}


//Question no 10
function checkCase(){	
		var input = prompt("Enter a character: ");
		check(input[0]);
	}

	function check(input){
		if(input>='A' && input<='Z'){
			document.write("The entered input character is an uppercase character.");
		}
		else{
			document.write("The entered input character is not an uppercase character.");
		}
	}


//Question no 11
function countVowels(){		
		var input = prompt("Enter a string: ");
		validate(input);
	}

	function validate(input){
		var i = 0;
		var counter = 0;
		for(i=0;i<input.length;i++){
			if((input[i] === 'a') ||(input[i] === 'e') ||(input[i] === 'i') ||(input[i] === 'o') ||(input[i] === 'u')||(input[i] === 'A') ||(input[i] ==='E') ||(input[i] === 'I') ||(input[i] === 'O') ||(input[i] === 'U')){
				counter++;
			}				
		}
		document.write("There are "+counter+" vowels in the given string.");
	}