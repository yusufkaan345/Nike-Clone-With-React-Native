import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Icon kütüphanesi
import { useNavigation } from '@react-navigation/native';
import products from "../data/products";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Ara..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList 
        data={filteredProducts} 
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    fontSize: 16,
    outlineColor: 'grey',
    borderColor: 'transparent',
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

export default Home;
