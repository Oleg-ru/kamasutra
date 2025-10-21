import './Product.css'
import {useState} from "react";

export function ProductItem(props) {
    console.log('🧺 ProductItem')
    const [inCart, setInCart] = useState(false);
    
    function handleClickToBasket(event) {
        event.target.classList.toggle('product-item__in-basket');

        if (inCart) {
            alert('Товар удален из корзины');
            setInCart(!inCart);
            return;
        }
        alert('Товар добавлен в корзину');
        setInCart(!inCart);
    }

    return (
        <li className="product-item">
            <p>Id: {props.product.id}</p>
            <p>Name: {props.product.name}</p>
            <p>Price: {props.product.price}</p>
            <p>Category: {props.product.category}</p>
            <button
                className="product-item__btn"
                onClick={(event) =>
                    handleClickToBasket(event)}>{inCart ? 'В корзине ✔' : 'В корзину'} </button>
        </li>
    );
}