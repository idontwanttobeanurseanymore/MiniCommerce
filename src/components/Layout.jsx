//Estructura de app (header+contenido+footer)
import React from "react";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <Navbar />
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
}
