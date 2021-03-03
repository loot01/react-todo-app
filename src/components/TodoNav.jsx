import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  margin-top: 57px;
  margin-bottom: 18px;
  border-bottom: 1px solid #bdbdbd;
`;

const linkStyles = {
  color: "#333333",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "0px 0px 4px 4px",
  textDecoration: "none",
  height: "18px",
  width: "89px",
  textAlign: "center",
  paddingBottom: "5px",
};

const TodoNav = () => {
  const link = useLocation().pathname;
  return (
    <StyledNav>
      <Link
        to="/"
        style={{
          ...linkStyles,
          borderBottom: `${link === "/" ? "solid 4px #2F80ED" : "none"}`,
        }}
      >
        All
      </Link>
      <Link
        to="/active-todos"
        style={{
          ...linkStyles,
          borderBottom: `${
            link === "/active-todos" ? "solid 4px #2F80ED" : "none"
          }`,
        }}
      >
        Active
      </Link>
      <Link
        to="/completed-todos"
        style={{
          ...linkStyles,
          borderBottom: `${
            link === "/completed-todos" ? "solid 4px #2F80ED" : "none"
          }`,
        }}
      >
        Completed
      </Link>
    </StyledNav>
  );
};

export default TodoNav;
