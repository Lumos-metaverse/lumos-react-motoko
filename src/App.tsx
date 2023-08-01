import { useEffect, useState } from 'react';
import './App.css';
import { backend } from './declarations/backend';

function App() {
  const [value, setValue] = useState<string | number>();
  const [inputValue, setInputValue] = useState<string | number>();

  const fetchData = async () => {
    try {
      const count = await backend.getData();
      setValue(count.toString());
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    try {
      if (inputValue !== undefined) {
        const myBigInt = BigInt(inputValue);
        await backend.setData(myBigInt);
      }
      await fetchData(); // Fetch the new count
    }
    catch(err){
      console.error(err);
    }
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Fetch the count on page load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        Enter The Value you want to store :-
        <input className="input" onChange={handleChange} value={inputValue} />
      </div>
      <div className="card">
        <button onClick={handleSubmit}>Submit</button>
        <h3>
          Stored value is {value}
        </h3>
      </div>
    </div>
  );
}

export default App;
