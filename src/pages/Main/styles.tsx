import styled, { IProps} from '../../types/styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;

  input {
    background: #FFF;
    border: ${(props: IProps) => (props.withError ? '2px solid #F00' : 0)};
    border-radius: 3px;
    color: #444;
    flex: 1;
    font-size: 18px;
    height: 55px;
    padding: 0 20px;
  }

  button {
    background: #63F5B8;
    border: 0;
    border-radius: 3px;
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    height: 55px;
    margin-left: 10px;
    padding: 0 20px;
    width: 80px;

    &:hover {
      background: #52D89F;
    }
  }
`;
