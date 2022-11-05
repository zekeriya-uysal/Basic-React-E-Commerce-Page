import React, { useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./component/header/header";
import ProductCart from "./component/cart/product-cart";

import "./assets/styles/global.scss";
import "./assets/styles/index.scss";

const testData = [
  {
    "id": 1,
    "source": "http://localhost:3000/products/iphone14-pro-max.png",
    "title": "İphone 14 Pro Max",
    "count": 0,
    "price": 1599,
    "isBasket": false
  },
  {
    "id": 2,
    "source": "http://localhost:3000/products/iphone14-pro-max.png",
    "title": "İphone 14 Pro Max",
    "count": 0,
    "price": 1199,
    "isBasket": false
  },
  {
    "id": 3,
    "source": "http://localhost:3000/products/iphone14-pro-max.png",
    "title": "İphone 14 Pro Max",
    "count": 0,
    "price": 1199,
    "isBasket": false
  }
];
function App() {

  const [state, setState] = useState(testData);

  const updateCounter = (index, count) => {
    var tempData = [...state];
    if (count === 0) {
      tempData[index].isBasket = false;
    } else if (count === 1) {
      tempData[index].isBasket = true;
    }
    tempData[index].count = count;
    setState(tempData);
  }
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} >
      <Header state={state} />
      <Container className="overflow-hidden">
        <Row className="p-3 gy-3">
          {state.map((data, index) => {
            return <Col key={index} sm="12" md="4" lg="3" xl="3" xxl="3">
              <ProductCart data={data} index={index} updateCounter={updateCounter} />
            </Col>

          })}
        </Row>
      </Container>
    </ThemeProvider >
  );
}
export default App;
