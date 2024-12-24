import { styled } from "styled-components";


interface Props {
  onClick: () => void;
}

const BtnStyle = styled.button`
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );
  color: black;
  font-size: 15px;
  font-weight: bold;
`;

const Button = ( { onClick }: Props ) => {
  return (
    <div style={{ flex: 1 }} className="d-flex justify-content-end">
        <button
          className="btn btn-primary m-2 pt-2 pb-2 pe-4  ps-4 border"
          onClick={onClick}
        >
          Run
        </button>
        <BtnStyle
          className="btn m-2 pt-2 pb-2 pe-4  ps-4 border rounded"
          onClick={onClick}
        >
          Time
        </BtnStyle>
      </div>
  )
}

export default Button