import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const cars = useSelector(selectCars)

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Tesla" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
          <a key={index} href="#">{car}</a>
        ))}
        {/* <a href="">Model S</a>
        <a href="">Model Y</a>
        <a href="">Model X</a>
        <a href="">Model 3</a> */}
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <i
          className="fa-solid fa-bars"
          style={{ cursor: "pointer" }}
          onClick={toggleMenu}
        ></i>
      </RightMenu>

      {/* Burger Menu with transition */}
      <BurgerNav isOpen={isOpen}>
        <i
          className="fa-solid fa-xmark"
          style={{ cursor: "pointer" }}
          onClick={toggleMenu}
        ></i>
        <ul>
        {cars && cars.map((car,index)=>(
          <li><a key={index} href="#">{car}</a> </li>
        ))}
          {/* <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li> */}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
        </ul>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

  ul {
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }

  li {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  i {
    align-self: flex-end;
    margin-bottom: 20px; 
  }
`;
