import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color:${({theme}) => theme.text}
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
`;

const Comment = () => {
    return (
        <Container>
            <Avatar
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2022%29.jpg/1200px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2022%29.jpg"/>
            <Details>
                <Name>Vladimir Putin <Date>1 day ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet expedita id neque quae
                    sunt.</Text>
            </Details>
        </Container>
    )
}

export default Comment;