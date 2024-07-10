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
      options={{
        title:'menu',
        headerRight: () => (
          <Link href="/(admin)/menu/create" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="plus-square-o"
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
