import React from "react";

import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
