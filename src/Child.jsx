
function Child ({Image ,
    productName,
     rating ,
    price,
    delivery,
    description}
){

    return (
    <>
    <img src={Image}></img>
    <h1>ProductName:{productName}</h1>
    <h2>rating:{rating}</h2>
    <p>desc:{description}</p>
    <h3>price:{price}</h3>
    </>
    )


}

export default Child;