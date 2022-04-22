import { useEffect, useState } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Container from './components/Container/Container';
import Button from './components/Button/Button';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  }

  const stop = () => {
    clearInterval(timer);
    setTimer();
  }

  const reset = () => {
    setTime(0);
    setTimer(null);
  }
  
  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [])

  return (
    <Container>
      <FormattedTime time={time}>{time}</FormattedTime>
      <Button action={start}>start</Button>
      <Button action={stop}>stop</Button>
      <Button action={reset}>reset</Button>
    </Container>
  );
}
export default App;
