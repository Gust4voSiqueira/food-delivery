import './styles.css'
import React from 'react'
import {useCallback} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom' 
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Restaurants(props){

    var variaveis={}
    var handleVariaveis = useCallback(()=>{
        variaveis=({
            image:props.image,
            restaurantName : props.restaurantName,
            typeFood : props.typeFood,
            OpenNow: props.OpenNow
        })
    
    },[variaveis])
    return(
        <>
            <section id='restaurants-section'>
            <img src={props.image} alt=''></img>
            <div className='restaurant-information'>
                <p className='restaurant-location-typefood'>< LocationOnIcon id='restaurant-location-icon'/> {props.location}, Goiás</p>
                <span className='restaurant-name'>{props.restaurantName}</span>
                <p className='restaurant-location-typefood'>{props.typeFood}</p>
                <span className='opening-hours'>{props.OpenNow}</span>
                <Link to="/profile" style={{ textDecoration: 'none', color:"black", textAlign:"center", width:"3%" , marginTop: "3.5%", marginBottom: "3.5%", marginLeft: "2.5rem"}} onClick={()=>{
          handleVariaveis()
      }}> 

           <div id='icon-restaurantprofile'>
                < ArrowForwardIcon/>
           </div>
           </Link>
            </div>
             
            </section>
           
            
        </>
    )
}

export default Restaurants