import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

function Header() {
  return (
    <HeaderWrap>
      <div className="left">
        <AiFillStar size={36} color="#fbf245" />
        <Link href='/'><h1>임가비 포트폴리오</h1></Link>
      </div>
      <div className="right">
        <Link href='/'><span>홈</span></Link>
        <Link href='/projects'><span>프로젝트</span></Link>
        <Link href='https://github.com/Limgabi'><span>깃허브</span></Link>
        <DarkModeToggleButton/>
      </div>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
  align-items: center;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
      font-size: 24px;
      margin-left: 8px;
    }
  }
  .right {
    span {
      font-size: 18px;
      display: inline-block;
      margin-right: 16px;
      color: #656565;
    }
  }
`;
