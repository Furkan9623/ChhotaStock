import "../styles/nvabar.css";
const Navbar = () => {
  return (
    <div id="nav-main-div">
      <div className="nav">
        <div className="nav-child1">
          <img
            src="https://png.pngtree.com/png-vector/20220217/ourmid/pngtree-money-and-coin-dollar-bag-png-image_4390222.png"
            alt=""
          />
          <h3>
            Invest<span>Pe</span>
          </h3>
          <button>Gateway x</button>
        </div>
        <div className="nav-child2">
          <h2>Products </h2>
          <h2>About Us</h2>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
