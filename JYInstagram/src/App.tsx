// import React from 'react';
// import {Image, StatusBar} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// import {RandomUserDataProvider} from '~/Context/RandomUserData';
// import CheckLogin from '~/Screens/CheckLogin';
// import Login from '~/Screens/Login';
// import PasswordReset from '~/Screens/PasswordReset';
// import Signup from '~/Screens/Signup';

// import MyFeed from '~/Screens/MyFeed';
// import Feeds from '~/Screens/Feeds';
// import FeedListOnly from '~/Screens/FeedListOnly';
// import Upload from '~/Screens/Upload';
// import Notification from '~/Screens/Notification';
// import Profile from '~/Screens/Profile';
// import Drawer from '~/Screens/Drawer';

// const Stack = createStackNavigator();
// const LoginStack = createStackNavigator();
// const MyFeedStack = createStackNavigator();
// const FeedsTabStack = createStackNavigator();
// const UploadTabStack = createStackNavigator();
// const ProfileTabStack = createStackNavigator();
// const MainTabsBottomTabs = createBottomTabNavigator();
// const DrawerNav = createDrawerNavigator();

// function LoginNavigator() {
//   return (
//     <LoginStack.Navigator>
//       <LoginStack.Screen name="Login" component={Login} />
//       <LoginStack.Screen name="Signup" component={Signup} />
//       <LoginStack.Screen name="PasswordReset" component={PasswordReset} />
//     </LoginStack.Navigator>
//   );
// }

// function MyFeedTab() {
//   return (
//     <MyFeedStack.Navigator>
//       <MyFeedStack.Screen name="MyFeed" component={MyFeed} />
//     </MyFeedStack.Navigator>
//   );
// }

// function FeedsTab() {
//   return (
//     <FeedsTabStack.Navigator>
//       <FeedsTabStack.Screen name="Feeds" component={Feeds} />
//       <FeedsTabStack.Screen name="FeedListOnly" component={FeedListOnly} />
//     </FeedsTabStack.Navigator>
//   );
// }

// function UploadTab() {
//   return (
//     <UploadTabStack.Navigator>
//       <UploadTabStack.Screen name="Upload" component={Upload} />
//     </UploadTabStack.Navigator>
//   );
// }

// function ProfileTab() {
//   return (
//     <ProfileTabStack.Navigator>
//       <ProfileTabStack.Screen name="Profile" component={Profile} />
//     </ProfileTabStack.Navigator>
//   );
// }

// function MainTabs() {
//   return (
//     <MainTabsBottomTabs.Navigator
//       // initialRouteName="Feed"
//       tabBarOptions={{
//         showLabel: false,
//       }}>
//       <MainTabsBottomTabs.Screen
//         name="MyFeedTab"
//         component={MyFeedTab}
//         options={{
//           tabBarIcon: ({focused}: {focused: boolean}) => (
//             <Image
//               source={
//                 focused
//                   ? require('~/Assets/Images/Tabs/ic_home.png')
//                   : require('~/Assets/Images/Tabs/ic_home_outline.png')
//               }
//             />
//           ),
//         }}
//       />
//       <MainTabsBottomTabs.Screen
//         name="FeedsTab"
//         component={FeedsTab}
//         options={{
//           tabBarIcon: ({focused}: {focused: boolean}) => (
//             <Image
//               source={
//                 focused
//                   ? require('~/Assets/Images/Tabs/ic_search.png')
//                   : require('~/Assets/Images/Tabs/ic_search_outline.png')
//               }
//             />
//           ),
//         }}
//       />
//       <MainTabsBottomTabs.Screen
//         name="UploadTab"
//         component={UploadTab}
//         options={{
//           tabBarIcon: ({focused}: {focused: boolean}) => (
//             <Image
//               source={
//                 focused
//                   ? require('~/Assets/Images/Tabs/ic_add.png')
//                   : require('~/Assets/Images/Tabs/ic_add_outline.png')
//               }
//             />
//           ),
//         }}
//       />
//       <MainTabsBottomTabs.Screen
//         name="Notification"
//         component={Notification}
//         options={{
//           tabBarIcon: ({focused}: {focused: boolean}) => (
//             <Image
//               source={
//                 focused
//                   ? require('~/Assets/Images/Tabs/ic_favorite.png')
//                   : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
//               }
//             />
//           ),
//         }}
//       />
//       <MainTabsBottomTabs.Screen
//         name="ProfileTab"
//         component={ProfileTab}
//         options={{
//           tabBarIcon: ({focused}: {focused: boolean}) => (
//             <Image
//               source={
//                 focused
//                   ? require('~/Assets/Images/Tabs/ic_profile.png')
//                   : require('~/Assets/Images/Tabs/ic_profile_outline.png')
//               }
//             />
//           ),
//         }}
//       />
//     </MainTabsBottomTabs.Navigator>
//   );
// }

// function MainNavigator() {
//   return (
//     <DrawerNav.Navigator drawerType="slide" drawerPosition="right">
//       <DrawerNav.Screen name="Drawer" component={Drawer} />
//     </DrawerNav.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <RandomUserDataProvider cache={true}>
//       <StatusBar barStyle="default" />
//       <NavigationContainer>
//         <DrawerNav.Navigator drawerType="slide" drawerPosition="right">
//           <DrawerNav.Screen name="MainTabs" component={MainTabs} />
//           <DrawerNav.Screen name="Drawer" component={Drawer} />
//         </DrawerNav.Navigator>
//       </NavigationContainer>
//     </RandomUserDataProvider>
//   );
// };

// export default App;

import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';
import {RandomUserDataProvider} from '~/Context/RandomUserData';

interface Props {}

const App = ({}: Props) => {
  return (
    <RandomUserDataProvider cache={true}>
      <UserContextProvider>
        <StatusBar barStyle="default" />
        <Navigator />
      </UserContextProvider>
    </RandomUserDataProvider>
  );
};
export default App;
