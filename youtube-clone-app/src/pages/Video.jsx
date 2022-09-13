import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;

`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text}
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text}
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  ${({theme}) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  cursor: pointer;
  padding: 10px 20px;
`;

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/t-amk-VJQXo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,958,123 views Jun 22, 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOffAltIcon/> 123
                        </Button>
                        <Button>
                            <ThumbDownOffAltIcon/>Dislike
                        </Button>
                        <Button>
                            <ReplyIcon/>Share
                        </Button>
                        <Button>
                            <SaveAltIcon/>Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2022%29.jpg/1200px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2022%29.jpg"/>
                        <ChannelDetail>
                            <ChannelName>Dana Dev</ChannelName>
                            <ChannelCounter>200K subscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                                quasi.</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRİBE</Subscribe>
                </Channel>
                <Hr/>
                <Comments/>
            </Content>
            <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation>
        </Container>

    )
}

export default Video;
