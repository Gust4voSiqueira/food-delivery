import './styles.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
function Header(){

    return(
        <>
        <header id='header-container'>
    <header id='header-of-header'>
        <h4 id='welcome-message'>Seja Bem-Vindo!</h4>
        <img src='https://avatars.githubusercontent.com/u/79036409?s=60&v=4' alt='' />
        </header>

    <main id='location-header'>
        <span><LocationOnIcon id='icon-location'/>Luziânia, Goiás</span>
    </main>

        <input id='search' autoComplete='off' type='text' placeholder='Search for restaurant and Food' />
        <button id='search-button'  type='button'><SearchIcon id='search-icon' /></button>
        </header>
   
        </>
    )
}

export default Header