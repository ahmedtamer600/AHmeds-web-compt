var array = [
    {
    usr: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    usr: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
   ]     
function signupform()
    {
        var user2 = document.getElementById('username2').value
        var pass2 = document.getElementById('password2').value
        var email = document.getElementById('email').value
        var female = document.getElementById('female')
        var age =document.getElementById('age').value
        var num = document.getElementById('num').value
        var male = document.getElementById('male')
        var gender = male.checked ? male.value : (female.checked ? female.value : "");
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_]).{8,}$/
     
  if(user2 !=""&&pass2!="" && gender!=""){

    if(regex.test(pass2) && num.length == 11 && age > 18 ) {

        var obj = {
            usr : user2,
            email : email,
            pass : pass2,
        }

        for(var i=0; i<array.length; i++) {
            alert(array[i].usr);
            if(user2 == array[i].usr) {
                alert("user Already in");
                return false
            }      
            }
            array.push(obj);
            console.log(array);  
            }
        }
    }
    function forgetform(){
        var user3 = document.getElementById('username3').value
        var newpass = document.getElementById('newpassword').value
        var lock = true
        array.forEach(e => {
            if(user3 == e.usr){
                e.password = newpass.value
                alert('password changed')
                lock =false
            }
            if(lock){
                alert('kkk')
            }
        })
    }
    function loginform(){
        var user = document.getElementById('username').value
        var pass = document.getElementById('password').value
        var lock = true;
        array.forEach(e => {
            if(user == e.usr && pass == e.pass){
                alert('login success')
                lock = false;
                window.location.href('reveiw.html')
            }
        })
        if(lock){
            alert("jhab");
        }


    }
   