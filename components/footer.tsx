import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <p>ⓒ 2023. Limgabi all rights reserved. </p>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  width: 100vw;
  height: 66px;
  background-color: #f7fafd;
  position: fixed;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
`;