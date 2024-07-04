import { Stack,Link } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

//Stack screenOptions is to make headerright button visible acroos all screen (menu,product detail screen)

export default function MenuStack() {
  return (
    <Stack screenOptions={{
      //screen option this make appear anything in all the page
    }}>
      <Stack.Screen name="index" 
      options={{title:'Menu',
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="plus-square"
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
    </Stack>
  );
}
