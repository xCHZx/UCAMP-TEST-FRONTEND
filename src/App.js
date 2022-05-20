// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Searchbar from './components/searchbar/searchbar'
// import ProductCard from './components/cards/ProductCard'
import { getProducts } from './services/ProductServices';
import { Catalog } from './components/catalog/Catalog';
import { useEffect, useState } from 'react';
import { Searchbar } from './components/searchbar/Searchbar';

function App() {

  useEffect(() => {
    getData()
  }, [])
  
  const [products, setProducts] = useState([])

  const getData = async(queryData) =>{
    const response = await getProducts(queryData)
    setProducts(response.data)
    
  }


  return (
    <>
    <div className='mainBody'>
      <h1 className="mainTitle">U Camp Technical Test</h1>
      <Searchbar className="searchbar" getData={getData}/>
      <Catalog products={products} setProducts={setProducts}/>
    </div>
    </>
  )
}

export default App;
