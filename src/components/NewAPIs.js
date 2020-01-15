import React, { /* useState, */ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Example = props => {
  const state = useSelector(state => state.newAPI);
  const dispatch = useDispatch();
  console.log(state);
  //const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${state.count} times`;
  });
  return (
    <div>
      <p>
        Props: {JSON.stringify(props)}, Store Name: {state.name}
      </p>
      <p>Count: {state.count}</p>
      <button
        onClick={() =>
          dispatch({
            type: 'changeState',
            payload: {
              newAPI: {
                ...state,
                count: state.count + 1
              }
            }
          })
        }
      >
        Click me
      </button>
    </div>
  );
};

export default Example;
