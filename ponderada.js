const credits = [   {number: "057001",
                    balance: 120000000,
                    rate: 14.63},
                    {number: "057002",
                    balance: 10000000,
                    rate: 4.63},
                    {number: "057003",
                    balance: 20000000,
                    rate: 1.63},
                    {number: "057004",
                    balance: 8950000,
                    rate: 25.6}
                    ];


const balances = credits.map(
    function (creditObjet){
        return creditObjet.balance;
    });

const sumOfBalances = balances.reduce(
    function (sum = 0, newVal){
        return sum += newVal;
    });

const partBalanceOfTotal = credits.map(
    function(creditObjet){
        return (creditObjet.balance / sumOfBalances) * creditObjet.rate;
    });

const promedioPonderada = partBalanceOfTotal.reduce(
    function(sum = 0, newVal){
        return sum += newVal;
    }
);