import React, { useState } from "react";

import { Text, FlatList, View, Alert } from "react-native";

import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import SkillCard from "../../components/common/skillcard/SkillCard";

import styles from "./styles";

interface Skill {
  id: number;
  name: string;
}

function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const alertModal = (title: string, text: string) => Alert.alert(title, text);

  function handleAddSkill() {
    const textWithoutSpaces = newSkill.trim();

    const skill = {
      id: new Date().getTime(),
      name: textWithoutSpaces,
    };

    const skillFound = skills.find(
      (item) => item.name.toUpperCase() === skill.name.toUpperCase()
    );

    if (skill.name === "") {
      alertModal("Atenção: Campo Vazio", "Preencha o campo com algum valor.");
      return;
    }

    if (skillFound !== undefined) {
      alertModal(
        "Atenção: A skill já existe",
        "Preencha o campo com alguma skill inexistente."
      );
      return;
    }

    const newSkills = [...skills, skill];

    setSkills(newSkills);
    setNewSkill("");
  }

  function handleRemoveSkill(currentSkill: Skill) {
    const skillFiltered = skills.filter(
      (skill) => skill.id !== currentSkill.id
    );

    setSkills(skillFiltered);
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Welcome, Gustavo!</Text>
        <Text style={styles.text}>Good morning</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.inputContainer}>
          <Input
            value={newSkill}
            placeholder="New Skill"
            onChangeText={setNewSkill}
          />
        </View>

        <Button title="Add" onPress={handleAddSkill} />
      </View>

      <View>
        <Text style={[styles.title, { marginBottom: 35 }]}>MySkills</Text>

        <FlatList
          style={styles.flatList}
          data={skills}
          renderItem={({ item }) => (
            <SkillCard
              name={item.name}
              onPress={() => handleRemoveSkill(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

export default Home;
