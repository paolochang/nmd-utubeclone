import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ hasError?: Boolean }>`
  border: 2px solid ${(props) => (props.hasError ? "#DC3545" : "none")};
  max-width: 300px;
  margin: 5px 0px;
  height: 1.5rem;
  &:focus {
    border-color: ${(props) => (props.hasError ? "#DC3545" : "none")};
  }
`;

interface IErrorMessageProp {
  message: string | null;
}

export const ErrorMessage: React.FC<IErrorMessageProp> = ({ message }) => {
  return (
    <div>
      <span style={{ color: "#DC3545", fontWeight: 600 }}>{message}</span>
    </div>
  );
};

export const Button = styled.button`
  max-width: 308px;
  margin: 5px 0px;
  height: 1.5rem;
`;
