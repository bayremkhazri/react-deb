import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



const Model = (props) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{ props.name} </Card.Title>
        <Card.Text>{ props.price}
        </Card.Text>
        <Button variant="primary">{props.years} </Button>
      </Card.Body>
    </Card>
  );
}
      
    </div>
  )
}

export default Model
