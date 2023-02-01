import { ButtonContainer } from "./styles";

const AltButton = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default AltButton;
  