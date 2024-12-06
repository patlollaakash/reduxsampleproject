import React from "react";

function Footer() {
  let footerStyles = {
    position: "fixed", // Ensure the footer stays at the bottom
    bottom: 0, // Stick to the bottom
    width: "100%", // Ensure it spans the full width of the screen
  };

  return (
    <>
      <div className="bg-dark text-white py-3" style={footerStyles}>
        <div className="text-center">Todolist &copy; Mytodolist.com</div>
      </div>
    </>
  );
}

export default Footer;
