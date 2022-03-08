import styled from "styled-components";
import {SearchCard} from "../../styles/Styled";


export const StyledShowCard = styled(SearchCard)`
  .btns{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    a{
      text-decoration-color: black;
      color: black;
      &:hover{
        text-decoration-color: blue;
        color: blue;
      }
    }
    button{
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        cursor: pointer;
      }
    }
  }  
`;
