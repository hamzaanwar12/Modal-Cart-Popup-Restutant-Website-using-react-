import "./ModalCartItem.css"
import {useState } from "react";

const ModalCartItem = (props) => 
{
    let [quantity,setQuantity] = useState(props.quantity)
    const handleAdd = (event)=>
    {
        event.preventDefault();
        setQuantity(++quantity)
    }
    const handleSubtract = (event)=>
    {
        event.preventDefault();
        if(quantity==1)
            props.itemRemover(props.id)
        else if(quantity>1)
            setQuantity(--quantity)
    }

    return (
            <div className="itemModal" >
                <div className="itemName">
                    <h3 className="name">{props.name}</h3>
                    <div>
                        <h3 className="priceModal">${(parseFloat(props.price) * quantity).toFixed(2)}</h3>
                        <h3 className="quantity ">x{quantity}</h3>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick = {handleSubtract} className="ModalButton" disabled={false}>-</button>
                    <button onClick = {handleAdd} className="ModalButton" disabled={false}>+</button>
                </div>
            </div>
    )
}

export default ModalCartItem;