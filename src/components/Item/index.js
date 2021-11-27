import ItemDetails from "../ItemDetails";

function Item({ deal }) {
  return (
    <>
      <img src="" alt="" />
      <div>
        <h4>{deal}</h4>
        <p>Unlimited</p>
        <div></div>
      </div>
      <div>
        <h4>£21.99</h4>
        <p>Monthly cost</p>
      </div>
      <ItemDetails data="£21.99" description="Monthly cost" />
      <ItemDetails data="10Mbps" description="Standard Speed" />
      <ItemDetails data="£5" description="Setup Costs" />
      <button>Add to compare</button>
    </>
  );
}

export default Item;
