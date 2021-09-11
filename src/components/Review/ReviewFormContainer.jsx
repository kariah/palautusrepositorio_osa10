import React from "react";
import FormikTextInput from "../Common/FormikTextInput";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Formik } from "formik";
import theme from "../../theme";
import * as yup from "yup";

export const ReviewFormContainer = ({ onSubmit }) => {
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

    const SignInForm = ({ onSubmit }) => {
        return (
            <View>
                <View style={itemHeaderStyles.fieldsContainer}>
                    <FormikTextInput
                        style={theme.inputField}
                        name="username"
                        placeholder="Repository owner name"
                        testID ="repositoryOwnerField"
                    />
                    <FormikTextInput
                        style={theme.inputField}
                        name="password"
                        placeholder="Repository name" 
                        testID="repositoryNameField"
                    />
                    <FormikTextInput
                        style={theme.inputField}
                        name="rating"
                        placeholder="Rating between 0 and 100" 
                        testID="ratingField"
                    />
                    <FormikTextInput
                        style={theme.inputField}
                        name="review"
                        placeholder="Reviw" 
                        testID="reviewField"
                    />
                </View>
                <View style={itemHeaderStyles.buttonContainer}>
                    <Pressable
                        onPress={onSubmit}
                        style={theme.appButton.appButtonContainer}
                        testID="createReviewButton"
                    >
                        <Text style={theme.appButton.appButtonText}>Create a review</Text>
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

export default ReviewFormContainer;
