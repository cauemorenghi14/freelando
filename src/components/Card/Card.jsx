import styled from "@emotion/styled";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 32px;
    background: #EBEAF9;
    border: 1px solid #5754ed;
`

export const Card = ({ children }) => {
  return (
    <StyledDiv>
        {children}
    </StyledDiv>
  );
};
