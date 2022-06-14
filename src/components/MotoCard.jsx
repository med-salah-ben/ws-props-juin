import React from 'react';
import {Card , Button} from "react-bootstrap";
import Mob from "../assets/Mobylette.jpg"

const MotoCard = (props) => {
    // const {name,price,MotoImg} = Moto;
  return (
    <div>
        <Card style={{ width: '18rem',margin:'10px' }}>
  <Card.Img variant="top" src={props.Moto.MotoImg} />
  <Card.Body>
    <Card.Title>  {props.Moto.name}  </Card.Title>
    <Card.Text>
      {`Price : ${props.Moto.price} $`}
    </Card.Text>
    <Button variant="primary" onClick={()=>props.buyAlert(props.Moto.name,props.Moto.price )}>Buy</Button>
  </Card.Body>
</Card>
    </div>
  )
}

MotoCard.defaultProps = {
    MotoImg:Mob
  }

export default MotoCard