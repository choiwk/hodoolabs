import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../ReviewSlider/Review.module.scss';
import userData from '../../assets/data/userData';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import 'swiper/css';

interface IuserData {
  id: string | number;
  name: string;
  profile: string;
  review: string;
}
function Review() {
  const [user, setUser] = useState<IuserData[]>(userData);

  return (
    <>
      <section className={styles.review}>
        <div className={styles.contentsLayout}>
          <div className={styles.slideContainer}>
            <Swiper
              autoplay={{ delay: 3000 }}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {user.map((userData, index) => (
                <SwiperSlide className={styles.reviewLayout} key={index}>
                  <span className={styles.userName}>{userData.name}</span>
                  <span className={styles.userReview}>{userData.review}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
