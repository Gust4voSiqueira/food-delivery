import './styles.css'
import BurgerIcon from '../../images/burger-icon.png'
import PizzaIcon from '../../images/pizza-icon.png'
import frenchFriesIcon from '../../images/french-fries-icon.png'
import candyIcon from '../../images/candy-icon.png'
import drinksIcon from '../../images/drinks-icon.png'
import beefIcon from '../../images/beef-icon.png'
import sushiIcon from '../../images/sushi-icon.png'

function Categories(){
    return(
        <>
        <h4 id='categories-title'>CATEGORIES</h4>
        <section id='categories-card'>
        <img src={BurgerIcon} alt=''></img>
        <span>Burger</span>
        </section>

        <section id='categories-card'>
        <img src={PizzaIcon} alt=''></img>
        <span>Pizza</span>
        </section>

        <section id='categories-card'>
        <img src={frenchFriesIcon} alt=''></img>
        <span>French Fries</span>
        </section>

        <section id='categories-card'>
        <img src={candyIcon} alt=''></img>
        <span>Candy</span>
        </section>

        <section id='categories-card'>
        <img src={drinksIcon} alt=''></img>
        <span>Drinks</span>
        </section>

        <section id='categories-card'>
        <img src={beefIcon} alt=''></img>
        <span>Beef</span>
        </section>

        <section id='categories-card'>
        <img src={sushiIcon} alt=''></img>
        <span>Sushi</span>
        </section>
        <h4 id='restaurants-title'>RESTAURANTS NEAR YOU</h4>
        </>
    )
}
export default Categories