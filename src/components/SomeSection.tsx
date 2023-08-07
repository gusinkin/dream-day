import styles from '@/styles/SomeSection.module.scss';

export const SomeSection = () => {
  return (
    <section className={`${styles.section} ${styles.someSection}`}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>О нас</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, similique ea voluptates cum
          accusamus molestias officiis magnam totam possimus modi et quasi nobis odit accusantium
          provident quia blanditiis eveniet distinctio incidunt atque ab sed pariatur, tenetur amet!
          Facilis cupiditate voluptatem et ducimus, amet sit, adipisci accusamus, atque similique
          quasi veritatis! Aspernatur, placeat iusto obcaecati blanditiis, eum est voluptatum
          deserunt officiis mollitia, inventore incidunt maiores qui sunt veritatis! Obcaecati,
          harum commodi at, laudantium veniam dolores dolor vitae perspiciatis animi, dolorum
          voluptatum tempora accusantium et est ducimus repellat natus consequuntur.
        </p>
      </div>
    </section>
  );
};
