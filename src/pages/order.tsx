import { useContext, useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { Box, Modal, TextField, Typography } from '@mui/material';

import { cartContext, CartProviderValue } from '@/context/CartProvider';
import { ComplexProduct } from '@/dataBase/complexProducts';
import { MainContainer } from '@/components/MainContainer';
import { CustomDateTimePicker } from '@/components/DateTimePicker';
import { CustomPhonePicker } from '@/components/PhonePicker';
import styles from '@/styles/Order.module.scss';
import router from 'next/router';

export default function Order() {
  const form = useRef(null);
  const [name, setName] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);
  const [dateTimeValid, setDateTimeValid] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePhoneError = (err: string) => {
    if (err.length) {
      setPhoneValid(false);
      console.log('set phonevalid false');
    } else {
      setPhoneValid(true);
      console.log('set phonevalid true');
    }
  };

  const handleDateTimeError = (err: string) => {
    if (err.length) {
      setDateTimeValid(false);
      console.log('set DateTime false');
    } else {
      setDateTimeValid(true);
      console.log('set DateTime true');
    }
  };

  useEffect(() => {
    if (name.length && phoneValid && dateTimeValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, phoneValid, dateTimeValid]);

  const { cart, countTotal, clearCart, openSnackbar } = useContext(
    cartContext
  ) as CartProviderValue;
  const amount = countTotal(cart);

  const beautifyCart = (cart: ComplexProduct[]) => {
    let output = '\n';
    cart.forEach((item, index) => {
      const { name, price, quantity } = item;
      output += `${index + 1}  |  ${name}  |  ${price}\u00A0\u20bd  |  ${quantity} шт. \n`;
    });
    return output;
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData(form.current ?? undefined);

    const template = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      dateTime: formData.get('dateTime'),
      email: formData.get('email'),
      comment: formData.get('comment'),
      cart: beautifyCart(cart),
      total: `${amount.toString()}\u00A0\u20bd`,
    };

    emailjs.send('service_njfh7ml', 'template_3wn7izp', template, 'dMZ5_POBysMOTiTGb').then(
      () => {
        clearCart();
        setModalOpen(true);
      },
      (error) => {
        console.log('ПРОИЗОШЛА ОШИБКА', error);
        openSnackbar('Произошла ошибка, попробуйте снова');
      }
    );
    console.log('template', template);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <MainContainer keywords={'оформление заказа'}>
      <>
        <div className={styles.shortpage__container}>
          <h2 className={styles.section__title}>Оформление заказа</h2>
          <form action='' className={styles.form} ref={form} onSubmit={sendEmail}>
            <TextField
              required
              label='Ваше имя'
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                marginBottom: '10px',
                width: '100%',
                // // color: 'error',
                // // input: { color: 'red' },
                // InputProps: {
                //   color: 'secondary',
                // },
              }}
            />
            <CustomPhonePicker onError={handlePhoneError} />
            <TextField
              label='Адрес доставки'
              type='text'
              id='address'
              name='address'
              sx={{
                marginBottom: '10px',
                width: '100%',
              }}
            />
            <CustomDateTimePicker onError={handleDateTimeError} />
            <TextField
              label='E-mail'
              type='email'
              id='email'
              name='email'
              sx={{
                marginBottom: '10px',
                width: '100%',
              }}
            />
            <TextField
              label='Комментарий к заказу'
              multiline
              type='text'
              id='comment'
              name='comment'
              sx={{
                marginBottom: '25px',
                width: '100%',
              }}
            />

            <div className='form__buttons'>
              <input
                type='submit'
                disabled={disabled}
                value='Заказать'
                className='button button--yellow'
              />
              {/* <br />
                <br />
                <input type='reset' value='Очистить' className='button button--transparent' /> */}
            </div>
          </form>
          <Modal open={modalOpen}>
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Заказ принят! Мы скоро свяжемся с Вами для подтверждения
              </Typography>
              <button
                className={styles.button}
                onClick={() => {
                  router.push('/');
                }}
              >
                Вернуться на главную
              </button>
            </Box>
          </Modal>
        </div>
      </>
    </MainContainer>
  );
}
