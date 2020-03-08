import React, {useState, useContext, useEffect} from 'react';
import {
  NativeScrollEvent,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import styled from 'styled-components/native';
import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Tab from '~/Screen/Tab';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

const ProfileTabContainer = styled.View`
  flex-direction: row;
  background-color: #feffff;
`;

const FeedContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImageContainer = styled.TouchableHighlight`
  background: #feffff;
  padding: 1px;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Profile = ({navigation}: Props) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const imageWidth = Dimensions.get('window').width / 3;
  const tabs = [
    require('~/Assets/Images/ic_grid_image_focus.png'),
    require('~/Assets/Images/ic_tab_image.png'),
  ];

  useEffect(() => {
    setFeedList(getMyFeed(24));
  }, []);

  const isBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
  };

  return (
    <ScrollView
      stickyHeaderIndices={[2]}
      onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isBottom(event.nativeEvent)) {
          setFeedList([...feedList, ...getMyFeed(24)]);
        }
      }}>
      <ProfileHeader
        image="http://api.randomuser.me/portraits/women/68.jpg"
        posts={3431}
        follower={6530}
        following={217}
      />
      <ProfileBody
        name="Sara Lambert"
        description="On Friday, April 14, being Good-Friday, i repaired to him in the\nmorning, according to my usual custom on that day, and breakfasted\nwith him"
      />
      <ProfileTabContainer>
        {tabs.map((image: ImageSourcePropType, index: number) => (
          <Tab
            key={`tab-${index}`}
            selected={index === 0}
            imageSource={image}
          />
        ))}
        <FeedContainer>
          {feedList.map((feed: IFeed, index: number) => (
            <ImageContainer
              key={`feed-list-${index}`}
              style={{
                paddingLeft: index % 3 === 0 ? 0 : 1,
                paddingRight: index % 3 === 2 ? 0 : 1,
                width: imageWidth,
              }}>
              <Image
                source={{uri: feed.images[0]}}
                style={{width: imageWidth, height: imageWidth}}
              />
            </ImageContainer>
          ))}
        </FeedContainer>
      </ProfileTabContainer>
    </ScrollView>
  );
};

interface INaviProps {
  navigation: NavigationScreenProp<NavigationState>;
}

Profile.navigationOptions = ({navigation}: INaviProps) => {
  return {
    title: 'profile',
    headerRight: <IconButton iconName="menu" onPress={navigation.openDrawer} />,
  };
};

export default Profile;
