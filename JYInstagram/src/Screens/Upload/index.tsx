import React, {useContext, useState, useEffect} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Input from '~/Components/Input';
import ImageFeedLIst from '~/Components/ImageFeedList';
import styled from 'styled-components/native';

const Searchbar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Upload = ({navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const [loadnig, setLoading] = useState(false);

  useEffect(() => {
    setFeedList(getMyFeed(24));
  }, []);

  return (
    <ImageFeedLIst
      feedList={feedList}
      loading={loadnig}
      onRefresh={() => {
        setLoading(true);
        setTimeout(() => {
          setFeedList(getMyFeed(24));
          setLoading(false);
        }, 2000);
      }}
      onEndReached={() => {
        setFeedList([...feedList, ...getMyFeed(24)]);
      }}
      onPRess={() => {
        navigation.navigate('FeedListOnly');
      }}
    />
  );
};

Upload.navigationOptions = {
  title: '사진 업로드',
};

export default Upload;
