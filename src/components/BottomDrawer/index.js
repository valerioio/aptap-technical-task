import Comparison from "../Comparison";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export default function BottomDrawer({ comparisons, deals, removeDeal }) {
  function renderComparison(dealId) {
    const deal = deals.find(({ deal_id }) => dealId === deal_id);
    console.log(deal, comparisons);
    return (
      <Comparison
        key={dealId}
        name={deal.name}
        description={deal.description}
        logo={deal.logo}
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
      <Box sx={{ width: "auto" }} role="presentation">
        {comparisons.map((dealId) => renderComparison(dealId))}
      </Box>
      <button>Compare deals (2 of 2)</button>
    </Drawer>
  );
}
