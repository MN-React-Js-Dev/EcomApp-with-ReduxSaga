import {React,useState} from "react";
import Header from "../Components/Header";
import Products from "../Components/Products";
import Cart from "../Components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { loadFeaturedProductStart } from "../Redux/actions";
import Footer from "../Components/Footer";

const Home = () => {
    const dispatch = useDispatch();
    const [showFeatured, setShowFeatured] = useState(false);

    const handleFeatureProductsButton = () => {
         dispatch(loadFeaturedProductStart())
         setShowFeatured(true)
    }
    const handleAllProductsButton = () => {
        setShowFeatured(false)
     }
    return (
        <>
            <Header handleAllProductsButton={handleAllProductsButton} handleFeatureProductsButton={handleFeatureProductsButton}/>
            <Products showFeatured={showFeatured}/>
            <Cart handleAllProductsButton={handleAllProductsButton} handleFeatureProductsButton={handleFeatureProductsButton}/>
            <Footer/>
        </>
    );
};

export default Home;
