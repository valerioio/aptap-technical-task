import { dealsApi } from "./api/deals";
import Item from "./components/Item";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setItems(await dealsApi.getDeals());
    }
    fetchData();
  }, []);
  return (
    <>
      <ul>
        {items.map((i) => (
          <li>
            <Item deal={i} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
