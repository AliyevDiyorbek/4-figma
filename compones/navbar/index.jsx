import React from 'react'
import { Container, Nav, Category, Img} from './style'
import logo from "../../assets/img/Frame.png"

export default function Navbar() {
  return (
      <Nav>
        <Container>
          <Category><Img src={logo}></Img></Category>
          <Category></Category>
          <Category></Category>
        </Container>
      </Nav>
  )
}
