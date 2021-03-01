import './styles.css'
import imageRestaurant from '../../images/image-restaurant.png'
import AddIcon from '@material-ui/icons/Add';

function SectionFood(){
    return(
        <>
<section id='body-section-food'>
        <img src={imageRestaurant} alt=''></img>
        <div className='body-food-information'>
                <span className='food-name'>Cheese Lover Pizza</span>
               
                <p className='ingredients-food'>Presunto - Mussarela - Azeite de oliva - Linguiça calabresa - Cebola - Orégano - Azeitonas - Molho de tomate</p>
                
                <div id='value-button'>
                <span className='value-food'>R$ 5,99</span>
                <div id='button-add-div'><AddIcon id='button-add-icon' /></div>
                </div>
            </div>
            </section>

            <section id='body-section-food'>
        <img src={imageRestaurant} alt=''></img>
        <div className='body-food-information'>
                <span className='food-name'>Cheese Lover Pizza</span>
               
                <p className='ingredients-food'>Presunto - Mussarela - Azeite de oliva - Linguiça calabresa - Cebola - Orégano - Azeitonas - Molho de tomate</p>
                
                <div id='value-button'>
                <span className='value-food'>R$ 5,99</span>
                <div id='button-add-div'><AddIcon id='button-add-icon' /></div>
                </div>
            </div>
            </section>
        </>
    )
}

export default SectionFood