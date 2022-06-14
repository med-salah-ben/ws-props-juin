import './App.css';
import MotoList from './components/MotoList';
import ZRobot from "./assets/Z-robot.png";
import H2R from "./assets/H2r.jpg";
import Gsxr from "./assets/GSXR.jpg"
import PropTypes from "prop-types";
function App(props) {

  const MotoData =[
    {
      name:"Kawazaki-Z-Robot",
      price: 12799,
      MotoImg:ZRobot
    },
    {
      name:"Kawazaki-H2R",
      price: 55000,
      MotoImg:H2R
    },
    {
      name:"GSXR",
      price: 15600,
      MotoImg:Gsxr
    }
  ]

  const buyAlert = (name,price) => alert(`You should pay ${price} for the ${name}`)

  return (
   <div>
    <h3>{props.email}</h3>
    <MotoList data={MotoData} buyAlert={buyAlert} />
   </div>
  );
}

App.defaultProps = {
  email:"Mob@gmail.com"
}

App.propTypes = {
  email: PropTypes.string
}
export default App;
