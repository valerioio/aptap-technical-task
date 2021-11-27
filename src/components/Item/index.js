import ItemDetails from "../ItemDetails";

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
  },
}) {
  return (
    <div>
      <img src={provider_logo_image_url} alt={provider_name} />
      <div>
        <h4>{provider_name}</h4>
        <p>{deal_name}</p>
        <div>{provider_rating}</div>
      </div>
      <div>
        <h4>£{monthly_price}</h4>
        <p>Monthly cost</p>
      </div>
      <ItemDetails
        data={`${internet_speed} Mbps`}
        description={broadband_type}
      />
      <ItemDetails data={`£${set_up_cost}`} description="Setup Costs" />
      <ItemDetails data={contract_info} description="Contract" />
      <button>Add to compare</button>
    </div>
  );
}

export default Item;
