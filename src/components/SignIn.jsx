import React from 'react';
// import Text from './Text'; 
import FormikTextInput from './FormikTextInput';
import { View, Pressable, Text } from 'react-native';
import { Formik, useField } from 'formik';

//Malli
//https://snack.expo.dev/@kalleilv/formik-example

// const onSubmit = (values) => {
//     console.log(values);
// };

const SignInForm= ({ onSubmit }) => {
    return <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
        <Pressable onPress={onSubmit}>
            <Text>Sign in</Text>
        </Pressable>
    </View>;
}; 


const initialValues = {
    username: '',
    password: '',
  };
  
  // const getBodyMassIndex = (mass, height) => {
  //   return Math.round(mass / Math.pow(height, 2));
  // };
  
  // const SignIn = ({ onSubmit }) => {
  //   const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  //   const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  
  //   return (
  //     <View>
  //       <TextInput placeholder="Weight (kg)" value={usernameField.value} onChangeText={text => usernameHelpers.setValue(text)} />
  //       <TextInput placeholder="Height (m)" value={passwordField.value} onChangeText={text => passwordHelpers.setValue(text)} />
  //       <TouchableWithoutFeedback onPress={onSubmit}>
  //         <Text>Calculate</Text>
  //       </TouchableWithoutFeedback>
  //     </View>
  //   );
  // };
  
  const SignIn = () => { 
    const onSubmit = values => { 
      const username = values.username;
      const password = values.password;
      console.log(values); 
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );
  };



export default SignIn;