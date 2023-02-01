import { ButtonContainer } from "./styles";

const ButtonLarge = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonLarge;
  