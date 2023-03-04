function idValidation(inputTxt) {
  var regx = /^[-+]?[0-9]+$/;
  var textfield = document.getElementById('eid');
  var eidtext = document.getElementById('eidtext');

  if (inputTxt.value != '') {

    if (inputTxt.value.match(regx)) {
      textfield.textContent = "Good input";
      textfield.style.color = "green";
      eidtext.style.border = "2px solid green";
    }

    // else if(inputTxt.value.length<5){
    //   textfield.textContent="Length should be 5 characters ";
    // textfield.style.color="red";
    // eidtext.style.border="2px solid red";
    // }
    else {
      textfield.textContent = "Should be numbers only";
      textfield.style.color = "Red";
      eidtext.style.border = "2px solid red";
    }
  }
  else {
    textfield.textContent = "Empty input";
    textfield.style.color = "Red";
    eidtext.style.border = "2px solid red";
  }
}

function nameValidation(nameTxt) {
  var letters = /^[A-Za-z]+$/;
  var enametake = document.getElementById('ename');
  var nametext = document.getElementById('enametext');

  if (nameTxt.value != "") {

    if (nameTxt.value.match(letters)) {
      enametake.textContent = "Good input";
      enametake.style.color = "green";
      enametext.style.border = "2px solid green";
    }

    else{
      enametake.textContent = "Should be digits only";
      enametake.style.color = "red";
      enametext.style.border = "2px solid red";
    }
  }
  else {
    enametake.textContent = "Empty field";
    enametake.style.color = "red";
    enametext.style.border = "2px solid red";
  }
}

function ageValidation(ageTxt) {

var eagetake= document.getElementById('eage');
var agetext= +document.getElementById('eagetext').value;
console.log(agetext);
if(agetext.value != ""){

  if( !( agetext > 1 && agetext<100 ) ){
  eagetake.textContent = "The age must be a number between 1 and 100";
  eagetake.style.color = "red";
  eagetext.style.border = "2px solid red";
}
else{
  eagetake.textContent = "Good Input";
  eagetake.style.color = "green";
  eagetext.style.border = "2px solid green";
}
}
else{
  eagetake.textContent = "Empty field";
  eagetake.style.color = "red";
  eagetext.style.border = "2px solid red";
}
}

function emailValidation(emailTxt){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 var emailtake= document.getElementById('email');
 var emailtext= document.getElementById('emailtext');

 if(emailTxt.value != ""){

  if(emailtext.value.match(mailformat)){
  emailtake.textContent = "Good Input";
  emailtake.style.color =  "green";
  emailtext.style.border = "2px solid green";
 }
 else{
  emailtake.textContent = "Email should be in proper format";
  emailtake.style.color = "red";
  emailtext.style.border = "2px solid red";
 }


}
 else{
  emailtake.textContent = "Empty field";
  emailtake.style.color = "red";
  emailtext.style.border = "2px solid red";
 }

}

function phoneValidation(phoneTxt){

  var phoneformat = /^[6-9]\d{9}$/;

 var phonetake= document.getElementById('phone');
 var phonetext= document.getElementById('phonetext');

 if(phoneTxt.value != ""){

  if(phonetext.value.match(phoneformat)){
  phonetake.textContent = "Good Input";
  phonetake.style.color =  "green";
  phonetext.style.border = "2px solid green";
 }
 else{
  phonetake.textContent = "Contact No should be 10 digits number only and must start with [6-9]";
  phonetake.style.color = "red";
  phonetext.style.border = "2px solid red";
 }


}
 else{
  phonetake.textContent = "Empty field";
  phonetake.style.color = "red";
  phonetext.style.border = "2px solid red";
 }

}

function salaryValidation(salaryTxt){

var salaryformat =/^[-+]?[0-9]+$/;

 var salarytake= document.getElementById('esalary');
 var salarytext= document.getElementById('esalarytext');

 if(salaryTxt.value != ""){

  if(salarytext.value.match(salaryformat)){
  salarytake.textContent = "Good Input";
  salarytake.style.color =  "green";
  salarytext.style.border = "2px solid green";
 }
 else{
  salarytake.textContent = "Salary must be in digits only ";
  salarytake.style.color = "red";
  salarytext.style.border = "2px solid red";
 }


}
 else{
  salarytake.textContent = "Empty field";
  salarytake.style.color = "red";
  salarytext.style.border = "2px solid red";
 }

}