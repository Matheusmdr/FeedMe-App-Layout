import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SignIn } from '../pages/SignIn'
import { Register } from '../pages/Register'
import { ProblemsToAuth } from '../pages/ProblemsToAuth';
import { RedefinePassword } from '../pages/RedefinePassword';

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {


    return (
        <Navigator
           screenOptions={{
            headerShown: false
           }}
        >
            <Screen
                name='signin'
                component={SignIn}
            />
            <Screen
                name='register'
                component={Register}
            />
            <Screen
                name='problems'
                component={ProblemsToAuth}
            />

            <Screen 
                name="redefinepassword"
                component={RedefinePassword}
            />
        </Navigator>
    )
}