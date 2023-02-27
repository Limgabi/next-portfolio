// 페이지에서 공통적으로 적용할 부분
import Header from "./header";
import Footer from "./footer";

function Layout({ children }: any) {
  return (
    <>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout;