function formValid()
{
    var username= document.getElementById("user").value;
    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;
    
    var letter = /^[a-z]+$/;
    var letternum = /^[0-9a-zA-Z]+$/;
    
        if (username === '' || username == null || !( username.match(letter)) || username.length < 3)
        {
                alert("Enter a valid username with minimum 3 alphabets");
                return false;

        }
    
        if (password1.length < 6 || password1.length > 20 ||  !( password1.match(letternum)))
        {
            alert("Enter password in between 6 to 20 characters only, numbers and alphabets are accepted");
            return false;
        }

        if (password1 !== password2){
            alert("Password dosen't match, enter all details again");
            return false;
        }

        
            return true;
        
        
}