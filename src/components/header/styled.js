import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    width: 12em;
    padding: 8px 8px;
    margin-bottom: 1em;
  }
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 80%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }
  button {
    background-color: #225ed8;
    height: 44px;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
