import clsx from "clsx";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import styles from "./Item.module.css";
import Button from "@mui/material/Button";
import Stars from "../Stars";

export default function Item({
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
  selected,
  toggleDeal,
  comparisonLimit,
}) {
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
          <Stars rating={provider_rating} />
        </div>
      </TableCell>
      <TableCell align="center" className={styles.price}>
        <h4>{monthly_price}</h4>
        <p>Monthly cost</p>
      </TableCell>
      <TableCell align="center">
        <h4>{internet_speed}</h4>
        <p>{broadband_type}</p>
      </TableCell>
      <TableCell align="center">
        <h4>{set_up_cost}</h4>
        <p>Setup Costs</p>
      </TableCell>
      <TableCell align="center">
        <h4>{contract_info}</h4>
        <p>Contract</p>
      </TableCell>
      <TableCell align="center">
        <Button
        // change the background color to red when other deals cannot be selected
          className={clsx({
            [styles.button]: true,
            [styles.comparisonLimit]: comparisonLimit && !selected,
          })}
          variant="outlined"
          onClick={() => {
            toggleDeal(deal_id, selected);
          }}
        >
          {selected ? "Remove" : "Add to Compare"}
        </Button>
      </TableCell>
    </TableRow>
  );
}
