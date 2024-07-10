import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import Button from "@components/Button";
import { defaultPizzaImage } from "@components/ProductListItem";
import Colors from "../../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { Stack, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<string | null>(null); //to pickimage and <string|null> bec image path is a string so it cant be assigned to null so we use that ref(/)

  const router = useRouter();
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const validateInput = () => {
    setError("");
    if (!name) {
      setError("name is required");
      return false;
    }
    if (!price) {
      setError("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setError("Price should be a number");
      return false;
    }

    return true;
  };

  const resetFields = () => {
    setName("");
    setPrice("");
    setImage("");
    router.back();
  };
  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Creating dish");
    resetFields();
  };
  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("updating dish :", name);
    resetFields();
  };

  const onDelete = () => {
    console.warn("daleted");
  };
  const confirmDelete = () => {
    Alert.alert("Confirm", "are you sure you want to delete the product", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  //to pickimage+
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); //ref(/)
    }
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update Prooduct" : "Create Product" }}
      />
      <Image
        style={styles.image}
        source={{ uri: image || defaultPizzaImage }}
        resizeMode="cover"
      />

      <Text onPress={pickImage} style={styles.textButton}>
        select a image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Margarita..."
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        keyboardType="numeric"
      />
      <Text style={styles.error}>{error}</Text>
      <Button onPress={onSubmit} text={isUpdating ? "update" : "create"} />
      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.textButton}>
          Delete
        </Text>
      )}
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
