import React from "react";
import { useEffect } from "react";
import {Button, Col, Container} from "reactstrap"
import {ProductCard} from '../cards/ProductCard'

export const Catalog = ({products, setProducts}) =>{
  

  const sortByPrice = (sortType) =>{
    if (sortType === 'asc') {
      let filteredProducts = products.sort((a,b)=>{
        if (a.price > b.price){
          return 1
        }
        if (a.price < b.price){
          return -1
        }
        return 0
      })
      setProducts([...filteredProducts])
    }
    if (sortType === 'desc') {
      let filteredProducts = products.sort((a,b)=>{
        if (a.price < b.price){
          return 1
        }
        if (a.price > b.price){
          return -1
        }
        return 0
      })
      setProducts([...filteredProducts])
    }
  }

  const sortByCondition = (sortType) =>{
    if (sortType === 'new'){
      let filteredProducts = products.filter(product => product.condition === 'new')
      setProducts([...filteredProducts])
    }
    if (sortType === 'used'){
      let filteredProducts = products.filter(product => product.condition === 'used')
      setProducts([...filteredProducts])
    }
  }

  return(
    <>
      <div className="pt-5 pb-5 buttonsContainer">
        <Container>
          <Button color="primary" onClick={()=>{
            sortByPrice('asc')
          }}>El más barato primero</Button>
          <Button color="secondary" onClick={()=>{
            sortByPrice('desc')
          }}>El más caro primero</Button>

          <Button color="success" onClick={()=>{
            sortByCondition('new')
          }}>Solo nuevos</Button>
          <Button color="danger" onClick={()=>{
            sortByCondition('used')
          }}>Solo usados</Button>
        </Container>
      </div>
      
      <Container fluid>
        {
          products.map((product) => (
            // <Col sm="2" className="catalogCards">
              <ProductCard
                img={product.thumbnail}
                title={product.title}
                price={product.price}
                currency_id={product.currency_id}
                condition={product.condition}
                available_quantity={product.available_quantity} />
            // </Col>
          ))
        }
        
      </Container>
    </>
  )
}