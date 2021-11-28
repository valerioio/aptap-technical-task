import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#006CBE",
  },
});

export default function Stars({ rating }) {
  return (
    <StyledRating
      name="read-only"
      value={rating * 5}
      readOnly
      precision={0.5}
      size="small"
    />
  );
}
