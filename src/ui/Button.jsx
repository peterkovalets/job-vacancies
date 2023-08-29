import { css, styled } from 'styled-components';

const sizes = {
  medium: css`
    padding: 1rem 1.6rem;
  `,
  small: css`
    padding: 0.6rem 1.2rem;
    font-size: 1.4rem;
  `,
};

const variants = {
  primary: css`
    background-color: var(--color-brand-600);
    border: 2px solid var(--color-brand-700);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  danger: css`
    background-color: var(--color-red-600);
    border: 2px solid var(--color-red-700);

    &:hover {
      background-color: var(--color-red-700);
    }
  `,
};

const Button = styled.button`
  display: inline-block;
  color: var(--color-brand-50);
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  text-decoration: none;

  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant]}
`;

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
};

export default Button;
