import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";

// const ids=products.find((item)=>item.id===id)

const productInfo = () => {
  const { id } = useLocalSearchParams();

  // const product=products.find((item)=>item.id===id)

  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />
      {/* <Image
       source={{uri:product.image}}
       style={styles.image}
      /> */}
      <Text style={{ fontSize: 20, color: "red" }}>hiii{id}</Text>
    </View>
  );
};

export default productInfo;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
