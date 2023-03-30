import React from "react";
import "./choose.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ChooseComponent() {
  return (
    <>
      <p className="header" id="chooseUs">Why Choose Us</p>
      <div className="content2">
        <MDBRow>
          <MDBCol md="4">
            <MDBCard className="mb-5 card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol size="3" md="3">
                    <p className="icon2">
                      <i class="fa-solid fa-wallet"></i>
                    </p>
                  </MDBCol>
                  <MDBCol size="9" md="9" className="ps-4">
                    <MDBCardTitle
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                    >
                      CONNECT YOUR WALLET
                    </MDBCardTitle>
                    <MDBCardText
                      style={{ fontSize: "20px", overflow: "hidden" }}
                    >
                      Use Trust Wallet, Metamask or to connect to the app.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-5 card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol size="3" md="3">
                    <p className="icon2">
                      <i class="fa-solid fa-pen-ruler"></i>
                    </p>
                  </MDBCol>
                  <MDBCol size="9" md="9" className="ps-4">
                    <MDBCardTitle
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                    >
                      SELECT YOUR QUANTITY
                    </MDBCardTitle>
                    <MDBCardText style={{ fontSize: "20px" }}>
                      Upload your crypto and set a title, description and price.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-5 card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol size="3" md="3">
                    <p className="icon2">
                      <i class="fa-solid fa-bolt"></i>
                    </p>
                  </MDBCol>
                  <MDBCol size="9" md="9" className="ps-4">
                    <MDBCardTitle
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                    >
                      CONFIRM TRANSACTION
                    </MDBCardTitle>
                    <MDBCardText style={{ fontSize: "20px" }}>
                      Earn by selling your crypto on our marketplace.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="middle2">
            <img src="/chooseHand.png" alt="Choose" />
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mb-5 card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol size="3" md="3">
                    <p className="icon2">
                      <i class="fa-solid fa-satellite-dish"></i>
                    </p>
                  </MDBCol>
                  <MDBCol size="9" md="9" className="ps-4">
                    <MDBCardTitle
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                    >
                      RECEIVE YOUR OWN NFTS
                    </MDBCardTitle>
                    <MDBCardText style={{ fontSize: "20px" }}>
                      Invest all your crypto at one place on one platform.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-5 card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol size="3" md="3">
                    <p className="icon2">
                      <i class="fa-solid fa-chess-knight"></i>
                    </p>
                  </MDBCol>
                  <MDBCol size="9" md="9" className="ps-4">
                    <MDBCardTitle
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                    >
                      TAKE A MARKET TO SELL
                    </MDBCardTitle>
                    <MDBCardText style={{ fontSize: "20px" }}>
                      Discover, collect the right crypto collections to buy or
                      sell.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-5 card">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol size="3" md="3">
                    <p className="icon2">
                      <i class="fa-solid fa-boxes-stacked"></i>
                    </p>
                  </MDBCol>
                  <MDBCol size="9" md="9" className="ps-4">
                    <MDBCardTitle
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                    >
                      DRIVE YOUR COLLECTION
                    </MDBCardTitle>
                    <MDBCardText style={{ fontSize: "20px" }}>
                      We make it easy to Discover, Invest and manage.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}
