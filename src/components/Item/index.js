import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Rating from "@mui/material/Rating";
import styles from "./Item.module.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#006CBE",
  },
});

function Item({
  deal: {
    provider_logo_image_url,
    provider_name,
    deal_name,
    provider_rating,
    monthly_price,
    internet_speed,
    broadband_type,
    set_up_cost,
    contract_info,
    deal_id,
  },
  toggleDeal,
}) {
  const [selected, setSelected] = useState(false);
  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      className={styles.row}
    >
      <TableCell component="th" scope="row" className={styles.rowHead}>
        <img
          src={provider_logo_image_url}
          alt={provider_name}
          className={styles.logo}
        />
        <div>
          <h4>{provider_name}</h4>
          <p>{deal_name}</p>
          <StyledRating
            name="read-only"
            value={provider_rating * 5}
            readOnly
            precision={0.5}
            size="small"
          />
        </div>
      </TableCell>
      <TableCell align="center" className={styles.price}>
        <h4>£{monthly_price.toFixed(2)}</h4>
        <p>Monthly cost</p>
      </TableCell>
      <TableCell align="center">
        <h4>{internet_speed} Mbps</h4>
        <p>{broadband_type}</p>
      </TableCell>
      <TableCell align="center">
        <h4>£{set_up_cost}</h4>
        <p>Setup Costs</p>
      </TableCell>
      <TableCell align="center">
        <h4>{contract_info}</h4>
        <p>Contract</p>
      </TableCell>
      <TableCell align="center">
        <Button
          style={{ border: "2px solid" }}
          className={styles.button}
          variant="outlined"
          onClick={() => {
            toggleDeal(deal_id, selected);
            setSelected(!selected);
          }}
        >
          {selected ? "Remove" : "Add to Compare"}
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default Item;
