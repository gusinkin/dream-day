import { useState } from 'react';

import MaskedInput from 'react-text-mask';
import { TextField } from '@mui/material';

interface CustomPhonePickerProps {
  onError: (err: string) => void;
}

export const CustomPhonePicker = (props: CustomPhonePickerProps) => {
  const { onError } = props;
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    if (event.target.value.includes('_')) {
      setError('Пожалуйста, введите номер');
      onError('error');
    } else {
      setError('');
      onError('');
    }
  };

  return (
    <MaskedInput
      mask={[
        '+',
        '7',
        '(',
        /[3-48-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      value={phone}
      onChange={handleChange}
      render={(textMaskRef, props) => (
        <TextField
          {...props}
          required
          label='Номер телефона'
          type='phone'
          id='phone'
          name='phone'
          error={!!error}
          helperText={error}
          sx={{
            marginBottom: '10px',
            width: '400px',
            alignSelf: 'center',
          }}
          inputRef={textMaskRef}
        />
      )}
    />
  );
};
