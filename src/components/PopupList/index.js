import DealInfo from "../DealInfo";

function PopupList({ dealInfos }) {
  return (
    <>
      <h3>Compare</h3>
      <button>X</button>
      {dealInfos.map((info) => (
        <DealInfo props={info} />
      ))}
    </>
  );
}

export default PopupList;
