import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
