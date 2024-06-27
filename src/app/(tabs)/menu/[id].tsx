import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import Button from "@components/Button";

const sizes = ["S", "M", "L", "XL"];

const productInfo = () => {
  const { id } = useLocalSearchParams();
  const [selected, setSelected] = useState("M");

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <Text>product doesnot exist</Text>;
  }

  const addToCart = () => {
    console.warn("hi");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Details " + id }} />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelected(size);
            }}
            key={size}
            id={size}
            style={[
              styles.size,
              { backgroundColor: selected === size ? "gainsboro" : "white" },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selected === size ? "black" : "gray" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={[styles.price]}>Price:${product.price}</Text>
      <Button onPress={addToCart} text="Add to Cart" />
    </View>
  );
};

export default productInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    marginTop:"auto"
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
    justifyContent: "center",
  },
});
