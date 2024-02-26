import "./NavBar.css";
import { useState} from "react"

const Navbar = (props) => {
    const [cartItems, setCartItems] = useState(0)

    const handleModal = ()=>props.showModel()

    return (
        <>
            <nav>
                <h1>ReactMeals</h1>
                <button onClick={handleModal}>Your Cart <span>{cartItems}</span></button>
            </nav>
            
            <div className="backSupport">
                <div className="background"></div>
                <div className="intro">
                    <h2>Delecious Food, Delivered To You</h2>
                    <p>Choose your favorite meal from our broad slection of available meals and enjoy a deleicious lunch or dinner at home</p>                    
                    <p>All meals are cooked with high-quality ingredients, just in time and of course by experience Chefs!</p>                    
                </div>
            </div>
        </>
    )
}

export default Navbar