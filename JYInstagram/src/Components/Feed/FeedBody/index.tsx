import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import IconButton from '~/Components/IconButton';

const Container = styled.View``;

const ImageContainer = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  width: ${Dimensions.get('window').width}px;
  height: 400px;
`;

const FeedImageIndicatorContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FeedImageIndicator = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: 2px;
`;

const MenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const FeedMenuContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

interface Props {
  id: number;
  images: Array<string>;
}

const FeedBody = ({id, images}: Props) => {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const imageLength = images.length;

  return (
    <Container>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={imageLength > 1}
        onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          setIndicatorIndex(
            e.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
        }}>
        {images.map((image, index) => (
          <ImageContainer key={`FeedImage-${id}-${index}`}>
            <Image
              source={{uri: image as string}}
              style={{width: Dimensions.get('window').width, height: 400}}
            />
          </ImageContainer>
        ))}
      </ScrollView>
      <FeedMenuContainer>
        <MenuContainer>
          <IconButton iconName="favorite" />
          <IconButton iconName="comment" />
          <IconButton iconName="send" />
        </MenuContainer>
        <MenuContainer>
          <FeedImageIndicatorContainer>
            {imageLength > 1 &&
              images.map((image, index) => (
                <FeedImageIndicator
                  key={`FeedImageIndicator-${id}-${index}`}
                  style={{
                    backgroundColor:
                      indicatorIndex >= index && indicatorIndex < index + 1
                        ? '#3796ef'
                        : '#d3d3d3',
                  }}
                />
              ))}
          </FeedImageIndicatorContainer>
        </MenuContainer>
        <MenuContainer style={{justifyContent: 'flex-end'}}>
          <IconButton iconName="bookmark" />
        </MenuContainer>
      </FeedMenuContainer>
    </Container>
  );
};

export default FeedBody;
