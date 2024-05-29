import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const categories = [
  { id: '1', name: 'Basketbol' },
  { id: '2', name: 'Antrenman' },
  { id: '3', name: 'Koşu' },
  { id: '4', name: 'Yürüyüş' },
  { id: '5', name: 'Futbol' },
  { id: '6', name: 'Indoor' },
  { id: '7', name: 'Tenis' },
  { id: '8', name: 'Outdoor' },
];

const Categories = () => {
  const navigation = useNavigation();

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => navigation.navigate("CategoryProducts", { categoryName: item.name })}
    >
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  categoryContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;
