import './styles.css'
import imageHeader from '../../images/pizza-capa.jfif'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom'
import {useState} from 'react'

function Header(){
    var [icon, setIcon] = useState(true)
    return(
        <>
    <header id='header-of-header-profile'>
        <Link to="/" style={{textDecoration: 'none'}}><div id='button-arrow'>< ArrowBackIcon /></div></Link>
        <span id='phrase-effect'>Sua Plataforma de comida online!</span>
        <div id='button-favorite' onClick={()=>{
            setIcon(!icon)
        }}>{icon ? <FavoriteBorderIcon /> : <FavoriteIcon /> }</div>
    </header>
        </>
    )
}

export default Header