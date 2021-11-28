// import DealDetails from "../DealDetails";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";

function PopupList({ onClose, open, dealDetails }) {
  console.log(dealDetails);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Compare
        <Button onClick={onClose} variant="text">
          ×
        </Button>
      </DialogTitle>
      <Divider />
      <p>qwertyuiop</p>
      <p>asdfghjkl</p>
      <p>zxcvbnm</p>
    </Dialog>
  );
}

PopupList.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default PopupList;
