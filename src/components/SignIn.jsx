import React from 'react';
// import Text from './Text'; 
import FormikTextInput from './FormikTextInput';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn'; 
import * as yup from 'yup';
import AuthStorage from '../utils/authStorage';

//Malli
//https://snack.expo.dev/@kalleilv/formik-example

const itemHeaderStyles = StyleSheet.create({
  fieldsContainer: {
    flexGrow: 1,
    paddingLeft: 5,
    paddingRight: 5
  },
  buttonContainer: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    // .email("Please enter username")
    .required('Username is Required'),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return <View>
    <View style={itemHeaderStyles.fieldsContainer}>
      <FormikTextInput style={theme.inputField} name="username" placeholder="Username" />
      <FormikTextInput style={theme.inputField} name="password" placeholder="Password" secureTextEntry={true} />
    </View>
    <View style={itemHeaderStyles.buttonContainer}>
      <Pressable onPress={onSubmit} style={theme.appButton.appButtonContainer} >
        <Text style={theme.appButton.appButtonText}>Sign in</Text>
      </Pressable>
    </View>
  </View>;
};


const initialValues = {
  username: '',
  password: '',
};


const SignIn = () => { 

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {  
      await signIn({ username, password });    
      
      //testi
      const authStorage = new AuthStorage();  
      const accessToken = await authStorage.getAccessToken();
      console.log('accessToken ', accessToken);

    } catch (e) {
      console.log(e);
    }
  };


  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};



export default SignIn;