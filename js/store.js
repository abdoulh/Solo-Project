function makeAccount() {
    var balance = 0;
    return {
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         },
     checkBalance : function(){
     return balance
    },
    reset : function(){
         balance = 0
        updateBalance();
        return 'Your balance has been reset to $' + balance;
    }
    };
}

    var account = makeAccount(); // Initial balance: 0
    var price = document.getElementsByClassName("price")
    var balanceElement = document.getElementById("balance");
    var depositButton = document.getElementById("deposit-btn");

    
    updateBalance(); // Display initial balance

   
    function updateBalance() {  // Update the balance display
        balanceElement.textContent = "Balance: $" + account.checkBalance(); // textContent  === string or null
    }

    // Event listener for the deposit button
    depositButton.addEventListener("click", () => {    // add methode addEventListener 
        var amount = parseFloat(prompt("Enter deposit amount:")); // string argument and returns a floating point number.

        if (!isNaN(amount) && amount > 0) {
            var message = account.deposit(amount);
            alert(message);
            updateBalance();
        } else {
            alert("Please enter a valid deposit amount.");
        }
    });

    $(".button").on("click" , function() {
        var message = account.reset()
        alert("successful shopping" +message)
       

     })