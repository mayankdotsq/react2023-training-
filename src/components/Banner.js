const Banner = () => {
  return (
    <>
      <div
        className="home-banner d-flex align-items-center"
        style={{ background: 'url("../assets/images/banner-g43bcba41c_1280.png") no-repeat' }}
      >
        <div className="container">
          <div className="row no-gutters align-items-center justify-content-between">
            <div className="bnr-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, <a href="#">Specimen Book</a>. Lorem
                Ipsum is <a href="#">simply dummy</a> text of the printing
              </p>
              <a href="#" className="bnr-btn">
                <img src="assets/images/google-play-btn.png" alt="google" />
              </a>
              <a href="#" className="bnr-btn">
                <img src="assets/images/apple-btn.png" alt="apple" />
              </a>
            </div>
            {/* <div className="bnr-img-box">
              <img src="https://i.dummyjson.com/data/products/2/3.jpg" alt="burger" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
