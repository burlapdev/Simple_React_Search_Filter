import { useState } from "react";
import "./styles.css";

function getRandomKey(max = 50) {
  return Math.floor(Math.random() * max);
}

const list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
export default function App() {
  const [filterList, setFilterList] = useState(list);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filterValues = list.filter((item) => {
      return item.toLowerCase().includes(event.target.value.toLowerCase());
    });
    console.log(filterValues);
    setFilterList(filterValues);
  };
  return (
    <div className="App">
      Search: <input name="query" type="text" onChange={handleSearch} />
      {filterList &&
        filterList.map((item) => {
          return <div key={getRandomKey()}>{item}</div>;
        })}
    </div>
  );
}
