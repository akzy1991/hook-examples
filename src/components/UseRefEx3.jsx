import { useState } from 'react';
import Todo from './Todo';

const UseRefEx3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        onClick={() => setShowTodo(!showTodo)}
        className='btn btn-primary'
      >
        Toggle TODO
      </button>
    </div>
  );
};

export default UseRefEx3;
