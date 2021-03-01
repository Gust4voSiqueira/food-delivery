import './styles.css'
import highlightsImage from '../../images/highlights-section-image.jpg'
import GradeIcon from '@material-ui/icons/Grade';

function TopHotDeals(){
    return(
        <>  
        <h4 id='title-topHotDeals'>
            TOP HOT DEALS
        </h4>
        <section className='highlights-section' >
            <img src={highlightsImage} alt='' ></img>
            <div className="informations-highlights">
            <span className='highlights-name'>California Pizza</span>
            <span className='highlights-note'>< GradeIcon className='icon-star'/>4.1</span>
            </div>
            <p className='highlights-products'>Pizza-Pasta-Dandwiches</p>
        </section>

        </>
    )
}

export default TopHotDeals