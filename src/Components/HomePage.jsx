import React from "react";
import logo from './../Images/=.jpg';
import pic1 from './../Images/5.jpg';
import pic2 from './../Images/bundle.jpg';
import pic3 from './../Images/bundle2.jpg';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



const mystyle = {
   
    width:"100%",
    fontFamily: "Arial"
  };

  const mystyle1 = {
    
    height:"2100px",
   };

   const mystyle2 = {
    textAlign:"center",
    paddingTop:"1rem",
   };

   const prod = {
    width:"23%",
    float:"left",
    height:"300px",
    margin:"10px",
   };

   const img = {
    width:"100%",
    float:"left",
    height:"300px",
    margin:"10px",
   };

   const bundle={
    textAlign:"center",
    marginTop:"450px",
   };

   const footer={
    width:"100%",
    height:"200px",
    backgroundColor:"darkgray",
    marginTop:"450px",
   };

   const icon={
    width:"100%",
    height:"100px",
   }

   const icons={
  
   }



   

  


const HomePage = () => {
    return ( <div style={mystyle1}>
        <img src={logo} style={mystyle} alt="Logo" />
        <div>
          <h1 style={mystyle2}>
            Best Selling Products
          </h1>
        </div>
        <div style={prod}>
        <img src={pic1} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>EyeCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,000.00</p>
        </div>

        <div style={prod}>
        <img src={pic1} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>HandCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,100.00</p>
        </div>

        <div style={prod} >
        <img src={pic1} style={img}alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Moisturizer</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,200.00</p>
        </div>

        <div style={prod} >
        <img src={pic1} style={img}  alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Toner</h3>
        <p style={{marginLeft: "10px"}}>Rs.800.00</p>
        </div>

        <div>
          <h1 style={bundle}>
            Bundles
          </h1>
        </div>
        <div style={prod}>
        <img src={pic2} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>EyeCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,000.00</p>
        </div>

        <div style={prod}>
        <img src={pic3} style={img} alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>HandCream</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,100.00</p>
        </div>

        <div style={prod} >
        <img src={pic2} style={img}alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Moisturizer</h3>
        <p style={{marginLeft: "10px"}}>Rs.1,200.00</p>
        </div>

        <div style={prod} >
        <img src={pic3} style={img}  alt="Logo" />
         <h3 style={{marginLeft: "10px"}}>Toner</h3>
        <p style={{marginLeft: "10px"}}>Rs.800.00</p>
        </div>

        <div style={footer}>
            <div style={icon}>
            <HomeIcon size="100x"/>
            <FacebookIcon style={icons}/>
            <InstagramIcon style={icons}/>
            <TwitterIcon style={icons}/>

            </div>
        </div>

    </div> 



   
    
    )
}
 
export default HomePage;