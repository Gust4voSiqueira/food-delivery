import './styles.css'
import GradeIcon from '@material-ui/icons/Grade';


function BodyProfile(){
    return(
        <>
        <section id='Body-Header'>
            <div>
            <h3>California Pizza</h3>
            <span id='body-note'><GradeIcon id='body-note-icon' />4.1</span>
            </div>
            <p className='body-header-typefood'>Italian - Vegetarian - Friendly Vegan Options</p>
        </section>

        <nav id='body-navbar-typefood'>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Goodies</li>
            <li>Desserts</li>
        </nav>

        </>
    )
}

export default BodyProfile