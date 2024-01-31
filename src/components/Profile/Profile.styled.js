import styled from "styled-components";

export const Card = styled.div`
width: 350px;
border: 2px solid black;
border-radius: 10px;
box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
background-color: #F3F2F2;
overflow: hidden;
margin: 0 auto;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 0;
`;

export const Avatar = styled.img`
width: 100px;
background-color: #292929;
border: 2px solid black;
border-radius: 50%;
margin-bottom: 10px;
`;

export const UserName = styled.p`
font-weight: 700;
font-size: 20px;
margin-bottom: 5px;
`;

export const UserInfo = styled.p`
color: gray;
`;

export const StatsList = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #DCDCDC;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
border-top: 2px solid black;
&:not(:last-child) {
    border-right: 2px solid black;
  }
width: 100%;
margin: 0 auto;
padding: 10px 0;
`;

export const Label = styled.span`
  color: #3C3C3C;
`;

export const Quantity = styled.span`
font-size: 16px;
font-weight: 700;
`;