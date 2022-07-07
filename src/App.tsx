import React from 'react';
import Counter from './components/Counter/Counter';
import AddCounter from './components/AddCounter/AddCounter';
import useTypedSelector from './hooks/useTypedSelector';

const App = () => {
  const { counters } = useTypedSelector((state) => state.totalCounters);

  return (
    <div>
      <AddCounter />
      {counters.map((item, index) => (
        <Counter isHide={(index + 1) % 4 === 0 && index !== 0} key={item?.id} />
      ))}
    </div>
  );
};

export default App;
