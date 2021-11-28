import styles from "./BottomDrawer.module.css";
import Comparison from "../Comparison";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { MAX_COMPARISONS } from "../../App";

export default function BottomDrawer({ comparisons, deals, removeDeal }) {
  function renderComparison(dealId) {
    const deal = deals.find(({ deal_id }) => dealId === deal_id);
    return (
      <Comparison
        key={dealId}
        name={deal.provider_name}
        description={deal.deal_name}
        logo={deal.provider_logo_image_url}
        deal_id={dealId}
        removeDeal={removeDeal}
      />
    );
  }
  return (
    <Drawer
      sx={{ width: "auto" }}
      variant="persistent"
      anchor="bottom"
      open={comparisons.length > 0}
    >
      <Box
        className={styles.comparisons}
        sx={{ width: "auto" }}
        role="presentation"
      >
        {comparisons.map((dealId) => renderComparison(dealId))}
        <Button className={styles.button} variant="contained">
          Compare deals ({comparisons.length} of {MAX_COMPARISONS})
        </Button>
      </Box>
    </Drawer>
  );
}
