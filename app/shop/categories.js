import React, { useState } from 'react';
import { Button, TextInput, View, ScrollView, StyleSheet, Text, StatusBar, ToastAndroid } from 'react-native';
import { insertOrder, getOrders } from '../../database'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ABBDD8',
    padding: 8,
  },
})

const ProductRegistrationScreen = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleRegister = () => {
    if (!product || !quantity || !price) {
      console.log('Por favor, completa todos los campos.')
    } else {
      insertOrder(product, quantity, price);
      console.log(`Registrando producto: ${product}, Cantidad: ${quantity}, Precio: ${price}`);
    }
  };

  function showToast() {
    ToastAndroid.show('Producto agregado', ToastAndroid.SHORT);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Producto"
        value={product}
        onChangeText={setProduct}
      />
      <TextInput
        placeholder="Cantidad"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button
        title="Registrar Producto"
        onPress= {() => {
          handleRegister();
          showToast();
      }}
      />

      <View>
        <ScrollView style={styles.listArea}>
           <Text>
              {getOrders}
           </Text>
        </ScrollView>
      </View>
    </View>

  );
};

export default ProductRegistrationScreen;