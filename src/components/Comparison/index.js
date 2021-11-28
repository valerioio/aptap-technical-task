export default function Comparison({
  name,
  description,
  logo,
  deal_id,
  removeDeal,
}) {
  return (
    <>
      <img src={logo} alt={name} height="4rem" />
      <h6>{name}</h6>
      <p>{description}</p>
      <button onClick={() => removeDeal(deal_id)}>X</button>
    </>
  );
}
