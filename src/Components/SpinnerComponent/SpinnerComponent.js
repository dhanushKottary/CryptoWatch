import React from "react";
import GridLoader from "react-spinners/GridLoader";

export default function SpinnerComponent() {
  return (
    <>
      <div style={{ marginTop: 40 }}>
        <GridLoader color="#3c1fde" size={35} />;
      </div>
    </>
  );
}
