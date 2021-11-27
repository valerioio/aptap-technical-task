import Deal from "../Deal";

function BottomDrawer({ deals }) {
  return (
    <>
      {deals.map(({ name, description, logo }) => (
        <Deal name={name} description={description} logo={logo} />
      ))}
      <button>Compare deals (2 of 2)</button>
    </>
  );
}

export default BottomDrawer;
