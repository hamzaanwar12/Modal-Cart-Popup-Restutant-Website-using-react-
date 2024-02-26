import "./AllItems.css"
import { useContext } from "react"
import Item from "./CartItem"
import { FoodContext } from "./App"

const AllItems = () => {
    const { items} = useContext(FoodContext)
    /*
    console.log("items")
    console.log(items)
    */
    return (
        <div className="allItems">
            {
                items.map
                    (
                        (element) => 
                            <Item
                                index = {element.id} 
                                key={element.id}
                                name={element.name}
                                detail={element.detail}
                                price={element.price}
                                quantity={element.quantity} />
                    )
            }

            {/* <Item 
            key = {items.key}
            name = {items.name}
            detail= {items.detail}
            price = {items.price} 
            quantity = {items.quantity}/>
             */}
        </div>
    )
}

export default AllItems