import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './button.module.scss';

type IButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<IButtonProps> = ({ type, children, ...props }) => (
  <button type={type === 'submit' ? 'submit' : 'button'} className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
