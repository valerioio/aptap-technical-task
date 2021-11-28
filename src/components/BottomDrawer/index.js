import styles from "./BottomDrawer.module.css";
import DealToCompare from "../DealToCompare";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { MAX_COMPARISONS } from "../../App";

export default function BottomDrawer({
  comparisons,
  deals,
  removeDeal,
  openPopup,
}) {
  function renderDeal(dealId) {
    const deal = deals.find(({ deal_id }) => dealId === deal_id);
    return (
      <DealToCompare
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
      <Box className={styles.deals} sx={{ width: "auto" }} role="presentation">
        {comparisons.map((dealId) => renderDeal(dealId))}
        <Button
          className={styles.button}
          onClick={openPopup}
          variant="contained"
        >
          Compare deals ({comparisons.length} of {MAX_COMPARISONS})
        </Button>
      </Box>
    </Drawer>
  );
}
