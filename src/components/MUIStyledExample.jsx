import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
  background-color: #2f455c; /* Primary blue */
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;

  /* Hover effect */
  &:hover {
    background-color: #0069d9; /* Darker blue on hover */
  }
`;

const MUIStyledExample = () => {
  return <StyledButton>Click me!</StyledButton>;
};

export default MUIStyledExample;
