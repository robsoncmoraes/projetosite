import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <SideBar />
      <Content>
        <Component {...pageProps} />
      </Content>
    </div>
  );
}
