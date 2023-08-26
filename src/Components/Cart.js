import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/actions';
import { toast } from 'react-toastify';

const Cart = ({ handleAllProductsButton, handleFeatureProductsButton }) => {
    const dispatch = useDispatch();
    const cartIteams = useSelector((state) => state?.data?.cartItems);
    console.log(cartIteams, "cartIteams")

    // const cartIteamsData = JSON.parse(localStorage.getItem("cartItems"));
    const removeCartHandle = (productId) => {
        // var arr = []
        // cartIteams?.filter((iteam) => {
        //     if (iteam.id !== productId.id) {
        //         arr.push(iteam)
        //     }
        // })
        // console.log(arr, "arr")
        // localStorage.setItem("cartItems", JSON.stringify(arr))

        dispatch(removeFromCart(productId))
        toast("Product Removed !!");
    }
    return (
        <>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ "background": "#d9d9d9" }}>
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" >
                    <ul class="nav mb-4">
                        <li class="nav-item ">
                            <a class="nav-link text-black" aria-current="page" href="#" onClick={handleAllProductsButton}><b>All Products</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-black" href="#" onClick={handleFeatureProductsButton}>Featured Products</a>
                        </li>
                        <li class="nav-item text-black">
                            <a class="nav-link feature-products" href="#" >
                                <AiOutlineShoppingCart style={{ "color": "black" }} />
                            </a>
                        </li>

                    </ul>
                    <div> <h2>Shopping cart</h2>
                    </div>
                    {cartIteams !== undefined ? cartIteams?.map((iteam, index) => {
                        return <>
                            <div className="row container" key={index}>
                                <div className="col-sm-6 mb-4">
                                    <div class="cst-card" style={{ "width": "10rem" }}>
                                        <img class="img-fluid" src={iteam.image} alt={iteam.image} />
                                    </div>
                                </div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-5">
                                    <h5 class="card-title">{iteam.name}</h5>
                                    <p>INR {iteam.price}</p>
                                    <button className='btn btn-danger' onClick={() => removeCartHandle(iteam)} style={{ backgroundColor: "#3e3737", border: "none", borderRadius: "0px" }}>Remove X</button>

                                </div>
                            </div>
                        </>
                    }) : ""}
                    {cartIteams && cartIteams?.length == 0 && <h3 className='text-center mt-5'>Cart Is Empty</h3>}
                </div>
            </div>
        </>
    )
}

export default Cart