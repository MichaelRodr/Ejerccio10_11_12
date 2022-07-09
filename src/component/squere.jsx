//import { useRef } from 'react'
import {useState, useEffect} from 'react'



const redColor = 150
const greenColor = 50
const blueColor = 250



const Squere = () => {
  const [red, setRed] = useState(redColor)
  const [green, setGreen] = useState(greenColor)
  const [blue, setBlue] = useState(blueColor)
  
  
 const StyleSquere ={
  width:'255px',
  height:'255px',
  borderRadius:'10px',
  background:`rgb(${red},${green},${blue})`,
 }
 
  console.log(StyleSquere)
  useEffect(() => {
    console.log("component didMount")
   
    return () => {
      console.log("wilunMount")
     
    };
  },[red,green,blue]);

  

  function randomColor(){
    setRed( 
    Math.floor(Math.random() * 256),  
    )
    setGreen( 
    Math.floor(Math.random() * 256),  
    )
    setBlue( 
    Math.floor(Math.random() * 256),  
    )
 }
 
  function stopChangeColor() {
   setRed( red),
  setGreen(green),
  setBlue(blue)
  }
  
  return (
    <div style={{textAlign:'center'}}>
      <h1>Color Picker</h1>
      {/* <SquereRender></SquereRender> */}
      {/* <pickColor color={randomColor}></pickColor> */}

      <div style={StyleSquere} onMouseMove={randomColor} onMouseLeave={stopChangeColor} onDoubleClick={randomColor}></div>
    </div>
  )
}

export default Squere