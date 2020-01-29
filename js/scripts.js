//Back-End Logic
function Bank() {
  this.accounts = [];
  this.accountId = 0;
}

Bank.prototype.addAccount = function(account) {
  account.id = (this.accountId += 1);
  this.accounts.push(account);
};

function Account(name, amount) {
  this.name = name;
  this.amount = amount;
  
}

Account.prototype.updateAmount = function(deposit, withdrawal) {
  this.deposit = deposit;
  this.withdrawal = withdrawal;
  this.amount = (this.amount + this.deposit - this.withdrawal);
};

var bank = new Bank();

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
    bank.addAccount(account);
    showBalance(account);
    
    
  });
  $("form#update-balance").submit(function()  {
    event.preventDefault();
    var inputtedDeposit = parseInt($("#depositAmount").val());
    var inputtedWithdrawal = parseInt($("#withdrawalAmount").val());
    bank.accounts[0].updateAmount(inputtedDeposit, inputtedWithdrawal);
    console.log(bank.accounts[0]);
    showBalance(bank.accounts[0]);

  });


});