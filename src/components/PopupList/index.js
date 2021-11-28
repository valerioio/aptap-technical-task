import { DETAILS_ORDER, DETAILS_NAMES } from "../../tools/constants";
import ColumnHead from "../ColumnHead";
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
import styles from "./PopupList.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function PopupList({ onClose, open, deals, comparisons, removeDeal }) {
  const dealsToCompare = comparisons.map((dealId) =>
    deals.find(({ deal_id }) => dealId === deal_id)
  );
  function handleClickRemove(deal_id) {
    if (comparisons.length === 1) onClose();
    removeDeal(deal_id);
  }

  return (
    <Dialog
      className={styles.popupWindow}
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth={true}
    >
      <DialogTitle className={styles.tableTitle}>
        Compare
        <Button className={styles.closeButton} onClick={onClose} variant="text">
          ×
        </Button>
      </DialogTitle>
      <Divider />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className={styles.tableHeadRow}>
              <StyledTableCell></StyledTableCell>
              {dealsToCompare.map(
                ({
                  deal_id,
                  provider_name,
                  deal_name,
                  provider_logo_image_url,
                }) => (
                  <StyledTableCell key={deal_id}>
                    <Button
                      className={styles.removeButton}
                      onClick={() => handleClickRemove(deal_id)}
                      variant="text"
                    >
                      Remove
                    </Button>
                    <ColumnHead
                      provider={provider_name}
                      deal={deal_name}
                      logo={provider_logo_image_url}
                    />
                  </StyledTableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody className={styles.tableBody}>
            {DETAILS_ORDER.map((rowName) => (
              <StyledTableRow key={rowName}>
                <StyledTableCell component="th" scope="row">
                  {rowName}
                </StyledTableCell>
                {dealsToCompare.map((deal) => (
                  <StyledTableCell component="th" scope="row">
                    {deal[DETAILS_NAMES[rowName]]}
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
