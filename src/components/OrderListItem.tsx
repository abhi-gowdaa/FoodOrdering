import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Order } from "../../types";
import { Link, useSegments } from "expo-router";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type orderListItemProps = {
  order: Order;
};
 
const OrderListItem = ({order}:orderListItemProps) => {
  const segments=useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
    <Pressable style={styles.container}>
      <View>
        <Text style={styles.orderId}>Order #{order.id}</Text>
        <Text style={styles.time}>{dayjs(order.created_at).fromNow() }</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </Pressable>
    </Link>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderId: {
    fontWeight: "bold",
    marginVertical: 5,
  },

  status: {
    fontWeight: "500",
  },
  time: {
    color: "grey",
  },
});
