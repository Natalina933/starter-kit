import Head from "next/head";
import SideNavbar from "../components/SideNavbar";
import TitleActivitys from "../components/TitleActivitys";
import Activitys from "./activitys";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SMA</title>
        <meta name="description" content="Saint-Mandé Accueil" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <SideNavbar/>
      <TitleActivitys/>
      <Activitys/>
      <Footer/>
      </div>
  );
}
