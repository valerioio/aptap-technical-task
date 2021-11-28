export default function DealDetails({
  deal: {
    deal_id,
    provider_logo_image_url,
    provider_name,
    deal_name,
    provider_rating,
    monthly_price,
    deal_type,
    internet_speed,
    broadband_type,
    set_up_cost,
    contract_info,
    data_limits,
  },
}) {
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
    Rating: provider_rating,
    "Monthly Cost": monthly_price,
    "Tariff Type": deal_type,
    Speed: internet_speed,
    "Broadband Type": broadband_type,
    "Set Up Cost": set_up_cost,
    "One Off Cost": 0,
    "Term End": contract_info,
    "Data Limits": data_limits,
  };
  return (
    <>
      <button>Remove</button>
      <img src={provider_logo_image_url} alt={provider_name} width="25px" />
      <h4>{provider_name}</h4>
      <p>{deal_name}</p>
    </>
  );
}
