function DealInfo({ logo, name, description, infos }) {
  return (
    <>
      <button>Remove</button>
      <img src={logo} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
      <ul>
        {infos.map(({ infoName, infoDescription }) => (
          <li>
            <p>{name}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DealInfo;
