import Item from "./components/Item";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <ul>
        {items.map((i) => (
          <Item deal={i} />
        ))}
      </ul>
    </>
  );
}

export default App;
