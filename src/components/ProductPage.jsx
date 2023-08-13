import ProductItem from './ProductItem.jsx';



const ProductPage = () => {
    // You can see here that we start our functional `ProductPage` component with an array of objects, each with certain consistent traits: `name`, `manufacturer`, and `price`.

    const products = [
        { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
        { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
        { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
        { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
    ];
    console.log(products)
    // console.log(products[0].name)
    // console.log(products[0].price)

    return (
            <div>
                <ul>
                    {/* <li>   {products[0].name} - ${products[0].price}   </li>
                    <li>   {products[0].name} - ${products[0].price}   </li> */}
          {/* Prop Passing SYNTAX newName={originalName}  */}
                  
                     <ProductItem productToRender= {products[0]}/> 
                    
                </ul>
            </div>


    )
}




export default ProductPage