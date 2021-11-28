function Deal({ name, description, logo, removeDeal }) {
  return (
    <>
      <img src={logo} alt={name} />
      <h6>{name}</h6>
      <p>{description}</p>
      <button onClick={removeDeal}>X</button>
    </>
  );
}

export default Deal;
