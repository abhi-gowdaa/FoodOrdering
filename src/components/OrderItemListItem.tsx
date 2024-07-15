import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { defaultPizzaImage } from "./ProductListItem";
import { OrderItem } from "../../types";
import Colors from "../constants/Colors";
type orderItemListProps = {
  item: OrderItem;
};

const OrderItemListItem = ({ item }: orderItemListProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.products.image || defaultPizzaImage }}
        resizeMode="contain"
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.products.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text>${item.products.price.toFixed(2)}</Text>
          <Text>size : {item.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}></View>
      <Text>2</Text>
    </View>
  );
};

export default OrderItemListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: "row",
    gap: 5,
  },
  quantitySelector: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  quantity: {
    fontWeight: "500",
    fontSize: 18,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
