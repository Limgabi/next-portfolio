// 페이지에서 공통적으로 적용할 부분
import Header from "./header";

function Layout({ children }: any) {
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  )
}

export default Layout;