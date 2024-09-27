import Header from "../Header/Header";

function LayOut({ children }) {
  // Destructure children from props
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayOut;
