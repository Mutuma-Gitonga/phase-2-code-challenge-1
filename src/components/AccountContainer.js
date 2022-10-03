import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({searchTransaction, addNewTransaction, transactionsList}) {
  
  return (
    <div>
      <Search searchTransaction={searchTransaction} />
      <AddTransactionForm addNewTransaction={addNewTransaction} />
      <TransactionsList transactionsList={transactionsList} />
    </div>
  );
}

export default AccountContainer;
