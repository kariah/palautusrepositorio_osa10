import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';
// import { Text, TextInput, Pressable, View } from "react-native"; 

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const onSubmit = jest.fn(); 
  
      const { debug, getByTestId } = render(<SignInContainer onSubmit={onSubmit}  />);

      // debug();

      fireEvent.changeText(getByTestId("usernameField"), "kari");
      fireEvent.changeText(getByTestId("passwordField"), "passu");
      fireEvent.press(getByTestId("signInButton"));
  
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kari",
          password: "passu",
        });
      });
    });
  });
});