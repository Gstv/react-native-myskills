import React from "react";

import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import styles from "./styles";

interface SkillCardProps extends TouchableOpacityProps {
  name: string;
}

function SkillCard({ name, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.textButton}>{name}</Text>
    </TouchableOpacity>
  );
}

export default SkillCard;
