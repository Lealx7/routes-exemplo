import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <input
        placeholder="Buscar"
        type="text"
        name="text"
        className="input"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
  width: 100%;
  max-width: 100%;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid #F1F1F1;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
}

.input:hover {
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

.input:active {
  transform: scale(0.95);
}

.input:focus {
  border: 2px solid grey;
}
`;

export default Input;
