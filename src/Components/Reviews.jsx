import React from "react";
import r1 from "./../Images/r1.jpg";
import r2 from "./../Images/r2.jpg";
import r3 from "./../Images/r3.jpg";
import r4 from "./../Images/r4.jpg";

const reviews = {
    // color: "white",
    //backgroundColor: "lightpink",
    height:"2100px",
   };

const c1 = {
    height:"80px",
    width:"80px",
    borderRadius:"50%",
 
    marginLeft:"250px",
   };

const box = {
    height:"300px",
    width:"45%",
    margin:"20px",
    textAlign:"Justify",
    border:"1px solid gray",
    float:"left",
    backgroundColor:"#faebd7",
   };





const Reviews = () => {
    return ( <div style={reviews}>
        <h1 style={{textAlign: "center"}}>Customer Reviews</h1>
       <br/>
       <br/>
       <div style={box} >
        <p style={{textAlign: "justify" ,padding:"10px",fontSize:"17px"}}>
        GENTLE AND AMAZING! If you have sensitive skin you should definitely get this product without thinking twice, I have really sensitive skin and this suits me great. I used this product for a FULL month before writing this and I have to recommend it
        </p>
        <img src={r1} style={c1} alt="Logo" />
        <h2 style={{textAlign: "center"}} >
            Eva
        </h2>
       </div>


       <div style={box} >
        <p style={{textAlign: "justify" ,padding:"10px",fontSize:"17px"}}>
        GENTLE AND AMAZING! If you have sensitive skin you should definitely get this product without thinking twice, I have really sensitive skin and this suits me great. I used this product for a FULL month before writing this and I have to recommend it
        </p>
        <img src={r4} style={c1} alt="Logo" />
        <h2 style={{textAlign: "center"}} >
            Ema
        </h2>
       </div>

       <div style={box} >
        <p style={{textAlign: "justify" ,padding:"10px",fontSize:"17px"}}>
        GENTLE AND AMAZING! If you have sensitive skin you should definitely get this product without thinking twice, I have really sensitive skin and this suits me great. I used this product for a FULL month before writing this and I have to recommend it
        </p>
        <img src={r3} style={c1} alt="Logo" />
        <h2 style={{textAlign: "center"}} >
            Mia
        </h2>
       </div>

       <div style={box} >
        <p style={{textAlign: "justify" ,padding:"10px",fontSize:"17px"}}>
        GENTLE AND AMAZING! If you have sensitive skin you should definitely get this product without thinking twice, I have really sensitive skin and this suits me great. I used this product for a FULL month before writing this and I have to recommend it
        </p>
        <img src={r2} style={c1} alt="Logo" />
        <h2 style={{textAlign: "center"}} >
            Sofia
        </h2>
       </div>
       
    </div> 
    
    );
}
 
export default Reviews;