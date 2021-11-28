import DealDetails from "../DealDetails";

export default function PopupList({ dealDetailss }) {
  return (
    <>
      <h3>Compare</h3>
      <button>X</button>
      {dealDetailss.map((details) => (
        <DealDetails props={details} />
      ))}
    </>
  );
}
