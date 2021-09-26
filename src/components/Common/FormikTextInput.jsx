import React from 'react';
import { useField } from 'formik'; 
import TextInput from './TextInput';
import { View } from "react-native";
import Text from './Text.jsx';
import theme from '../../theme';
 
const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const showError = meta.touched && meta.error;

  return (
    <View>
      <TextInput
        style={undefined} onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError} 
        {...props}      />
      {showError && <Text style={theme.errorText}>{meta.error}</Text>}
      </View>
  );
};

export default FormikTextInput;