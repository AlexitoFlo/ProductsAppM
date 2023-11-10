import React, { useState } from 'react';
import { Button, TextInput, View, ScrollView, StyleSheet } from 'react-native';
import { insertOrder, getOrders } from '../../database'

const styles = StyleSheet.create({

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

  return (
    <View>
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
        onPress={handleRegister}
      />
      
      <View>
        <ScrollView style={styles.listArea}>
           
        </ScrollView>
      </View>
    </View>

  );
};

export default ProductRegistrationScreen;