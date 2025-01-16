import ProductListRow from '@/components/organisms/ProductListRow';
import ProductDetailsSection from '@/components/templates/ProductDetailsSection';

const Home = () => {
  return (
    <div className = "w-screen h-screen bg-white" >
      <ProductDetailsSection />
      <ProductListRow type='main' desc='Inspirations' title='Complétez votre look' />
      <ProductListRow type='products' desc='Recommandations pour vous' title='Nous vous recommandons' />
    </div>
  )
}

export default Home;