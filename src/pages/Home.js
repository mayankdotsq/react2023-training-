import Banner from "../components/Banner";
import HomeProductDisplay from "../components/HomeProductDisplay";
const Data= require("../data.json");

const Home = () => {
  let products=Data.products;
    return (
    <>
    <Banner/>
    <HomeProductDisplay Products={products}/>
    </>
  )
}
export default Home