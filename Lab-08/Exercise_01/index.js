//Creates a function that display if the password is correct or not
function checkPassword()
{
    //Firstly, get the value the password textbox
    let password = window.document.querySelector('#password').value;

    //Next, get the value of validation
    let validation = window.document.querySelector('#validation').value;

    //Next, check password and validation
    //If the length of password is not 8 characters
    if(password.length < 8)
    {
        //Tell the user the password is too short
        alert("Password is too short. Must be at least 8 characters");
    }
    //Otherwise, if the password and validation do not match
    else if(password != validation)
    {
        //Tell the user that both password and validation do not match
        alert("Password and validation do not match");
    }
    //Otherwise
    else
    {
        //Tell the user the password and validation match 
        alert("Password validated");
    }

}
