import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [Principle, setPrinciple] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Year, setYear] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Principle);
    console.log(Rate);
    console.log(Year);
    let result = Principle*Year*Rate/100;
    console.log(result);
    setInterest(result);
  }
  function clearValues(){
    setPrinciple(0);
    setRate(0);
    setInterest(0);
    setYear(0);
  }
  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{ backgroundColor: 'black', height: '75vh' }}>
      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest</h3>
        <p>Calculate your interest</p>
        <div style={{ height: '110px' }} className=' flex-column mt-8 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>{'\u20B9'}{Interest}</h1>
          <p>
            Total Simple Interest
          </p>
        </div>
        <form action='' className='mt-5' onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Principal Amount" variant="outlined" className='w-100' onChange={(e) => setPrinciple(e.target.value)} value={Principle} />
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Rate of Interest (%)" variant="outlined" className='w-100' onChange={(e) => setRate(e.target.value)} value={Rate}/>
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label=" Number of Year" variant="outlined" className='w-100' onChange={(e) => setYear(e.target.value)} value={Year} />
          </div>
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button style={{ height: '50px', width: '200px' }} variant="contained" className='bg-success' type='submit'>CALCULATE</Button>
              <Button variant="outlined" style={{ height: '50px', width: '200px', color: 'blue' }} onClick={clearValues}>RESET</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
