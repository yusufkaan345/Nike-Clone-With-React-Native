import { View, Text, StyleSheet, Image, Button } from 'react-native';

const CardItem = ({ cartItem, onDelete }) => {
  const handleRemove = () => {
    onDelete(cartItem.id); // Silinecek öğenin id'sini gönderiyoruz
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Button color={'#DC143c'} title='Remove' onPress={handleRemove}></Button>
          <Text style={styles.itemTotal}>
            $ {cartItem.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: 'gray',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500',
  },
});

export default CardItem;
