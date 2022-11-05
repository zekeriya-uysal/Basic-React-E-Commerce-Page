import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { UilShoppingBasket, UilPlus, UilMinus } from '@iconscout/react-unicons';

function ProductCart(props) {
    const { data, index, updateCounter } = props;
    return (
        <Card key={data.id} className="product-cart" >
            <Card.Img variant="top px-3 pt-3" src={data?.source} />
            <Card.Body>
                <Card.Title align="center">{data?.title}</Card.Title>
                <Card.Subtitle align="center" className="py-4 text-muted">{data?.price + " $"}</Card.Subtitle>
                {data?.count === 0 ?
                    <div className="d-flex justify-content-center">
                        <Button className="px-5" variant="primary" onClick={() => updateCounter(index, ++data.count)} >  <UilShoppingBasket /> Buy</Button>
                    </div>
                    :
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" onClick={() => updateCounter(index, --data.count)}><UilMinus /></Button>
                        <Form.Control
                            value={data.count}
                            className="product-cart-text-input"
                            onChange={(e) => updateCounter(index, e.target.value)}
                        />
                        <Button variant="primary" onClick={() => updateCounter(index, ++data.count)}><UilPlus /></Button>
                    </div>
                }
            </Card.Body>
        </Card>
    );
}
export default ProductCart