import React from 'react';
import {Image} from 'react-native';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import CheckLogin from '~/Screen/CheckLogin';
import Login from '~/Screen/Login';
import PasswordReset from '~/Screen/PasswordReset';
import Signup from '~/Signup';
import MyFeed from '~/Screen/MyFeed';
import Feeds from '~/Screen/Feeds';
import FeedListOnly from '~/Screen/FeedListOnly';
import Upload from '~/Screen/Upload';
import Notification from '~/Screen/Notification';
import Profile from '~/Screen/Profile';
import Drawer from '~/Screen/Drawer';

const LoginNavigator = createStackNavigator({
  Login,
  Signup,
  PasswordReset,
});

const MyFeedTab = createStackNavigator({
  MyFeed,
});

const FeedsTab = createStackNavigator({
  Feeds,
  FeedListOnly,
});

const UploadTab = createStackNavigator({
  Upload,
});

const ProfileTab = createStackNavigator({
  Profile,
});

const MainTabs = createBottomTabNavigator({
  MyFeed: {
    screen: MyFeedTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_home.png')
              : require('~/Assets/Images/Tabs/ic_home_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Feeds: {
    screen: FeedsTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_search.png')
              : require('~/Assets/Images/Tabs/ic_search_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Upload: {
    screen: UploadTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_add.png')
              : require('~/Assets/Images/Tabs/ic_add_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_favorite.png')
              : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Image
          source={
            focused
              ? require('~/Assets/Images/Tabs/ic_profile.png')
              : require('~/Assets/Images/Tabs/ic_profile_outline.png')
          }
        />
      ),
      tabBarOptions: {
        showLabel: false,
      },
    },
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MainTabs,
  },
  {
    drawerPosition: 'right',
    drawerType: 'slide',
    contentComponent: Drawer,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'CheckLogin',
  },
);

export default createAppContainer(AppNavigator);
