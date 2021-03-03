import styled from "styled-components";

const FooterWrapper = styled.div`
  position: absolute;
  top: 90%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #a9a9a9;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  width: max-content;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      created by{" "}
      <a
        href="#"
        style={{ fontWeight: 700, textDecoration: "none", color: "#a9a9a9" }}
      >
        suleif
      </a>{" "}
      - devChallenges.io
    </FooterWrapper>
  );
};

export default Footer;
