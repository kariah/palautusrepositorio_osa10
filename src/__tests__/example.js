// describe('Example', () => {
//     it('works', () => {
//       expect(1).toBe(1);
//     });
//   });

//npm test
import React, { useState } from "react";
import { Text, TextInput, Pressable, View } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          testID="usernameField"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          testID="passwordField"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit} testID="submitButton">
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

describe("Form", () => {
  it.only("calls function provided by onSubmit prop after pressing the submit button", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId("usernameField"), "kalle");
    fireEvent.changeText(getByTestId("passwordField"), "password");
    fireEvent.press(getByTestId("submitButton"));

    expect(onSubmit).toHaveBeenCalledTimes(1);

    // onSubmit.mock.calls[0][0] contains the first argument of the first call
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: "muu kuin kalle",
      password: "password",
    });
  });
});
 