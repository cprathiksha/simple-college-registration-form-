function myFunction() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "");
  //document.body.appendChild(x);
  document.getElementById('display').appendChild(x);
  x.setAttribute('placeholder', "Enter your roll no..");
  
   var y = document.createElement("INPUT");
  y.setAttribute("type", "number");
 
  y.setAttribute("value", "");
  document.getElementById('display1').appendChild(y);
   y.setAttribute('placeholder', "Enter no of days..");
   return;
}

function validateHTMlform()
{
  let form = document.collegeSignupForm;
  var name=document.getElementById('textname');
  var email=document.getElementById('emailid');
  var email = form.emailid.value;
  
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
 
   if( name.value == "" )
   {
     alert( "Enter Your College Name!" );
     name.style.borderColor = 'red';
     return;
   }
    else if( email.value == "" )
   {
     alert( "Email id con not be empty!" );
     form.emailid.focus() ;
     return;
   }
    else if( form.mobile_no.value == "" )
   {
     alert( "Mobile number con not be empty!" );
     form.mobile_no.focus() ;
     return;
   } 
         	
	else if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
	{
     alert("Enter your correct email ID")
     form.emailid.focus() ;
     return;
	}
 
	else if( form.number.value == "" ||
           isNaN( form.number.value) ||
           form.number.value.length != 10 )
   {
     alert( "Mobile No can not be empty and it should be 10 digits" );
     form.number.focus() ;
     return;
   }
   else if ( ( collegeSignupForm.acc[0].checked == false ) && ( collegeSignupForm.acc[1].checked == false ) )
   {
   alert ( "Choose whetehr you want Accommodationor not?" );
   return false;
   } 
   else if(collegeSignupForm.acc[0].checked == true)
   {
	   var display= document.getElementById('display');
	  
	    if(display.value==""){
			alert( "Enter Your roll no" );
		}
   }
   
   return( true );
}

function confrimfuncation() {
	if (validateHTMlform() == true) {
		alert("You have Succesfully Submitted!");
	}
}


  
