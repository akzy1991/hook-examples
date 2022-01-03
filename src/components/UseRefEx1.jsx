import { useRef } from 'react';

const UseRefEx1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'hello';
    inputRef.current.style.backgroundColor = 'red';
    paraRef.current.innerText = 'ze button is clicked';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          ref={inputRef}
          className='form-control mb-2'
          type='text'
          id='name'
        />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          hello
        </p>
      </form>
    </div>
  );
};

export default UseRefEx1;
