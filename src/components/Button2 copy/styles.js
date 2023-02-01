import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 10px;
    border: gray solid 1.2px;
    background-color: #1CA1BC;
    height: 3.2rem;
    width: 3.2rem;
    margin: .3rem;
    border-radius: 50%;
    color: #fefefe;
    font-weight: bold;
    font-size: 1.1rem;

    &:hover {
        filter: brightness(1.2);
    }
`