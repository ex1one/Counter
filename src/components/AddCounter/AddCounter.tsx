import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addCounter, deleteCounter } from '../../store/reducers/totalCounters';

const AddCounter = () => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addCounter());
  };

  const remove = () => {
    dispatch(deleteCounter());
  };

  return (
    <>
      <Button onClick={add}>Добавить счётчик</Button>
      <Button onClick={remove}>Удалить счётчик счётчик</Button>
    </>
  );
};

export default AddCounter;
