import React from "react";
import FormikTextInput from "../Common/FormikTextInput";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Formik } from "formik";
import theme from "../../theme";
import * as yup from "yup";

export const SignInContainer = ({ onSubmit }) => {
  const itemHeaderStyles = StyleSheet.create({
    fieldsContainer: {
      flexGrow: 1,
      paddingLeft: 5,
      paddingRight: 5,
    },
    buttonContainer: {
      flexGrow: 1,
      paddingTop: 10,
      paddingBottom: 20,
      paddingLeft: 5,
      paddingRight: 5,
    },
  });

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      // .email("Please enter username")
      .required("Username is Required"),
    password: yup
      .string()
      .min(3, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });


//Malli
//https://snack.expo.dev/@kalleilv/formik-example

  const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <View style={itemHeaderStyles.fieldsContainer}>
          <FormikTextInput
            style={theme.inputField}
            name="username"
            placeholder="Username"
            testID="usernameField"
          />
          <FormikTextInput
            style={theme.inputField}
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            testID="passwordField"
          />
        </View>
        <View style={itemHeaderStyles.buttonContainer}>
          <Pressable
            onPress={onSubmit}
            style={theme.appButton.appButtonContainer}
            testID="signInButton"
          >
            <Text style={theme.appButton.appButtonText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  ); 
};

export default SignInContainer;
