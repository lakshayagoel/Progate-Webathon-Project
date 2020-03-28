function myAlert(){
   var user=document.getElementById("input").nodeValue;
   alert("Let's get Started Coder!")
}

function formsubmit(){
   var user=document.getElementById("input").nodeValue;
   alert("Thank You for adding information!")
}

function check_info(){
   var name=document.getElementById('name').nodeValue;
   var email=document.getElementById('email').nodeValue;
   if(name===" " || email==" "){
      alert('Please fill in all fields!');
      return false;
   
   }
   else{
      return true;
   }
}