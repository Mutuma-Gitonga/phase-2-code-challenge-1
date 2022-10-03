import React, {useState, useEffect} from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);

  // const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
        .then(listData => {
          setTransactionsList(listData)
          setUpdatedList(listData)
          // console.log(listData)
        });
  },[]);

  useEffect(() => {
    setUpdatedList(transactionsList);
  },[transactionsList]);

  function addNewTransaction(newTransactionObj) {
    const updatedTransactions = [...transactionsList, newTransactionObj];
    setTransactionsList(updatedTransactions);
  }

  function searchTransaction(newSearchString) {
    const newFilteredList = transactionsList.filter(transaction => {
      if(newSearchString === "") {
        return true;
      } 
      return transaction.description.toLowerCase().split(" ").join("").includes(newSearchString)
    });

    setUpdatedList(newFilteredList);
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer searchTransaction={searchTransaction} transactionsList={updatedList} addNewTransaction={addNewTransaction} />
    </div>
  );
}

export default App;
