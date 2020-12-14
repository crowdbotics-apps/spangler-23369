import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps185285Navigator from '../features/Maps185285/navigator';
import Settings185263Navigator from '../features/Settings185263/navigator';
import Settings185248Navigator from '../features/Settings185248/navigator';
import NotificationList185247Navigator from '../features/NotificationList185247/navigator';
import Maps185246Navigator from '../features/Maps185246/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps185285: { screen: Maps185285Navigator },
Settings185263: { screen: Settings185263Navigator },
Settings185248: { screen: Settings185248Navigator },
NotificationList185247: { screen: NotificationList185247Navigator },
Maps185246: { screen: Maps185246Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
