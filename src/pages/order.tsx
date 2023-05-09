import { MainContainer } from '@/components/MainContainer';
import { TextField } from '@mui/material';

import styles from '@/styles/Order.module.scss';
import Link from 'next/link';
// import Head from 'next/head';

export default function Order() {
  return (
    <>
      <MainContainer keywords={'оформление заказа'}>
        <section className={styles.order}>
          <div className={styles.section__container}>
            <h2 className={styles.section__title}>Оформление заказа</h2>
            <form action='' className={styles.form}>
              <input type='hidden' name='to' value='some@mail.com' />

              <TextField
                // fullWidth
                // variant='standard'
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
                // error={errors.name ? true : false}
                // helperText={errors.name ? errors.name.message : ' '}
              />
              <TextField
                // fullWidth
                // variant='standard'
                required
                label='Номер телефона'
                type='phone'
                id='phone'
                name='phone'
                placeholder='+7 (999) 000-00-00'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
                // error={errors.name ? true : false}
                // helperText={errors.name ? errors.name.message : ' '}
              />
              <TextField
                // fullWidth
                // variant='standard'
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
                // error={errors.name ? true : false}
                // helperText={errors.name ? errors.name.message : ' '}
              />
              <TextField
                // fullWidth
                // variant='standard'
                label='Дата и время доставки'
                type='text'
                id='datetime'
                name='datetime'
                placeholder='вчера'
                sx={{
                  marginBottom: '10px',
                  width: '400px',
                  alignSelf: 'center',
                }}
                // error={errors.name ? true : false}
                // helperText={errors.name ? errors.name.message : ' '}
              />
              <TextField
                // fullWidth
                // variant='standard'
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
                // error={errors.name ? true : false}
                // helperText={errors.name ? errors.name.message : ' '}
              />
              <TextField
                // fullWidth
                // variant='standard'
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
                // error={errors.name ? true : false}
                // helperText={errors.name ? errors.name.message : ' '}
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
