import React , {useEffect} from 'react'
import Hero from '../components/Hero/Hero';
import PageTitle from '../components/PageTitle/PageTitle';
import ProductsContent from '../components/ProductsContent/ProductsContent';
import Services from '../components/Services/Services';
import productsData from '../assets/data/products';
import TimerCountDown from '../components/Timer/TimerCountDown';
const Home = () => {
  
  const filteredProducts = (category) => {
    return productsData.filter(product => product.category === category);
  }
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <PageTitle title="Home">
      <Hero />
      <Services />
      <ProductsContent filteredByCategory={filteredProducts("mobile")} title="Trending Products"/>
      <ProductsContent filteredByCategory={filteredProducts("watch")} title="Best Sales"/>
      <TimerCountDown />
      <ProductsContent filteredByCategory={filteredProducts("sofa")} title="New Arrivals"/>
      <ProductsContent filteredByCategory={filteredProducts("chair")} title="Popular In Category"/>
    </PageTitle>
  )
}

export default Home