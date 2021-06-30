import React, { useState, useEffect } from "react";
import Index from "./cryptoApp/Index";
// import Coin from './cryptoApp/Coin'
import styled from "styled-components";

function App() {
  const [coins, setCoins] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(textInput.toLowerCase());
  });
  console.log(filteredCoins);
  return (
    <Div>
      <H1>Cryptocurrency Prices by Market Cap</H1>
      <H1> 60 coins listed</H1>
      <P>The global crypto market cap is $1.47 Trillion</P>
      <Index
        textInput={textInput}
        setTextInput={setTextInput}
        coins={coins}
        setCoins={setCoins}
      />
      <UL>
        <LI>LOGO</LI>
        <LI>NAME</LI>
        <LI>SYMBOL</LI>
        <LI>PRICE</LI>
        <LI>MARKET-CAP</LI>
      </UL>
      {coins.map((coin) => {
        const { symbol, name, current_price, id, image, market_cap } = coin;
        return (
          <InnerDiv key={id}>
            <img src={image} alt="logo" height="30px" />
            <h2>{name}</h2>
            <h2>{symbol}</h2>
            <h2>${current_price}</h2>
            <h2>${market_cap}</h2>
          </InnerDiv>
        );
      })}
      {filteredCoins.map((coin) => {
        const { symbol, name, current_price, id, image, market_cap } = coin;
        return (
          <>
            <InnerDiv key={id}>
              <img src={image} alt="logo" height="30px" />
              <h2>{name}</h2>
              <h2>{symbol}</h2>
              <h2>${current_price}</h2>
              <h2>${market_cap}</h2>
            </InnerDiv>
          </>
        );
      })}
    </Div>
  );
}

//styled components
const Div = styled.div`
  background-color: #040714;
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  border-bottom: 2px solid #031052;
`;
const H1 = styled.h1`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  border: 2px solid black;
  background-color: rgb(110, 109, 109);
  font-size: 0;
  padding: 15px;
  list-style: none;
`;
const LI = styled.li`
  color: wheat;
  font-size: 14px;
  display: inline-block;
  /* margin-bottom: 10px; */
`;
export default App;
