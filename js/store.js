// $("form").hide();
// $("#addBtn").on("click", function () {
//     $("form").css("display", "block")
//   });

function makeAccount(initial) {
    var balance = initial;
    return {
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         },
     checkBalance : function(){
     return balance
    },
    };
}