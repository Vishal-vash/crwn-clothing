import React from 'react';

import './cart-item.styles.scss';

const cartItem = ({imageUrl, name, price, quantity }) => {
    return (<div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span>{quantity} X {price}</span>
        </div>
    </div>)
}

export default cartItem;