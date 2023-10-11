// import card1 from "../images/card-img1.jpg";
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
export default function Card(props)
{
    Card.propTypes ={
        price:PropTypes.number.isRequired,
        img:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        location:PropTypes.string.isRequired
    }
    return(
        <>
            <section className="card--section">
                <div className="card--container">
                    <img src={`../images/${props.img}`} className="card-1"/>
                    
                    <div className="ratings">
                       <StarIcon color="warning" /> <span className="rating-number">{props.rating} <span className="rating-number-span">(6) - USA</span></span>
                    </div>
                    <span className="card-details">{props.title}</span><br></br>
                    <span className="card-price"><span className="card-price-span">From {props.price} /</span>    person</span>
                </div>
            </section>
        </>
    )
}