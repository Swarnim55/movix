import React, { useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import ContentWrapper from '../contentWrapper/ContentWrapper';
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png';
import CircleRating from '../circleRating/CircleRating';

import './styles.scss';

const Carousel = ({ data, loading }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {};

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock">
          <div className="textBlock">
            <div className="title"></div>
            <div className="date"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation('left')}
        />

        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation('left')}
        />

        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              const posterURL = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div key={item.id} className="carouselItem">
                  <div className="posterBlock">
                    <Img src={posterURL} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_Date).format('MMM D, YYYY')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
