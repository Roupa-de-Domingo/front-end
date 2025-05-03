import { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';
import { CircularProgress } from '@mui/material';

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  backgroundColor: string;
  color: string;
  showBorderRadius?: boolean;
  loading?: boolean;
  text: string;
  width?: number | null;
  disabled?: boolean;
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  icon,
  backgroundColor,
  color,
  loading,
  text,
  width,
  showBorderRadius = true,
  disabled,
  ...props
}) => {
  return (
    <Button
      color={color}
      backgroundColor={backgroundColor}
      width={width}
      showBorderRadius={showBorderRadius}
      {...props}
      disabled={disabled}
    >
      {loading && <CircularProgress color="inherit" size={'16px'} />}
      {!loading && icon}
      {!loading && text}
    </Button>
  );
};
