import './Product.css'

import {ProductItem} from "./ProductItem.tsx";

export function ProductList(props) {
    console.log('📋 ProductList')
    return (
        <ul className="product-list">
            {props.items.map(item => <ProductItem key={item.id} product={item}/>)}
        </ul>
    );
}