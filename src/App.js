import Input from './components/Input'
import Button from './components/Button'
import ButtonLarge from './components/Button2';
import AltButton from './components/Button2 copy';

import { Container, Content, Row} from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber(null)
    setOperation(null)
  };

  const handleNumberClick = (number) => {
    setCurrentNumber(currentNumber === '0' ? number : currentNumber + number)
  }

  const handleSumNumbers = () => {
    if (firstNumber === null) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const result = firstNumber + Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === null) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = firstNumber - Number(currentNumber);
      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
    }
  }

  const handleMultiplyNumbers = () => {
    if (firstNumber === null) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber('0')
      setOperation('X')
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result))
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === null) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('÷')
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== null && operation !== null && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'X':
          handleMultiplyNumbers();
          break;
        case '÷':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleChangeSigns = () => {
    setCurrentNumber((prev) => {
      return String(Number(prev) * -1);
    });
  };

  const handlePercentage = () => {
    setCurrentNumber(prev => String(prev / 100));
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handleOnClear}/>
          <Button label="+/-" onClick={handleChangeSigns}/>
          <Button label="%" onClick={handlePercentage}/>
          <Button label="÷" onClick={handleDivideNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleNumberClick('7')}/>
          <Button label="8" onClick={() => handleNumberClick('8')}/>
          <Button label="9" onClick={() => handleNumberClick('9')}/>
          <Button label="X" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleNumberClick('4')}/>
          <Button label="5" onClick={() => handleNumberClick('5')}/>
          <Button label="6" onClick={() => handleNumberClick('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleNumberClick('1')}/>
          <Button label="2" onClick={() => handleNumberClick('2')}/>
          <Button label="3" onClick={() => handleNumberClick('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <ButtonLarge label="0" onClick={() => handleNumberClick('0')}/>
          <Button label="." onClick={() => handleNumberClick('.')}/>
          <AltButton label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
