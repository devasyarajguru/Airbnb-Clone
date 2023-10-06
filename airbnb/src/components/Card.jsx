import card1 from "../images/card-img1.jpg";
import StarIcon from '@mui/icons-material/Star';
export default function Card()
{
    return(
        <>
            <section className="card--section">
                <div className="card--container">
                    <img src={card1} className="card-1"/>
                    <div className="ratings">
                       <StarIcon color="warning" /> <span className="rating-number">5.0 <span className="rating-number-span">(6) - USA</span></span>
                    </div>
                    <span className="card-details">Life Lessons with Katie</span><br></br>
                    <span className="card-price"><span className="card-price-span">From $136 /</span> person</span>
                </div>
            </section>
        </>
    )
}