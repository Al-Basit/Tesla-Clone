import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectItems } from "../features/item/itemSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const items = useSelector(selectItems);

  return (
    <Container>
      <a href="/#" data-type="logo">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {items &&
          items.map((item, index) => (
            <a key={index} href="/#">
              {item}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose
            className="close-icon"
            onClick={() => setBurgerStatus(false)}
          />
        </CloseWrapper>
        {items &&
          items.map((item, index) => (
            <li key={index}>
              <a href="/#">{item}</a>
            </li>
          ))}
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Used Inventory</a>
        </li>
        <li>
          <a href="/#">Trade-in</a>
        </li>
        <li>
          <a href="/#">Cyber truck</a>
        </li>
        <li>
          <a href="/#">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  a {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.4em 0.7em;
    margin-right: 10px;
  }
  a:hover:not(li > a, a[data-type="logo"]),
  li:hover,
  .close-icon:hover {
    background-color: rgba(234, 229, 231, 0.4);
    border-radius: 0.3em;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10em;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  > a:not(:last-child) {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const CustomMenu = styled.a`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
