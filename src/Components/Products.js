import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartStart, loadColorsStart, loadMaterialsStart, loadProductsStart } from "../Redux/actions";
import { toast } from "react-toastify";

const Products = ({ showFeatured }) => {
  const dispatch = useDispatch();
  const [marterialId, setmarterialId] = useState("")
  const [productColorId, setproductColorId] = useState("")

  const productListings = useSelector((state) => state?.data?.products);
  const productColors = useSelector((state) => state?.data?.colors);
  const productMatrials = useSelector((state) => state?.data?.materials);
  const featuredProdcuts = useSelector((state) => state?.data?.featuredProduct);

  useEffect(() => {
    dispatch(loadProductsStart())
    dispatch(loadColorsStart())
    dispatch(loadMaterialsStart())
  }, [])

  const handleAddtoCartFuntion = (productdata) => {
    dispatch(addToCartStart(productdata))
    toast("Product Added !!");

  }

  const handleMaterialFilter = (id) => {
    setmarterialId(id)
  }

  const handleColorFilter = (id) => {
    setproductColorId(id)
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-2">
          <div className="container">
            <div class="filter">
              <h6 class="p-1 mb-3"><b>Filters</b></h6>
            </div>

            <div id="mobile-filter">
              <div>
                <h6 class="p-1"><b>Meterials</b></h6>
                {productMatrials?.map((material, index) => {
                  return <>
                    <ul key={index} style={{ listStyleType: "none" }}>
                      <li><span className="text-capitalize" onClick={() => handleMaterialFilter(material.id)}>{material.name}</span> </li>
                    </ul>
                  </>
                })}

              </div>
            </div>
            <div id="mobile-filter">
              <div>
                <h6 class="p-1"><b>Color</b></h6>
                {productColors?.map((itam, iteamIndex) => {
                  return <>
                    <ul key={iteamIndex} style={{ listStyleType: "none" }}>
                      <li> <span className="text-capitalize" onClick={() => handleColorFilter(itam.id)}>{itam.name}</span> </li>
                    </ul>
                  </>
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="row container">
            {productListings?.map((iteam, index) => {
              const maeterial = productMatrials?.find(maeterial => maeterial.id === iteam.materialId);
              const color = productColors?.find((color => color.id === iteam.colorId))
              const isFeatured = featuredProdcuts?.some(featuredItem => featuredItem.productId === iteam.id);

              if (showFeatured && !isFeatured) {
                return null;
              }
              if (marterialId && iteam.materialId !== marterialId) {
                return null
              }
              if (productColorId && iteam.colorId !== productColorId) {
                return null;
              }
              return <>
                <div className="col-sm-4 mb-5" key={index}>
                  <div className="card cst-card">
                    <img className="card-img-top" src={iteam.image} alt={iteam.image} />
                    <div className="mt-4">
                      <h5 className=""><b>{iteam.name}</b></h5>
                      <p className="text-uppercase">maeterial: {maeterial ? maeterial.name : 'N/A'}</p>
                      <p className="text-uppercase">color: {color ? color.name : 'N/A'}</p>
                      <p>INR {iteam.price}.00</p>
                      <button className="add-to-cart-btn" onClick={() => handleAddtoCartFuntion(iteam)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </>
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
