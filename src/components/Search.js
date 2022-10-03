import React, {useEffect, useState} from "react";

function Search({searchTransaction}) {
  
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    const runSearchFunction = setTimeout(() => {
      searchTransaction(searchChar);
    }, 1000)

    return () => clearTimeout(runSearchFunction);
  },[searchTransaction, searchChar]);

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searchChar}
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearchChar(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
