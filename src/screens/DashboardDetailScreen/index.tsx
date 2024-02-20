import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { INavigationInterface } from '../../modules/INavigationInterface'

export default function DashboardDetailScreen({ navigation, route }: INavigationInterface) {
    return (
        <Background logoutOption={true}>
            <View>
                <Text>DashboardDetailScreen</Text>
            </View>
        </Background>
  )
}