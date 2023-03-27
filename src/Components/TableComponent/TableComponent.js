import React from "react";
import "./table.css";
import { MDBDataTableV5 } from "mdbreact";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import axios from "axios";

export default function TableComponent() {
  const [receivedData, setReceivedData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((response) => {
        setReceivedData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const data = {
    columns: [
      {
        label: "Coin",
        field: "coin",
        sort: "asc",
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
      },
      {
        label: "24h Change",
        field: "change",
        sort: "asc",
      },
      {
        label: "Market Cap",
        field: "marketCap",
        sort: "asc",
      },
    ],
    rows: receivedData
      ? receivedData.map((data, key) => ({
          coin: (
            <div className="d-flex align-items-center">
              <img
                src={receivedData[key].image}
                alt={receivedData[key].name}
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{receivedData[key].name}</p>
              </div>
            </div>
          ),
          price: (
            <p className="fw-normal mb-1" style={{ whiteSpace: "nowrap" }}>
              {"$ " +
                receivedData[key].current_price
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </p>
          ),
          change: (
            <p
              className={`${
                Math.floor(
                  receivedData[key].price_change_percentage_24h * 100
                ) /
                  100 >=
                0
                  ? "positive fw-normal mb-1"
                  : "negative fw-normal mb-1"
              }`}
            >
              {Math.floor(receivedData[key].price_change_percentage_24h * 100) /
                100 +
                "%"}
            </p>
          ),
          marketCap: (
            <p className="fw-normal mb-1" style={{ whiteSpace: "nowrap" }}>
              {"$ " +
                receivedData[key].market_cap
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </p>
          ),
        }))
      : [],
  };

  return (
    <>
      <p className="header">Market Update</p>
      <div className="table-responsive px-4">
        {isLoading ? (
          <div className="center-it">
            <SpinnerComponent />
          </div>
        ) : (
          <MDBDataTableV5
            className="custom-table"
            responsive
            data={data}
            entries={10}
            pagesAmount={4}
            searchBottom={false}
          />
        )}
      </div>
    </>
  );
}
