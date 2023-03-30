import React from "react";
import "./header.css";
import axios from "axios";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";

export default function HeaderComponent() {
  const [receivedData, setReceivedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false"
      )
      .then((response) => {
        setReceivedData(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content" id="content">
        <div id="first">
          <img src="/bitcoin.png" alt="bitcoin" />
          <span>Track and Trade</span>
          <img src="/ethereum.png" alt="ethereum" />
        </div>
        <div id="second">
          <span>Crypto Currencies</span>
        </div>
        <div className="topCryptos">
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            receivedData.map((data, key) => {
              let value =
                Math.floor(
                  receivedData[key].price_change_percentage_24h * 100
                ) / 100;
              return (
                <div key={key} className="coins">
                  <img
                    src={receivedData[key].image}
                    alt={receivedData[key].name}
                  />
                  <p style={{ marginTop: 5 }}>
                    <span>{receivedData[key].name} </span>
                    <span
                      className={`value ${
                        value >= 0 ? "positive" : "negative"
                      }`}
                    >
                      {Math.floor(
                        receivedData[key].price_change_percentage_24h * 100
                      ) /
                        100 +
                        "%"}
                    </span>
                  </p>
                  <p style={{ marginTop: 5 }}>
                    {"$ " +
                      receivedData[key].current_price
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
