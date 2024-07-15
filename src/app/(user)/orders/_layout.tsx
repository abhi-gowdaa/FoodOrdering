import React from "react";
import { Stack } from "expo-router";

export const OrderLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
    </Stack>
  );
};
