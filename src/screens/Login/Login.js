import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import InputView from '../../components/common/CustomInput';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  // const
  const navigation2 = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> test</Text>

      <InputView
        title={'User Name'}
        icon={require('../../../assets/Images/user.jpeg')}
        onTextChange={value => {
          console.log('user name  : ', value);
        }}
      />
      <InputView
        title={'Password'}
        icon={require('../../../assets/Images/lock.png')}
        onTextChange={value => {
          console.log('password  : ', value);
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: '75%',
          height: 40,
          marginTop: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
        }}
        onPress={() => {
          navigation2.navigate('Home');
        }}>
        <Text style={{color: 'white'}}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Login;
