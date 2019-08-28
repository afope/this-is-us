import styled from 'styled-components';

export const ButtonContainer = styled.button `
    text-transform: capitalize;
    font-size: 1rem;
    background: transparent;
    border-color:${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
    border-color:${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
    color: var(--deepIndigo);
  }
  &:focus{
    outline: none;
  }
}
`
