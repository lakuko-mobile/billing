import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillingScreen from './Billing';
import type { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

const Route = () => {
    return (
        <>
            <Stack.Screen
            name="Billing"
            component={BillingScreen}
            options={{ headerShown: false }}
            />
        </>
    )
}

export default Route;