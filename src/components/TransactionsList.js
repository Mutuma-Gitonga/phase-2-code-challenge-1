import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactionsList}) {
  
  // const newFilteredList = transactionsList.filter(transaction => {
  //   if(searchChar === "") {
  //     return true;
  //   } 
  //   return transaction.description.toLowerCase().split(" ").join("").includes(searchChar)
  // });

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {
          transactionsList.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;
