import React, {useContext, useEffect} from 'react'
import Transaction from "./Transaction"
import {GlobalContext} from "../Context/GlobalState"


const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(item => (<Transaction key={item.id} transaction={item} />))}
            </ul>   
        </>
    )
}

export default TransactionList
