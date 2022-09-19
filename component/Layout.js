import NavBar from "./NavBar";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children }) => {

const router = useRouter();

  useEffect(()=>{
    const handleRouteChange = url =>{
       console.log(url)
       NProgress.start();
      }
    router.events.on('routerChangeStart', handleRouteChange)
    router.events.on('hashChangeComplete',()=> NProgress.done())
    return()=>{
      router.events.off('routeChangeStart', handleRouteChange)
    }

  },[])

return(
  <>
    <NavBar />
    <main className="container py-4">
        {children}
    </main>
    <footer className="bg-dark text-light text-center">
      <div className="container p-4">
        <h1>&copy; Martin Figueroa Portfolio</h1>
        <p>2022 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  </>
);
}
export default Layout;
