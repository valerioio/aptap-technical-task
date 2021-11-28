import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const detailsOrder = [
  "Rating",
  "Monthly Cost",
  "Tariff Type",
  "Speed",
  "Broadband Type",
  "Set Up Cost",
  "One Off Cost",
  "Term End",
  "Data Limits",
];
const detailsNames = {
  Rating: "provider_rating",
  "Monthly Cost": "monthly_price",
  "Tariff Type": "deal_type",
  Speed: "internet_speed",
  "Broadband Type": "broadband_type",
  "Set Up Cost": "set_up_cost",
  "One Off Cost": "0",
  "Term End": "contract_info",
  "Data Limits": "data_limits",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function PopupList({ onClose, open, deals, comparisons }) {
  const dealsToCompare = comparisons.map((dealId) =>
    deals.find(({ deal_id }) => dealId === deal_id)
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Compare
        <Button onClick={onClose} variant="text">
          ×
        </Button>
      </DialogTitle>
      <Divider />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              {dealsToCompare.map(({ deal_id, provider_name }) => (
                <StyledTableCell key={deal_id}>{provider_name}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {detailsOrder.map((rowName) => (
              <StyledTableRow key={rowName}>
                <StyledTableCell component="th" scope="row">
                  {rowName}
                </StyledTableCell>
                {dealsToCompare.map((deal) => (
                  <StyledTableCell component="th" scope="row">
                    {deal[detailsNames[rowName]]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
}

PopupList.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PopupList;
