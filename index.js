import {Navigation} from 'react-native-navigation';
import {goToLoading} from './app/navigation/navigation';
import './app/navigation/registry';

Navigation.events().registerAppLaunchedListener(() => goToLoading());
