import { View, FlatList } from "react-native";
import products from "@assets/data/products";
import { ProductListItem } from "@components/ProductListItem";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function TabOneScreen() {
  const [product, setProducts] = useState();
  useEffect(() => {
    const fn = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.warn(error);
      }
      if (data) {
        console.warn(data);
      }
      setProducts(data);
    };
    fn();
  }, []);
  return (
    <View>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 1 }}
      />
    </View>
  );
}
