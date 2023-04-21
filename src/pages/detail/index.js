import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();

  // Serve para vereficar se tem um Parametro de Nome nos dados da Data, se tiver, o Header é alterado para o Nome do Parametro,
  // caso não tenha, irá manter o texto 'Detalhes da receita'.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => console.log("teste")}>
          <Entypo name="heart" size={28} color="#FF4141" />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.data]);

  return (
    <View style={styles.container}>
      <Text>Página Detalhes da receita</Text>
      <Text>{route.params?.data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
});
