import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

type Props={
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation()
  
  function handlerGoBack() {
    navigation.goBack()  
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[ secondary100, secondary40 ]}
      >
      <BorderlessButton onPress={handlerGoBack}>
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
          />
      </BorderlessButton>
    
      <Text style={styles.title}>
        { title }
      </Text>

      {
        action ?
        <View>
          { action }
        </View>
        : <View style={{ width: 24 }}/> 
      }
    </LinearGradient>
  )
}