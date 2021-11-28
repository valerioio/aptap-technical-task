import Deal from "../Deal";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

function BottomDrawer({ deals, removeDeal }) {
  return (
    <Drawer
      sx={{ width: "auto" }}
      variant="persistent"
      anchor="bottom"
      open={deals.length > 0}
    >
      <Box sx={{ width: "auto" }} role="presentation">
        {deals.map(({ name, description, logo, deal_id }) => (
          <Deal
            key={deal_id}
            name={name}
            description={description}
            logo={logo}
            removeDeal={removeDeal}
          />
        ))}
      </Box>
      <button>Compare deals (2 of 2)</button>
    </Drawer>
  );
}

export default BottomDrawer;
