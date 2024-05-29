import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { CartContext } from '../context/CartContext';
import CardItem from '../components/CardItem';

const shoppingCartTotals = (cartItems) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Total:</Text>
        <Text style={styles.price}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const Basket = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleDelete = (itemId) => {
    removeFromCart(itemId); // Sepetten öğeyi kaldırma işlevini çağırın
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sepet</Text>
      
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CardItem cartItem={item} onDelete={handleDelete} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => shoppingCartTotals(cartItems)}
      />
      <View style={styles.buttonContainer}>
        <Button color={'green'} title='Alışverişi Tamamla' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
    borderColor: 'green',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  totalsContainer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  buttonContainer: {
    paddingHorizontal: 50,
  },
});

export default Basket;
