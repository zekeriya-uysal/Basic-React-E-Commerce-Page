import React from "react";

import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { UilShoppingBasket } from '@iconscout/react-unicons';


function HeaderTooltips(props) {
    const { state } = props;
    var basketData = state.filter(filterData => filterData.isBasket);
    let basketCount = basketData.length;

    const popoverBody = (
        <Popover id="basket">
            <Popover.Header as="h3">Basket ({basketCount})</Popover.Header>
            <Popover.Body>
                <div className="basket-cart-items">
                    {basketData.length > 0 ? basketData.map((data, index) =>
                        <div key={index} className="basket-cart-item">
                            <Image src={data.source}></Image>
                            <div className="basket-cart-item-text">
                                <h2>
                                    {data.title}
                                </h2>
                                <p>Count : {data.count}</p>
                                <p>Price : {data.price * data.count} $</p>
                            </div>
                        </div>
                    ) : <h1>Empty</h1>}
                </div>
            </Popover.Body>
        </Popover>
    );
    return (
        state &&
        <div className="header-basket">
            <OverlayTrigger
                trigger="click"
                key={"bottom"}
                placement={"bottom"}
                overlay={popoverBody}
            >
                <div className="header-basket-icon">
                    <UilShoppingBasket />
                    <Badge pill bg="dark">
                        {basketCount}
                    </Badge>
                </div>
            </OverlayTrigger>
        </div>
    );
}
export default HeaderTooltips;