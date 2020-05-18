import {Navigation} from 'react-native-navigation';
import {goToLoading} from './app/navigation/navigation';

Navigation.events().registerAppLaunchedListener(() => goToLoading());
