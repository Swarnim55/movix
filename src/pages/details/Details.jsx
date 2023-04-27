import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useSelector } from 'react-redux';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
