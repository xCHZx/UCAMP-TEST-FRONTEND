import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap'

export const ProductCard = ({img,title,price,currency_id, condition, available_quantity}) =>{
  return(
    <>
        <Card className="cardCustom">
          <CardImg src={img}></CardImg>
          <CardBody>
            <CardTitle tag="h6">{title}</CardTitle>
            <CardTitle tag="h4">${price} ({currency_id})</CardTitle>
            <CardText>¡{condition} product!</CardText>
            <CardText>In stock: {available_quantity}</CardText>
          </CardBody>
          
        </Card>

    </>
  )
}
