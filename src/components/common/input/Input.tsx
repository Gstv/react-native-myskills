import React from "react";

import { TextInput, TextInputProps } from "react-native";

import styles from "./styles";

type InputProps = TextInputProps;

function Input({ ...rest }: InputProps) {
  return (
    <TextInput style={styles.input} placeholderTextColor="#555" {...rest} />
  );
}

export default Input;
