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
        repositoryName: yup
            .string() 
            .required("RepositoryName is required"),

        ownerName: yup
            .string() 
            .required("Owner name is required"),

        rating: yup
            .number()
            .required("Rating is required (0-100)")
            .min(0, "Minimum rating is 0")
            .max(100, "Maximum rating is 100"), 

        text: yup
            .string() 
            .notRequired(),
    });

    const ReviewForm = ({ onSubmit }) => {
        return (
            <View>
                <View style={itemHeaderStyles.fieldsContainer}>
                    <FormikTextInput
                        style={theme.inputField}
                        name="repositoryName"
                        placeholder="Repository owner name"
                        testID ="repositoryOwnerField"
                    />
                    <FormikTextInput
                        style={theme.inputField}
                        name="ownerName"
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
                        name="text"
                        placeholder="Review" 
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
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "" 
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default ReviewFormContainer;
