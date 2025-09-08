import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  const name: string = "Каерденов Ростислав";
  const profession: string = "Frontend Developer";
  const description: string =
    "Люблю создавать красивые и удобные интерфейсы. Работаю с React и React Native, постоянно изучаю новые технологии.";
  const phone: string = "+7 (777) 123-45-67";
  const email: string = "kaerdenov@example.com";
  const city: string = "Павлодар";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.contacts}>
          <Text style={styles.contact}>📞 {phone}</Text>
          <Text style={styles.contact}>📧 {email}</Text>
          <Text style={styles.contact}>📍 {city}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f0fa",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  profession: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginBottom: 15,
  },
  contacts: {
    marginTop: 10,
    alignItems: "flex-start",
    width: "100%",
  },
  contact: {
    fontSize: 14,
    marginVertical: 3,
  },
});
