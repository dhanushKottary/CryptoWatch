import React from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import { useLocation } from "react-router-dom";
import "./style.css";

export default function CoinDetailsComponent() {
  const [receivedData, setReceivedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const location = useLocation();
  const coin = location.state.name;

  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/" +
          coin +
          "?tickers=false&community_data=false&developer_data=false&sparkline=false"
      )
      .then((response) => {
        setReceivedData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [coin]);

  if (error) {
    return (
      <div className="error-message">
        <p>Failed retrieving data. Please try again later</p>
        <a href="/">
          <i className="fa-solid fa-arrow-left"></i> Back
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="navbar4">
        <a href="/" id="start">
          <i className="fa-solid fa-arrow-left"></i> Back
        </a>
        {isLoading ? (
          <SpinnerComponent />
        ) : (
          <div id="end">
            <a
              href={receivedData.links.blockchain_site[0]}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-circle-info"></i>
            </a>
            <a
              href={receivedData.links.subreddit_url}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-reddit"></i>
            </a>
          </div>
        )}
      </div>
      <MDBContainer className="content3">
        {isLoading ? (
          <SpinnerComponent />
        ) : (
          <MDBRow>
            <MDBCol md="3" className="left">
              <img src={receivedData.image.large} alt={receivedData.name} />
              <p id="name" style={{ fontSize: "35px", fontWeight: "bold" }}>
                {receivedData.name}
              </p>
              <p>Rank: {receivedData.market_cap_rank}</p>
            </MDBCol>
            <MDBCol md="9" id="right">
              <div className="line">
                <p>
                  24h Change:{" "}
                  <span
                    className={`value ${
                      Math.floor(
                        receivedData.market_data.price_change_percentage_24h *
                          100
                      ) /
                        100 >=
                      0
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    {Math.floor(
                      receivedData.market_data.price_change_percentage_24h * 100
                    ) /
                      100 +
                      "%"}
                  </span>
                </p>
                <p>
                  Price:{" "}
                  <span
                    className={`value ${
                      Math.floor(
                        receivedData.market_data.current_price.usd * 100
                      ) /
                        100 >=
                      0
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    {"$" +
                      (
                        Math.floor(
                          receivedData.market_data.current_price.usd * 100
                        ) / 100
                      )
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </span>
                </p>
                <p>Symbol: {receivedData.symbol}</p>
                <p
                  id="description"
                  style={{
                    height: "300px",
                    overflowY: "auto",
                    fontSize: "18px",
                    wordWrap: "break-word",
                    textAlign: "justify",
                    padding: "10px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      receivedData.description && receivedData.description.en
                        ? "Description: " + receivedData.description.en
                        : "Description: No data found",
                  }}
                ></p>
              </div>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>
    </>
  );
}
