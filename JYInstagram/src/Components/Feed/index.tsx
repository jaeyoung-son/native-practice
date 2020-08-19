import React from 'react';
import styled from 'styled-components/native';

import IconButton from '~/Components/IconButton';
import FeedBody from './FeedBody';

const Container = styled.View`
  padding: 8px 0px;
`;

const FeedHeader = styled.View`
  flex-direction: row;
  padding: 8px 16px;
  justify-content: space-between;
`;

const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = styled.Image`
  border-radius: 48px;
  border-width: 1px;
  border-color: #d3d3d3;
`;

const UserName = styled.Text`
  font-weight: bold;
  margin-left: 8px;
`;

const FeedFooter = styled.View`
  padding: 0px 8px;
`;

const Description = styled.Text``;

interface Props {
  id: number;
  name: string;
  photo: string;
  description: string;
  images: Array<string>;
}

const Feed = ({id, name, photo, description, images}: Props) => {
  return (
    <Container>
      <FeedHeader>
        <ProfileContainer>
          <ProfileImage source={{uri: photo}} style={{width: 32, height: 32}} />
          <UserName>{name}</UserName>
        </ProfileContainer>
        <IconButton iconName="dotMenu" />
      </FeedHeader>
      <FeedBody id={id} images={images} />
      <FeedFooter>
        <Description numberOfLines={2}>
          <UserName>{name}</UserName>
          {description}
        </Description>
      </FeedFooter>
    </Container>
  );
};

export default Feed;
