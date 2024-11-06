import { useDebounce } from '@/hooks/useDebounce';
import { SxProps, TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

interface InputWithDebounceProps {
  value: string;
  sx?: SxProps;
  variant?: 'standard' | 'outlined' | 'filled';
  size?: 'small' | 'medium';
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
  debounceTime?: number;
}

export const InputWithDebounce: FC<InputWithDebounceProps> = ({
  value,
  sx,
  variant,
  size,
  className,
  placeholder,
  onChange,
  debounceTime = 1000,
}: InputWithDebounceProps) => {
  const [data, setData] = useState<string>(value);
  const debouncedChange = useDebounce(data, debounceTime);

  useEffect(() => {
    onChange(debouncedChange);
  }, [debouncedChange, onChange]);

  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <TextField
      sx={sx}
      variant={variant}
      size={size}
      className={className}
      placeholder={placeholder}
      value={data}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
      }}
      fullWidth
    />
  );
};