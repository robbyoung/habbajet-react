import {Navigation} from 'react-native-navigation';
import {goToLoading} from './app/navigation';

Navigation.events().registerAppLaunchedListener(() => goToLoading());
