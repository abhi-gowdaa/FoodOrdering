//this page is dynamic bec [id].tsx so anything can be inserted in place of [id]

import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import products from "@assets/data/products";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import Button from "@components/Button";

import { CartContext } from "../../../providers/CartProvider";
import { useContext } from "react";
import { PizzaSize } from "../../../../types";

const sizes:PizzaSize[] = ["S", "M", "L", "XL"];

const productInfo = () => {
  const { id } = useLocalSearchParams(); // from [id].tsx ex [2].tsx now id=2

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const {addItem}=useContext(CartContext);
 const router=useRouter();
   const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <Text>product doesnot exist</Text>;
  }

  const addToCart = () => {
    if(!product){
      return;
    }
     addItem(product,selectedSize);
     router.push("/cart")
      
    
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
              setSelectedSize(size);
            }}
            key={size}
            id={size}
            style={[
              styles.size,
              { backgroundColor: selectedSize === size ? "gainsboro" : "white" },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
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
