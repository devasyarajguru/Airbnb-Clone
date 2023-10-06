import coverimg from '../images/cover.jpg';
export default function Hero()
{
    return(
        <>
            <section>
                <img src= {coverimg} className='coverimage' />
                <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
            
        </>
    )
}