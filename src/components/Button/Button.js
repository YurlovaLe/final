import styled from "styled-components"

export const Button = styled.button`
  border: ${(props) => (props.$view === 'outline' ? '1px solid #FFFFFF' : 'none')};
  border-radius: 6px;
  background-color: ${(props) => (props.$view === 'outline' ? 'transparent' : '#009EE4')};
  color: #FFFFFF;
  font-size: 16px;
  padding: ${(props) => (props.$size === 'compact' ? '10px 24px' : '16px 37px')};

  &:hover {
    background: ${(props) => (props.$view === 'outline' ? 'rgba(255, 255, 255, 0.15)' : '#0080C1')};
  }
`;