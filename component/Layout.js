import NavBar from "./NavBar";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className="container py-4">
        {children}
    </main>
  </>
);

export default Layout;
