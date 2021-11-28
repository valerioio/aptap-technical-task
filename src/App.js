import { useEffect, useState } from "react";
import { dealsApi } from "./api/deals";
import styles from "./App.module.css";
import BottomDrawer from "./components/BottomDrawer";
import PopupList from "./components/PopupList";
import Item from "./components/Item";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

export const MAX_COMPARISONS = 3;

export default function App() {
  const [deals, setDeals] = useState([]);
  const [comparisons, setComparisons] = useState([]);
  const [popup, setPopup] = useState(false);

  function removeComparison(dealId) {
    setComparisons(comparisons.filter((id) => dealId !== id));
  }

  function addComparison(dealId) {
    if (comparisons.length < MAX_COMPARISONS)
      setComparisons([...comparisons, dealId]);
  }

  function toggleComparison(dealId, selected) {
    if (selected) removeComparison(dealId);
    else addComparison(dealId);
  }

  useEffect(() => {
    (async () => {
      setDeals(await dealsApi.get());
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
        openPopup={() => setPopup(true)}
      />
      <PopupList
        open={popup}
        onClose={() => setPopup(false)}
        deals={deals}
        comparisons={comparisons}
        removeDeal={removeComparison}
      />
    </>
  );
}
