import React, {useContext, useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';
import styled from 'styled-components/native';

import StoryList from './StoryList';

const HeaderRightContainer = styled.View`
  flex-direction: row;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const MyFeed = ({navigation}: any) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const [storyList, setStoryList] = useState<Array<IFeed>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFeedList(getMyFeed());
    setStoryList(getMyFeed());
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconButton iconName="camera" />,
      headerRight: () => (
        <HeaderRightContainer>
          <IconButton iconName="live" />
          <IconButton iconName="send" />
        </HeaderRightContainer>
      ),
    });
  }, []);

  return (
    <FlatList
      data={feedList}
      keyExtractor={(item, index) => {
        return `myfeed-${index}`;
      }}
      showsVerticalScrollIndicator={false}
      onRefresh={() => {
        setLoading(true);
        setTimeout(() => {
          setFeedList(getMyFeed());
          setStoryList(getMyFeed());
          setLoading(false);
        }, 2000);
      }}
      onEndReached={() => {
        setFeedList([...feedList, ...getMyFeed()]);
      }}
      onEndReachedThreshold={0.5}
      refreshing={loading}
      ListHeaderComponent={<StoryList storyList={storyList} />}
      renderItem={({item, index}) => (
        <Feed
          id={index}
          name={item.name}
          photo={item.photo}
          description={item.description}
          images={item.images}
        />
      )}
    />
  );
};
MyFeed.navigationOptions = {
  title: 'SNS App',
  headerLeft: <IconButton iconName="camera" />,
  headerRight: (
    <>
      <IconButton iconName="live" />
      <IconButton iconName="send" />
    </>
  ),
};

export default MyFeed;
