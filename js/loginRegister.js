function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g; // regular expression
    var upperCaseLetters = /[A-Z]/g;// regular expression
    var numbers = /[0-9]/g;// regular expression

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){ // match  method retrieves the result of matching a string 
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value); // The only difference: data stored in localStorage has no expiration time,
        localStorage.setItem('pw', pw.value);     //  when you close the browser. local storge clear
        alert("register successfully")
    }
}

//checking login
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
       alert(window.location.href = "http://127.0.0.1:5501/navpages/store.html") 
    }else{
        alert('Error on login');
    }
}