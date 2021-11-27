import ItemDetails from "../ItemDetails";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Item({
  deal: {
    deal_id,
    provider_logo_image_url,
    provider_name,
    deal_name,
    provider_rating,
    monthly_price,
    internet_speed,
    broadband_type,
    set_up_cost,
    contract_info,
  },
}) {
  return (
    <TableRow
      key={deal_id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="right">
        <img src={provider_logo_image_url} alt={provider_name} />
      </TableCell>
      <TableCell align="right">
        <div>
          <h4>{provider_name}</h4>
          <p>{deal_name}</p>
          <div>{provider_rating}</div>
        </div>
      </TableCell>
      <TableCell align="right">
        <h4>£{monthly_price}</h4>
        <p>Monthly cost</p>
      </TableCell>
      <TableCell align="right">
        <ItemDetails
          data={`${internet_speed} Mbps`}
          description={broadband_type}
        />
      </TableCell>
      <TableCell align="right">
        <ItemDetails data={`£${set_up_cost}`} description="Setup Costs" />
      </TableCell>
      <TableCell align="right">
        <ItemDetails data={contract_info} description="Contract" />
      </TableCell>
      <TableCell align="right">
        <button>Add to compare</button>
      </TableCell>
    </TableRow>
  );
}

export default Item;
