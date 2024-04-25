// function register(){
//     const user={
//         name:username.value,
//         accno:accountno.value,
//         pass:Password.value,
//         balance:0
//     }

//     if(user.name==""||user.accno==""||user.pass==""){
//         alert("Please fill the form")
//     }else{
//         if(user.accno in localStorage){
//             alert('Already exist')
//         }else{
//             localStorage.setItem(user.accno,JSON.stringify(user))
//             alert("Account Created")
//             window.location.href = "./login.html";
           
//         }
//     }
    
// }
function register() {
    // Get input values
    let username = document.getElementById("username").value;
    let acno = document.getElementById("acno").value;
    let password = document.getElementById("pswd").value;

    // Check if any field is empty
    if (!username || !acno || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Check if the account number already exists
    if (localStorage.getItem(acno)) {
        alert("Account number already exists. Please choose another one.");
        return;
    }

    // Create user object
    let user = {
        name: username,
        accNo: acno,

        pass: password,
        // Add more properties if needed
    };

    // Store user object in local storage
    localStorage.setItem(acno,JSON.stringify(user));

    // Alert and redirect to login page
    alert("Registration successful!");
    window.location.href = "./login.html";
}
