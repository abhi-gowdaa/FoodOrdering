import {  View  } from "react-native";
import { ProductListItem } from "./ProductListItem"; 
import products from "./../../../assets/data/products";


export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

