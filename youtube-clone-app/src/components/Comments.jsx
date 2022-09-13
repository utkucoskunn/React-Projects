import React from "react";
import styled from "styled-components";
import Comment from "./Comment";


const Container = styled.div`

`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;

`;


const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2022%29.jpg/1200px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2022%29.jpg"/>
                <Input placeholder='Add a comment...'/>
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Container>
    )
}

export default Comments;