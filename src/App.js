import { dealsApi } from "./api/deals";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setItems(await dealsApi.getDeals());
    }
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {items.map((item) => (
            <Item key={item.deal_id} deal={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
