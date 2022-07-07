import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './counter.module.scss';
import Button from '../Button/Button';
import { decrement, increment } from '../../store/reducers/totalCounters';
import useTypedSelector from '../../hooks/useTypedSelector';

interface ICounterProps {
  isHide: boolean;
}

const Counter: FC<ICounterProps> = ({ isHide }) => {
  const { total } = useTypedSelector((state) => state.totalCounters);
  const [counter, setCounter] = useState(total);
  const dispatch = useDispatch();

  const incrementTotal = () => {
    setCounter((prev) => prev + 1);
    dispatch(increment());
  };

  const decrementTotal = () => {
    setCounter((prev) => prev - 1);
    dispatch(decrement());
  };

  useEffect(() => {
    if (isHide) {
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
        dispatch(increment());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    return () => {}; // Линтер ругается если ничего не возращать
  }, []);

  return (
    <div className={styles.counter}>
      {counter}
      {!isHide && (
        <div className={styles.buttons}>
          <Button onClick={incrementTotal}>+</Button>
          <Button onClick={decrementTotal}>-</Button>
        </div>
      )}
    </div>
  );
};

export default Counter;
