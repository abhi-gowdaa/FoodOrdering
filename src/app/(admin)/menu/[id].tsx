import { View, Text, Image, StyleSheet,Pressable } from "react-native";
import React, { useState ,useContext} from "react";
import products from "@assets/data/products";
import { Link,Stack, useRouter, useLocalSearchParams } from "expo-router";
 
import { FontAwesome } from "@expo/vector-icons";
 import Colors from "../../../constants/Colors"
// import { CartContext } from "../../../providers/CartProvider";
 
// import { PizzaSize } from "../../../../types";

// const sizes:PizzaSize[] = ["S", "M", "L", "XL"];

 
const productInfo = () => {
  const { id } = useLocalSearchParams();
  // const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  // const {items,addItem}=useContext(CartContext);
  
   const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <Text>product doesnot exist</Text>;
  }

  // const addToCart = () => {
  //   if(!product){
  //     return;
  //   }
  //    addItem(product,selectedSize);
  //    router.push("/cart")
      
    
  // };

  return (
    <View style={styles.container}>
      <Stack.Screen
      options={{
        title:'menu',
        headerRight: () => (
          <Link href={`/(admin)/menu/create?id=${id}`} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="pencil"
                  size={25}
                  color={Colors.light.tint}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )} 
            </Pressable>
          </Link>
        )
      }}  
      
      />
       <Stack.Screen 
      options={{
        title:product.name,
      }}  
      
      />
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={[styles.title]}>{product.name}</Text>
      <Text style={[styles.price]}>${product.price}</Text>
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
  title:{
  fontSize:20,
  fontWeight:'bold'
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",

  },
 
  
  
});
