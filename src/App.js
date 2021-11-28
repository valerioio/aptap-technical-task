import { dealsApi } from "./api/deals";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import styles from "./App.module.css";
import BottomDrawer from "./components/BottomDrawer";

function App() {
  const [items, setItems] = useState([]);
  const [comparisons, setComparisons] = useState([]);

  function removeComparison(dealId) {
    setComparisons(comparisons.filter((id) => dealId !== id));
  }

  function addComparison(dealId) {
    setComparisons([...comparisons, dealId]);
  }

  function toggleComparison(dealId, selected) {
    if (selected) removeComparison(dealId);
    else addComparison(dealId);
  }

  useEffect(() => {
    async function fetchData() {
      const deals = await dealsApi.getDeals();
      setItems(deals);
    }
    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {items.map((item) => (
              <Item key={item.deal_id} deal={item} toggleDeal={toggleComparison} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BottomDrawer deals={comparisons} removeDeal={removeComparison} />
    </>
  );
}

export default App;
