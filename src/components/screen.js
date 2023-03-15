import React from "react";

const Screen = ({ calc }) => {
  return (
    <section className="container_screen">
        <p className="display" type="text" maxLength="5">{calc || "0"}</p>
    </section>
  )
}

export default Screen;