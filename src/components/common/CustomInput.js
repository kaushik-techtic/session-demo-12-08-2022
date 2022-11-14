import {View, Image, TextInput} from 'react-native';

const InputView = ({title, onTextChange, icon}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={icon} style={{height: 30, width: 30, marginRight: 10}} />
      <TextInput
        placeholder={title}
        onChangeText={onTextChange}
        style={{
          borderWidth: 1,
          width: '70%',
          borderRadius: 50,
          marginTop: 15,
          paddingLeft: 10,
        }}
      />
    </View>
  );
};

export default InputView;
