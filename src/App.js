import { dealsApi } from "./api/deals";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import styles from "./App.module.css";
import BottomDrawer from "./components/BottomDrawer";

export default function App() {
  const [deals, setDeals] = useState([]);
  const [comparisons, setComparisons] = useState([]);

  function removeComparison(dealId) {
    setComparisons(comparisons.filter((id) => dealId !== id));
  }

  function addComparison(dealId) {
    setComparisons([...comparisons, dealId]);
  }

  function toggleComparison(dealId, selected) {
    console.log(selected);
    if (selected) removeComparison(dealId);
    else addComparison(dealId);
  }

  useEffect(() => {
    (async () => {
      setDeals(await dealsApi.getDeals());
    })();
  }, []);

  return (
    <>
      <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {deals.map((deal) => (
              <Item
                key={deal.deal_id}
                deal={deal}
                selected={comparisons.includes(deal.deal_id)}
                toggleDeal={toggleComparison}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BottomDrawer
        deals={deals}
        comparisons={comparisons}
        removeDeal={removeComparison}
      />
    </>
  );
}
