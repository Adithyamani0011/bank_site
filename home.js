// Retrieve account number from URL query parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const accountNumber = urlParams.get('acno');

// Function to display user's available balance
function displayBalance() {
    // Get user data from local storage
    const userData = JSON.parse(localStorage.getItem(accountNumber));

    // Display balance if user data exists
    if (userData) {
        const balance = userData.balance || 0;
        document.getElementById("dbal").innerHTML = `<h5>Your available balance: ₹${balance}</h5>`;
    } else {
        alert("User data not found. Please log in again.");
        window.location.href = "./login.html"; // Redirect to login page if user data is not found
    }
}

// Function to deposit money
function deposit() {
    // Get the deposit amount and password from input fields
    const depositAmount = parseInt(document.getElementById("damt").value);
    const password = document.getElementById("dpswd").value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(accountNumber));

    // Check if deposit amount and password are provided
    if (!depositAmount || !password) {
        alert("Please fill in all details");
        return;
    }

    // Validate password
    if (password !== userData.pass) {
        alert("Incorrect Password. Please try again");
        return;
    }

    // Check if deposit amount is valid
    if (depositAmount <= 0 || isNaN(depositAmount)) {
        alert("Please enter a valid deposit amount.");
        return;
    }

    // Update balance
    userData.balance = (userData.balance || 0) + depositAmount;
    localStorage.setItem(accountNumber, JSON.stringify(userData));

    // Update balance display
    displayBalance();

    alert(`₹${depositAmount} has been added to your account`);
}

// Function to withdraw money
function withdraw() {
    // Get the withdrawal amount and password from input fields
    const withdrawalAmount = parseInt(document.getElementById("wamt").value);
    const password = document.getElementById("wpswd").value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(accountNumber));

    // Check if withdrawal amount and password are provided
    if (!withdrawalAmount || !password) {
        alert("Please fill in all details");
        return;
    }

    // Validate password
    if (password !== userData.pass) {
        alert("Incorrect Password. Please try again");
        return;
    }

    // Check if withdrawal amount is valid
    if (withdrawalAmount <= 0 || isNaN(withdrawalAmount)) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    // Check if sufficient funds are available
    if (withdrawalAmount > userData.balance) {
        alert("Insufficient Funds.");
        return;
    }

    // Update balance
    userData.balance -= withdrawalAmount;
    localStorage.setItem(accountNumber, JSON.stringify(userData));

    // Update balance display
    displayBalance();

    alert(`₹${withdrawalAmount} has been withdrawn from your account`);
}

// Call displayBalance function to initially display the balance
displayBalance();
