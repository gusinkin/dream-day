import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface CustomDateTimePickerProps {
  onError: (err: string) => void;
}

export const CustomDateTimePicker = (props: CustomDateTimePickerProps) => {
  const { onError } = props;
  const today = dayjs();
  const hours = dayjs().hour();

  const initialDate =
    hours < 8
      ? today.hour(12).minute(0)
      : hours > 18
      ? today
          .date(today.date() + 1)
          .hour(8)
          .minute(0)
      : today.hour(today.hour() + 4).minute(today.minute() - (today.minute() % 15));

  const [dateTime, setDateTime] = useState<Dayjs>(initialDate);
  const [dateTimeError, setDateTimeError] = useState<string>('');

  const maxDate = today.month(dayjs().month() + 1);

  const isToday =
    dayjs(dateTime).date() === today.date() && dayjs(dateTime).month() === today.month();

  const minTime = isToday ? today.hour(today.hour() + 2) : dayjs(dateTime).hour(0).minute(0);

  const onSelectDateTime = (e: dayjs.Dayjs | null) => {
    console.log(e);
    if (e) {
      setDateTime(e);
    }
  };

  const onDateTimeError = (error: string | null) => {
    switch (error) {
      case null: {
        setDateTimeError('');
        onError('');
        break;
      }
      case 'minutesStep': {
        // приделать debounce
        setDateTimeError('Пожалуйста, укажите время, кратное 15 минутам');
        onError('error');
        break;
      }
      case 'minTime': {
        setDateTimeError('Пожалуйста, выберите более позднее время');
        onError('error');
        break;
      }
      case 'maxTime': {
        setDateTimeError('Пожалуйста, выберите более раннее время');
        onError('error');
        break;
      }
      case 'disablePast': {
        setDateTimeError('Пожалуйста, выберите предстоящую дату');
        onError('error');
        break;
      }
      case 'maxDate': {
        setDateTimeError('Пожалуйста, выберите более близкую дату');
        onError('error');
        break;
      }
      case 'invalidDate': {
        setDateTimeError('Пожалуйста, выберите действительную дату');
        onError('error');
        break;
      }
      default:
        setDateTimeError(error);
        onError('error');
    }
  };

  return (
    <DateTimePicker
      label='Дата и время доставки'
      ampm={false}
      disablePast={true}
      maxDate={maxDate}
      minTime={minTime}
      // maxTime={maxTime}
      value={dateTime}
      onChange={onSelectDateTime}
      onError={onDateTimeError}
      views={['day', 'hours', 'minutes']}
      minutesStep={15}
      sx={{
        marginBottom: '10px',
        width: '400px',
        alignSelf: 'center',
      }}
      slotProps={{
        textField: {
          helperText: dateTimeError,
          name: 'dateTime',
        },
      }}
    />
  );
};
