import * as React from "react";

const Layout = ({ pageTitle, children }) => {
   return (
    <section>
      <h1>pageTitle</h1>
       {children}
    </section>
   )
}

export default Layout;