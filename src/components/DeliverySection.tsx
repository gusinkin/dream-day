import styles from '@/styles/DeliverySection.module.scss';

export const DeliverySection = () => {
  return (
    <section className={`${styles.section} ${styles.deliverySection}`}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>Доставка и оплата</h2>
        <div className={styles.deliveryContent}>
          <div className={styles.deliveryList}>
            <div className={styles.deliveryItem}>
              <div className={styles.deliveryItem__image}>
                <div className={styles.deliveryItem__circle}>
                  <div className={styles.deliveryItem__pic}>
                    <img
                      className={styles.deliveryItem__img}
                      src={`../../images/deliveryPayment/payment.png`}
                      alt='оплата'
                    />
                  </div>
                </div>
              </div>
              <div className={styles.deliveryItem__info}>
                <div className={styles.deliveryItem__text}>
                  Оплата возможна как <b>наличными</b> при получении товара, так и{' '}
                  <b>банковским переводом.</b> При составлении заказа – обязательная предоплата{' '}
                  <b>30%</b> от стоимости заказа.
                </div>
              </div>
            </div>
            <div className={styles.deliveryItem}>
              <div className={styles.deliveryItem__image}>
                <div className={styles.deliveryItem__circle}>
                  <div className={styles.deliveryItem__pic}>
                    <img
                      className={styles.deliveryItem__img}
                      src={`../../images/deliveryPayment/delivery.png`}
                      alt='доставка'
                    />
                  </div>
                </div>
              </div>
              <div className={styles.deliveryItem__info}>
                <div className={styles.deliveryItem__text}>
                  Доставка курьером возможна в любое удобное время 24/7. При заказе от{' '}
                  <b>3000 руб.</b>
                  доставка <b>бесплатна.</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
