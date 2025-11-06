import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

// Lista de produtos locais
const products = [
  {
    id: "1",
    name: "Hambúrguer Artesanal",
    price: "R$ 25,90",
    image: require("@assets/images/Hamburguer.jpeg"),
  },
  {
    id: "2",
    name: "Pizza Margherita",
    price: "R$ 39,90",
    image: require("@assets/images/Pizza.jpeg"),
  },
  {
    id: "3",
    name: "Panna Cotta Italiana",
    price: "R$ 18,50",
    image: require("@assets/images/Pannacotta.jpeg"),
  },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Nossos Produtos</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});
