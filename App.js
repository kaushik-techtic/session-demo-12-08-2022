import {View, Text, TextInput, Image} from 'react-native';
import InputView from './src/components/common/CustomInput';

const App = () => {
  // const

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> test</Text>

      <InputView
        title={'User Name'}
        icon={require('./assets/Images/user.jpeg')}
        onTextChange={value => {
          console.log('user name  : ', value);
        }}
      />
      <InputView
        title={'Password'}
        icon={require('./assets/Images/lock.png')}
        onTextChange={value => {
          console.log('password  : ', value);
        }}
      />
      <InputView
        title={'Password'}
        icon={require('./assets/Images/lock.png')}
        onTextChange={value => {
          console.log('password  : ', value);
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default App;
