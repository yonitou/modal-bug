/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import ModalContent from './Modals';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const [modalVisible, setModalVisible] = useState<string>('');

  const toggleFirstModal = () => {
    setModalVisible('first');
  };

  const toggleSecondModal = () => {
    setModalVisible('');
    setTimeout(() => {
      setModalVisible(modalVisible === 'first' ? 'second' : 'first');
    }, 0);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ModalContent
        title="first"
        backgroundColor="red"
        visible={modalVisible === 'first'}
        onClose={toggleSecondModal}
      />

      <ModalContent
        visible={modalVisible === 'second'}
        title="second"
        backgroundColor="blue"
        onClose={toggleFirstModal}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button title="ToggleFirstModal" onPress={toggleFirstModal} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
