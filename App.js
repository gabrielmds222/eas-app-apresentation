import React, { useState } from "react";
import "expo-dev-client";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSignIn = () => {
    const data = {
      username,
      email,
      senha,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={setUsername}
        value={username}
        placeholder="Seu nome"
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu Email"
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setSenha}
        value={senha}
        placeholder="Digite sua Senha"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonInput}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 24,
    marginBottom: 34,
    alignSelf: "flex-start",
    color: "#121212",
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "blue",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInput: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
