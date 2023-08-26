import "../styles/page2midsection.css";
const Page2MidSection = () => {
  return (
    <div>
      <div className="mid-img-div">
        <div className="mid-div-flex">
          <div className="mid-left-div">
            <h1>INVESTMENT STACK</h1>
            <h2>FOR INDIA</h2>
            <h3>
              Elevate You Investement Strategy With Our{" "}
              <span>Comprehensive APIS</span>
            </h3>
          </div>
          <div>
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              rerum dolore provident optio fuga explicabo deserunt.
            </h4>
            <div>
              <div className="mid-end-div">
                <p>SEE OUR PROUDUCTS</p> <p>{"V"}</p>
              </div>
              <button className="mid-btn">CONTACT US</button>
            </div>
          </div>
        </div>
        <div className="mid-image2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/mutual-fund-investment-4380722-3667387.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Page2MidSection;
