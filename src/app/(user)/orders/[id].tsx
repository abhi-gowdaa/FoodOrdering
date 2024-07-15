import OrderItemListItem from "@components/OrderItemListItem";
import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import orders from "@assets/data/orders";
import { useLocalSearchParams, Stack } from "expo-router";
import OrderListItem from "@components/OrderListItem";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() == id);
  if (!order) {
    return <Text>Order not found!</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />
      {/* <OrderListItem order={order} /> this is moved to below flatlist and it is scrolable */} 
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={()=><OrderListItem order={order} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});

export default OrderDetailScreen;
