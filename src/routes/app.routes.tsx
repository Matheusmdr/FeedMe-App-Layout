import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()


export function AppRoutes() {


    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
           
        </Navigator>
    )
}