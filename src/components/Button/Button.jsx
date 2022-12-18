import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <StyledButton type="button" onClick={() => onClick()}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = { children: PropTypes.string };
