import styled from '../../types/styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Repository = styled.div`
  background: #FFF;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  margin-top: 50px;
  width: 250px;

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;

    button {
      align-self: flex-end;
      background: #ff4c4c;
      border: none;
      border-radius: 50%;
      margin-right: -10px;
      margin-top: -10px;
      padding: 4px 6px;

      &:hover {
        background: #ea4444;
      }

      i {
        color: #FFF;
      }
    }

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      color: #666;
      font-size 14px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      i {
        margin-right: 10px;
        text-align: center;
        width: 16px;
      }

      small {
        color: #999;
        font-size: 12px;
        font-style: italic;
        font-weight normal;
      }

      &:nth-child(2n - 1) {
        background: #F5F5F5;
      }
    }
  }
`;
