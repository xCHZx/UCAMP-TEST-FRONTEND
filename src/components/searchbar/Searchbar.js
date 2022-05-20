import React, { useState } from "react";
import {InputGroup, Input, Button, Form} from 'reactstrap'

export const Searchbar = ({getData}) =>{

  const [queryData, setQueryData] = useState("")

  const handleChange = (event) =>{
    const query = event.target.value
    // console.log(query)
    setQueryData(query)
  }

  const handleSubmit = async(event) =>{
    await getData(queryData).then(result => {},event.preventDefault())
  }

  return(
    <>
      
      <div className="searchbar">
      <Form onSubmit={handleSubmit} method="GET">
        <InputGroup>
          <Input onChange={handleChange} placeholder="...Busca algo"/>
          <Button typeof="submit">
            Buscar
          </Button>
          {/* <Input type="submit">aaa</Input> */}
        </InputGroup>
      </Form>
      </div>
      
    </>
  )
}