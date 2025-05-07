import React, { ReactNode } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { InputAdornment } from '@mui/material';
import { InputContainer } from './styles';
import { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface InputSelectProps {
  label: string;
  value: string | number | undefined;
  onChange: (event: SelectChangeEvent<string | number>) => void;
  options: string[] | number[] | any[];
  justifyContent: string;
  arrowDown?: boolean;
  icon?: ReactNode;
  borderStyleNone?: boolean;
  width?: string | number;
}

export const InputSelect: React.FC<InputSelectProps> = ({
  label,
  value,
  onChange,
  options,
  justifyContent,
  arrowDown,
  icon,
  borderStyleNone,
  width,
}) => {
  return (
    <InputContainer justifyContent={justifyContent}>
      <FormControl variant="outlined" sx={{ width: width }}>
        <InputLabel
          sx={{
            color: '#000000',
            '&.Mui-focused': {
              color: '#000000',
            },
          }}
        >
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          label={label}
          endAdornment={
            icon && <InputAdornment position="start">{icon}</InputAdornment>
          }
          IconComponent={arrowDown ? ExpandMoreIcon : undefined}
          sx={{
            color: '#000000',
            ...(borderStyleNone
              ? {}
              : {
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#000000',
                    borderWidth: '3px',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#000000',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '3px',
                    borderColor: '#000000',
                  },
                }),
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 160,
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              sx={{
                color: '#000000',
              }}
              key={option.description}
              value={option.description}
            >
              {option.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </InputContainer>
  );
};
