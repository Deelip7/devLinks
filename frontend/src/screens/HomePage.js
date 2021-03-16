import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listLinks } from '../actions/linkActions';
import LinkCard from '../components/LinkCard';
import MetaScraper from '../components/MetaScraper';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const dispatch = useDispatch();

  const linkLists = useSelector((state) => state.linkLists);
  const { loading, links } = linkLists;

  useEffect(() => {
    dispatch(listLinks());
  }, [dispatch]);
  return (
    <div>
      <MetaScraper />
      {loading && <Spinner />}
      {links && <LinkCard link={links} />}
    </div>
  );
};

export default HomePage;
