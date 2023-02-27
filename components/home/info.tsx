import Link from "next/link";
import styled from "styled-components";

function Info() {
  return (
    <InfoWrap>
      <div>
        <h2>Front-End Engineer, Web Developer</h2>
        <h3>안녕하세요, 프론트엔드 개발자 임가비입니다</h3>
        <p>
          저의 목표는 사람들에게 편리함을 제공할 수 있는 개발자로 성장하는
          것입니다. 제 개발 습관은 어떻게 하면 사용자들이 쉽게 접근하고 사용할
          지 생각하며 개발하는 것입니다. 하나의 프로젝트가 끝나도 거기서 그치지
          않고 리팩토링하여 발전시키는 개발자가 될 것입니다.
        </p>
      </div>
      <Link href='/projects'><span className="button">프로젝트 보러가기</span></Link>
    </InfoWrap>
  );
}

export default Info;

const InfoWrap = styled.div`
  position: absolute;
  margin: auto 30px;
  top: 50%;
  transform: translate(0, -50%);
  p {
    width: 40vw;
    font-size: 15px;
    margin: 16px 0;
    color: #686767;
  }
  .button {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #6bb0f0;
    color: #FFFFFF;
    font-size: 14px;
  }
`;
