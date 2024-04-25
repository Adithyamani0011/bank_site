// function login(){


//     let acno= accountno1.value
//     console.log(acno);
//     let passw=password1.value
//     console.log(passw);
//     storedvalue=JSON.parse(localStorage.getItem(acno))
//     console.log(storedvalue);
//     if(acno in localStorage){
//         if(passw===storedvalue.pass){
//             alert("logged successfully")
//             window.location="./index.html?acno="+acno
//         }else{
//             alert("Incorrect password")
//         }
//     }
//     else{
//         alert("account not found")
//     }
    
// }
// //nameee
// const urlParams = new URLSearchParams(window.location.search);
// const acno = urlParams.get('acno');
// console.log(acno);
// const accname = JSON.parse(localStorage.getItem(acno))
// console.log(accname);
// welcome.innerHTML=`welcome ${accname.name}`;

// login js
function login() {
    // Get input values
    let acno = document.getElementById("acno").value;
    let password = document.getElementById("pswd").value;

    // Check if any field is empty
    if (!acno || !password) {
        alert("Please fill in all fields");
        return;
    }

    // Check if the account number exists in local storage
    if (!localStorage.getItem(acno)) {
        alert("Account not found. Please sign up first.");
        return;
    }

    // Get stored user data
    let storedUser = JSON.parse(localStorage.getItem(acno));

    // Check if the entered password matches the stored password
    if (password === storedUser.pass) {
        // If passwords match, login successful
        alert("Logged in successfully!");
        // Redirect to home page or any desired location
        window.location.href = "./home.html?acno=" + acno;
    } else {
        // If passwords don't match, show error message
        alert("Incorrect password. Please try again.");
    }
}
