import styled, { css } from "styled-components";
import variables from "./../variables";

const { primaryColor, secondaryColor } = variables;

const Cta = styled.button`
    border:none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 20px;

    ${({ primary }) => primary && css`
        background-color: ${primaryColor};
        color: ${secondaryColor};
  `}

    ${({ secondary }) => secondary && css`
        background: ${secondaryColor};
        color: ${primaryColor};
    `}
`;

export default Cta;