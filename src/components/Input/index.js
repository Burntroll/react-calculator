
import { InputContainer } from "./styles";

const Button = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Button;
  