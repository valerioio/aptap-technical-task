function Deal({ name, description, logo }) {
  return (
    <>
      <img src={logo} alt={name} />
      <h6>{name}</h6>
      <p>{description}</p>
      <button>X</button>
    </>
  );
}

export default Deal;
