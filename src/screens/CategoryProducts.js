import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import products from '../data/products';

const CategoryProducts = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryName } = route.params;

  const filteredProducts = products.filter(product => product.category === categoryName);

  const renderProduct = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="İncele"
          onPress={() => {
            navigation.navigate('ProductDetails', { product: item });
          }}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{categoryName}</Text>
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  }
});

export default CategoryProducts;
