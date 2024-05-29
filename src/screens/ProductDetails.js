import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
import Toast from 'react-native-toast-message';

const ProductDetails = () => {
  const route = useRoute();
  const { product } = route.params;
  const { width } = useWindowDimensions();
  const { addToCart } = useContext(CartContext); 
  
  const addToBasket = () => {
    addToCart(product);  // Ürünü sepete ekle
    showNotification(); 
    console.warn("Product added to basket:", product);
  };
const showNotification = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Ürün Sepete Eklendi',
      visibilityTime: 2000,
      autoHide: true,
    });
  };


  return (
    <View>
    <Toast ref={(ref) => Toast.setRef(ref)} />
    <ScrollView>
      <Text style={styles.bigTitle}>{product.name}</Text>

      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{product.name}</Text>

        <View style={styles.addBasket}>
          <Text style={styles.price}>${product.price}</Text>
          <View style={{ marginLeft: 100 }}>
            <Button onPress={addToBasket} color={'green'} title='Add To Basket' />
          </View>
        </View>

        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bigTitle: {
    color: 'green',
    fontSize: 34,
    marginTop: 50,
    textAlign: 'center',
    marginBottom: 20
  },
  addBasket: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom:10
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 30,
    letterSpacing: 1.5,
    color: 'green'
  },
  description: {
    marginVertical: 10,
    fontSize: 15,
    lineHeight: 30,
    fontWeight: '300',
  },
});

export default ProductDetails;
