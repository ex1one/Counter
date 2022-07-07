import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addCounter, deleteCounter } from '../../store/reducers/totalCounters';

const AddCounter = () => {
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch(addCounter());
  }, []);

  const remove = useCallback(() => {
    dispatch(deleteCounter());
  }, []);

  return (
    <>
      <Button onClick={add}>Добавить счётчик</Button>
      <Button onClick={remove}>Удалить счётчик счётчик</Button>
    </>
  );
};

export default AddCounter;
