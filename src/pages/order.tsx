import { MainContainer } from '@/components/MainContainer';
import { TextField } from '@mui/material';

import styles from '@/styles/Order.module.scss';
import Link from 'next/link';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useIMask } from 'react-imask';

export default function Order() {
  const initialDate = dayjs()
    .hour(dayjs().hour() + 2)
    .minute(dayjs().minute() - (dayjs().minute() % 15));

  const [dateTime, setDateTime] = useState<Dayjs>(initialDate);
  const [dateTimeError, setDateTimeError] = useState<string>('');

  const maxDate = dayjs().month(dayjs().month() + 1);

  const isToday =
    dayjs(initialDate).date() === dayjs(dateTime).date() &&
    dayjs(initialDate).month() === dayjs(dateTime).month();

  const minTime = isToday
    ? dayjs(initialDate).minute(dayjs(initialDate).minute() - 1)
    : dayjs(dateTime).hour(7).minute(0);

  const maxTime = dayjs(dateTime).hour(23).minute(0);
  // any
  const onSelectDateTime = (event: any) => {
    setDateTime(event.$d);
  };

  const onDateTimeError = (error: string | null) => {
    switch (error) {
      case null: {
        setDateTimeError('');
        break;
      }
      case 'minutesStep': {
        // приделать debounce
        setDateTimeError('Пожалуйста, укажите время, кратное 15 минутам');
        break;
      }
      case 'minTime': {
        setDateTimeError('Пожалуйста, выберите более позднее время');
        break;
      }
      case 'maxTime': {
        setDateTimeError('Пожалуйста, выберите более раннее время');
        break;
      }
      case 'disablePast': {
        setDateTimeError('Пожалуйста, выберите предстоящую дату');
        break;
      }
      case 'maxDate': {
        setDateTimeError('Пожалуйста, выберите более близкую дату');
        break;
      }
      case 'invalidDate': {
        setDateTimeError('Пожалуйста, выберите действительную дату');
        break;
      }
      default:
        setDateTimeError(error);
    }
  };

  // const [phoneNumber, setPhoneNumber] = useState<string>('');
  // const onPhoneComplete = (value: string) => {
  //   setPhoneNumber(value);
  // };

  // const {
  //   ref: phoneRef,
  //   // maskRef,
  //   value: phoneValue,
  //   setValue: setPhoneValue,
  //   // unmaskedValue,
  //   // setUnmaskedValue,
  //   // typedValue,
  //   // setTypedValue,
  // } = useIMask(
  //   {
  //     // mask: '{+7}(000)000-00-00',
  //     mask: Date,
  //   },
  //   { onComplete: onPhoneComplete }
  // );

  return (
    <>
      <MainContainer keywords={'оформление заказа'}>
        <section className={styles.order}>
          <div className={styles.section__container}>
            <h2 className={styles.section__title}>Оформление заказа</h2>
            <form action='' className={styles.form}>
              <input type='hidden' name='to' value='some@mail.com' />

              <TextField
                required
                label='Ваше имя'
                type='text'
                id='name'
                name='name'
                placeholder='Александр'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
              />
              <TextField
                required
                label='Номер телефона'
                type='phone'
                // id='phone'
                // name='phone'
                // placeholder='+7 (999) 000-00-00'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
                // ref={phoneRef}
                // value={phoneValue}
                // onChange={setPhoneValue}
              />
              <TextField
                label='Адрес доставки'
                type='text'
                id='address'
                name='address'
                placeholder='ул. Пушкина дом Колотушкина'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
              />
              <DateTimePicker
                label='Дата и время доставки'
                ampm={false}
                disablePast={true}
                maxDate={maxDate}
                minTime={minTime}
                maxTime={maxTime}
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
                  },
                }}
              />
              <TextField
                label='E-mail'
                type='email'
                id='email'
                name='email'
                placeholder='@'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
              />
              <TextField
                label='Комментарий к заказу'
                multiline
                type='text'
                id='comment'
                name='comment'
                placeholder='Нужны обязательно с пупырышками'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
              />
              <div className='form__controls'>
                <label className='radio'>
                  <input
                    type='radio'
                    name='payment method'
                    value='cash'
                    className='radio__elem'
                  />
                  <div className='radio__visible'></div>
                  <div className='radio__title'>Оплата наличными</div>
                </label>
                <label className='radio'>
                  <input
                    type='radio'
                    name='payment method'
                    value='card'
                    className='radio__elem'
                  />
                  <div className='radio__visible'></div>
                  <div className='radio__title'>Оплата картой</div>
                </label>
              </div>
              <div className='form__controls'>
                <label className='radio radio--checkbox'>
                  <input
                    type='checkbox'
                    name='no callback'
                    className='radio__elem'
                  />
                  <div className='radio__visible'></div>
                  <div className='radio__title'>Не перезванивать</div>
                </label>
              </div>
              <div className='form__buttons'>
                <input
                  type='submit'
                  value='Заказать'
                  className='button button--yellow'
                />
                <input
                  type='reset'
                  value='Очистить'
                  className='button button--transparent'
                />
              </div>
            </form>
          </div>
        </section>
      </MainContainer>
    </>
  );
}
