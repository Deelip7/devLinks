import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listLinks } from '../actions/linkActions';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const dispatch = useDispatch();

  const linkLists = useSelector((state) => state.linkLists);
  const { loading, links } = linkLists;

  useEffect(() => {
    dispatch(listLinks());
  }, [dispatch]);
  return (
    <>
      {loading && <Spinner />}
      {/* {loading ? null : (
        <div>
          {links.map((el) => {
            return <div>{el.title}</div>;
          })}
        </div>
      )} */}
    </>
  );
};

export default HomePage;
