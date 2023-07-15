import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'

function App() {
  const data =[

    {
      image:"https://www.keyboards.de/app/uploads/2015/03/Nord_Stage_2_Front-1024x724.png",
     productName:"Nord stage 2",
     rating:"4",
     price:"80000",
     delivery:"Free-Shipping",
     description:"Brand New"

   },
   {
    image:"https://www.keyboards.de/app/uploads/2015/03/Nord_Stage_2_Front-1024x724.png",
   productName:"Nord stage 2",
   rating:"4",
   price:"80000",
   delivery:"Free-Shipping",
   description:"Brand New"

 },
 {
  image:"https://www.keyboards.de/app/uploads/2015/03/Nord_Stage_2_Front-1024x724.png",
 productName:"Nord stage 2",
 rating:"4",
 price:"80000",
 delivery:"Free-Shipping",
 description:"Brand New"

},
    {
       image:"https://www.keyboards.de/app/uploads/2015/03/Nord_Stage_2_Front-1024x724.png",
      productName:"Nord stage 2",
      rating:"4",
      price:"80000",
      delivery:"Free-Shipping",
      description:"Brand New"

    }
  ]

  return (
    <>
      <Parent value={data}></Parent>
    </>
  )
}

export default App