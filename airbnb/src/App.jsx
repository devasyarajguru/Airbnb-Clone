import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'
import Card from './components/Card';
import Data from './data';
export default function App()
{
  const myCard = Data.map(data => {
      return <Card 
                  key={data.id}
                  img={data.coverImg}
                  title={data.title}
                  price={data.price}
                  rating={data.stats.rating}
                  location={data.location}
              />
  })
  return(
    
    <>
        <Navbar />
        <Hero />
        {myCard}
    </>
  )
}