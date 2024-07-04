import { StyleSheet,  Text, Image ,Pressable} from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../../types";
import { Link, useSegments } from "expo-router";
 
export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};
//product(is a property here its a props):Product(is a type)

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const segment=useSegments()
  //ex ['(admin)', 'menu', '[id]'] this is path segment helps for routing
  return (
    //redirect to /menu/[id].tsx
    <Link href={`${segment[0]}/menu/${product.id}`} asChild> 
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
     
    </Pressable>
    </Link>
  ); 
};
 
//aschild renders link as the pressable(view) component
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    margin: 10,
    flex:1,
    maxWidth:'50%'
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
