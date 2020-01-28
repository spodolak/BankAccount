//Back-End Logic
function Bank() {
  this.accounts = [];
}

function Account(name, amount) {
  this.name = name;
  this.amount = amount;
}


//Front-End Logic
function showBalance(account) {
  $("#balance").html(account.amount);
}

$("document").ready(function() {
  $("form#new-account").submit(function() {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedAmount = parseInt($("input#amount").val());
    var account = new Account(inputtedName, inputtedAmount);
    showBalance(account);

  });


});