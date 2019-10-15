import React from 'react';
import CodePush from 'react-native-code-push';
import { View, Text } from 'react-native';

// import { Container } from './styles';

function App() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App)