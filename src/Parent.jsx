
import Child from "./Child";
function Parent({value}){
   
    return(
           [ value.map((d)=>{
                return(
            <Child                  Image={d.image}
                  productName={d.productName}
                  rating={d.rating}
                  price ={d.price}
                  delivery ={d.delivery}
                  description={d.description}

                
                ></Child>)
         
            })]
    )

        
    
}
export default Parent;