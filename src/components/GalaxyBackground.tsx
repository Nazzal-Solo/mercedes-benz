import React from "react";

const GalaxyBackground: React.FC = () => {
  console.log("GalaxyBackground component is rendering!"); // Debug log

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
        background: "linear-gradient(45deg, #000000, #1a1a1a, #000000)",
      }}
    >
      {/* Very obvious test elements */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          border: "2px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        GALAXY TEST
      </div>

      {/* Multiple obvious stars */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "20px",
          height: "20px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "80%",
          width: "15px",
          height: "15px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "20%",
          width: "25px",
          height: "25px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "70%",
          width: "18px",
          height: "18px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default GalaxyBackground;
