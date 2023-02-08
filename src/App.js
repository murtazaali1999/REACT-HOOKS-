import logo from './logo.svg';
import './App.css';
import {
  useState, useReducer, useEffect,
  useRef, useLayoutEffect, useImperativeHandle,
  useContext, useMemo, useCallback, createContext
} from "react";

import Child from './Components/Child';
import Show from './Components/Show';

export const AppContext = createContext(null);

function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const childButtonRef = useRef(null);

  useEffect(() => {
    console.log("After")
  }, [])/* after page rendered */
  /* lifecycle slight difference */

  useLayoutEffect(() => {
    console.log("Before");
  }, [])/* before page rendered  */



  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, countTwo: state.countTwo + 2 }
      case "SHOW":
        return { count: state.count, countTwo: state.countTwo }
      default:
        return { count: 0, countTwo: 0 }
    }
  }/* reducer function is always above the decleration of reducer */

  const [state, dispatch] = useReducer(reducer, {
    count: 0, countTwo: 2
  });/* use when multiple state change occurs in a single functions */


  const updateCounter = () => {
    {
      setCounter(counter + 1);
    }
  }

  const changer = () => {
    console.log(counterRef.current.value);
    counterRef.current.value = 0;
  }

  return (
    <div className="App">
      <h1>State Counter</h1>
      <h1>Counter={counter}</h1>
      <button onClick={updateCounter}>Click Me</button>
      <hr />

      <h1>Reducer Counter</h1>{/* To do things together, use UseReducer */}
      <h1>Count-1={state.count}</h1>
      <h1>Count-1={state.countTwo}</h1>
      <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Inc Count 1 & 2</button>
      <hr />

      <h1>Ref Counter</h1>

      <input type="number" placeholder='0' ref={counterRef} />
      <button onClick={changer}>Sorta</button>

      <hr />

      <h1>UseLayoutEffect</h1>{/* similar to useeffect */}
      <hr />
      <h1>UseImperitiveHandler</h1>{/* to change ref or state, from the parent component or of outside */}
      {/* Handle state from parent to child */}

      <button onClick={() => { childButtonRef.current.alteration() }}>Parent Button</button>

      <Child ref={childButtonRef} />
      <hr />

      <h1>UseContext</h1>

      <AppContext.Provider value={{ counter, updateCounter }}>
        <Show />
      </AppContext.Provider>

      <h1>USE-MEMO</h1>
      <p>use memo is used to perform heavy calc.
        memoize(store the results), this is used
        for better performance, lil similar to
        useEffect(syntax)
      </p>

    </div>
  );
}

export default App;
