    function createCounter() {
    let count = 0;

    return {
        increment: function () {
        count++;
        console.log(`Current count: ${count}`);
        },
        decrement: function () {
        count--;
        console.log(`Current count: ${count}`);
        },
    };
    }

    const counter = createCounter();
    counter.increment();
    counter.increment();
    counter.decrement();

    function createBankAccount() {
        let balance = 0; 
    
        return {
            deposit: function (amount) {
                if (amount > 0) {
                    balance += amount;
                    console.log(`Deposited: ${amount}`);
                } else {
                    console.log("Deposit amount must be positive.");
                }
            },
            withdraw: function (amount) {
                if (amount > 0) {
                    if (balance >= amount) {
                        balance -= amount;
                        console.log(`Withdrawn: ${amount}`);
                    } else {
                        console.log("Insufficient balance.");
                    }
                } else {
                    console.log("Withdrawal amount must be positive.");
                }
            },
            getBalance: function () {
                console.log(`Current Balance: ${balance}`);
                return balance;
            }
        };
    }
    
    const account = createBankAccount();
    
    account.deposit(500); 
    account.withdraw(200); 
    account.withdraw(400); 
    account.getBalance();  
    
    