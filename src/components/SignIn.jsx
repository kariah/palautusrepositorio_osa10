import React from 'react';
// import Text from './Text'; 
import FormikTextInput from './FormikTextInput';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Formik, useField } from 'formik';
import theme from '../theme';

//Malli
//https://snack.expo.dev/@kalleilv/formik-example

// const onSubmit = (values) => {
//     console.log(values);
// };

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

const SignInForm= ({ onSubmit }) => {
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