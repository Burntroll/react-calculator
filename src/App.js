import Input from './components/Input'
import Button from './components/Button'
import ButtonLarge from './components/Button2';
import AltButton from './components/Button2 copy';

import { Container, Content, Row} from "./styles";

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
          <Button label="AC"/>
          <Button label="+/-"/>
          <Button label="%"/>
          <Button label="÷"/>
        </Row>
        <Row>
          <Button label="7"/>
          <Button label="8"/>
          <Button label="9"/>
          <Button label="X"/>
        </Row>
        <Row>
          <Button label="4"/>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="-"/>
        </Row>
        <Row>
          <Button label="1"/>
          <Button label="2"/>
          <Button label="3"/>
          <Button label="+"/>
        </Row>
        <Row>
          <ButtonLarge label="0"/>
          <Button label=","/>
          <AltButton label="="/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
