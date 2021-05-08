import styled from "styled-components";

const FooterWrapper = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #a9a9a9;
  left: 0;
  right: 0;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  width: max-content;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      created by{" "}
      <a
        href="https://github.com/loot01/react-todo-app"
        style={{ fontWeight: 700, textDecoration: "none", color: "#a9a9a9" }}
      >
        suleif
      </a>{" "}
      - devChallenges.io
    </FooterWrapper>
  );
};

export default Footer;
