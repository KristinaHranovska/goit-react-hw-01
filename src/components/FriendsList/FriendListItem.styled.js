import styled from "styled-components";

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
border: 2px solid black;
border-radius: 10px;
background-color: white;
padding: 10px;
`;

export const Avatar = styled.img`
width: 100px;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: 700;
`;

export const Status = styled.p`
font-size: 16px;
font-weight: 500;
&.online {
    color: green;
  }
&.offline {
    color: red;
  }
`;