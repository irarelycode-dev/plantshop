import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { COLORS } from "../contants/colors";

const Details = ({ route, navigation }) => {
  const { plant } = route.params;
  const {
    safeAreaView,
    imageContainer,
    icons,
    image,
    imgSource,
    details,
    caption,
    namePrice,
    name,
    price,
    content,
    about,
    quantity,
    buyBtn,
    changeQuantity,
  } = styles;

  return (
    <SafeAreaView style={safeAreaView}>
      <View style={imageContainer}>
        <View style={icons}>
          <AntDesign
            name="back"
            size={20}
            onPress={() => navigation.navigate("home")}
          />
          <Ionicons name="cart" size={28} />
        </View>
        <View style={image}>
          <Image source={plant.img} style={imgSource} />
        </View>
      </View>
      <View style={details}>
        <Text style={caption}>__ Best Choice</Text>
        <View style={namePrice}>
          <Text style={name}>{plant.name}</Text>
          <Text style={price}>$ {plant.price}</Text>
        </View>
        <View style={content}>
          <Text style={caption}>About</Text>
          <Text style={about}>{plant.about}</Text>
        </View>
        <View style={quantity}>
          <Text style={changeQuantity}>-</Text>
          <Text>1</Text>
          <Text style={changeQuantity}>+</Text>
          <Text style={buyBtn}>Buy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    marginTop: 40,
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 350,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imgSource: { flex: 1, resizeMode: "contain" },
  details: {
    backgroundColor: COLORS.light,
    borderRadius: 25,
    height: 300,
    marginTop: 20,
    paddingVertical: 20,
    paddingLeft: 20,
  },
  caption: {
    fontWeight: "bold",
  },
  namePrice: {
    flexDirection: "row",
    marginTop: 20,
    position: "relative",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 0,
  },
  price: {
    backgroundColor: COLORS.green,
    position: "absolute",
    right: 5,
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    color: COLORS.white,
  },
  content: {
    marginTop: 30,
    justifyContent: "space-between",
  },
  about: {
    color: "grey",
    marginTop: 10,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buyBtn: {
    backgroundColor: COLORS.green,
    color: COLORS.white,
    paddingHorizontal: 20,
    textAlign: "center",
    borderRadius: 10,
  },
  changeQuantity: {
    borderWidth: 1,
    borderColor: COLORS.dark,
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
});

export default Details;
