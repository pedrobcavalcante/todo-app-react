import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onEnter?: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  onEnter,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };

  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyPress={handleKeyPress}
    />
  );
};

export default Input;
