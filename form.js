function formValid()
{
    var username= document.getElementById("username").value;
    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    
       
        if (username === '' || username == null || !( /^[a-z]+$/.match(username)))
        {
                alert("Enter a valid username");
                return false;

        }
       
        if (password1.length <6 || password1.length > 20 ||  !( /^[0-9a-zA-Z]+$/.match(password1)))
        {
            alert("Enter password in between 6 to 20 characters and only numbers and alphabet are accepted");
            return false;
        }

        if (password1 !== password2){
            alert("Password dosen't match, enter all details again");
            return false;
        }

        else{
            return true;
        }
        
}