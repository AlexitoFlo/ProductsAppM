import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "#556f75",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  button: {
    padding: 20,
    backgroundColor: "#3B5249",
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default function Categories() {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Producto" style={styles.input} />
      <TextInput placeholder="Cantidad" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="$ Precio" style={styles.input} keyboardType="numeric" />

      <Text style={{ fontSize: 20, marginBottom: 20 }}>Elige una categoría</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Vegetales" value="veg" />
        <Picker.Item label="Frutas" value="fru" />
      </Picker>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
