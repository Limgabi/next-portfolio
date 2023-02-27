import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function Header() {
  return (
    <HeaderWrap>
      <div className="left">
        <AiFillStar size={36} color="#fbf245" />
        <h1>임가비 포트폴리오</h1>
      </div>
      <div className="right">
        <span>홈</span>
        <span>프로젝트</span>
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
