

import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useState } from 'react';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes'

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
};

export function Routes() {
    const [isUserLogged, setIsUserLogged] = useState(false)

    return (
        <NavigationContainer theme={MyTheme}>
            {isUserLogged? <AppRoutes /> : <AuthRoutes /> }
        </NavigationContainer>

    )
}