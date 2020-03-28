import React, {useContext} from 'react'
import { GlobalContext } from "../Context/GlobalState"

const IncomeExpenses = () => {
    const context = useContext(GlobalContext);
    const { transactions } = context;

    const amounts = transactions.map(transaction => transaction.amount);

    // Get Income Numbers (All positive)
    const income = amounts.filter(item => item > 0)
                    .reduce((acc,item) => (acc +=item),0)
                    .toFixed(2);

    // Get Expense Numbers (All negative)
    const expense = amounts.filter(item => item < 0)
                    .reduce((acc, item) => (acc += item),0)
                    .toFixed(2);

    // console.log(income, expense);


    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus"> + ${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">- ${Math.abs(expense)}</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpenses
