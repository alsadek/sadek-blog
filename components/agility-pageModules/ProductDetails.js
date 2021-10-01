import React from "react";
import { renderHTML } from "@agility/nextjs";

const ProductDetails = ({ module, dynamicPageItem }) => {
  // get module fields
  const { fields } = dynamicPageItem;
  return (
    <div className="relative px-8">
      <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
        <h1 className="text-xl" >{fields.title} - {fields.sKU}</h1>
        <img src={fields.image.url} alt={fields.image.label}></img>

        <button onClick={addCart}>Add to Cart</button>
        {/* <div
          className="prose max-w-full mx-auto"
          dangerouslySetInnerHTML={renderHTML(fields.textblob)}
        /> */}
      </div>
    </div>
  );
};

const addCart = () => {
  alert('Product added to cart')
}
export default ProductDetails;
