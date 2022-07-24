import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

import { COLORS } from "../contants/colors";
import { plantCategories } from "../contants/categories";
import { plants } from "../contants/plants";

const width = Dimensions.get("screen").width / 2 - 30;

const Home = ({ navigation }) => {
  const {
    safeAreaView,
    header,
    welcome,
    shopName,
    search,
    searchBar,
    searchInput,
    sort,
    categories,
    categoryText,
    categoryTextSelected,
    card,
    flatListWrapperStyle,
    flatListContentStyle,
    favourite,
    plantImage,
    imageWrapper,
    plantName,
    priceWrapper,
    addBtn,
    price,
  } = styles;

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [timer, setTimer] = useState(true);

  const handleCategorySelect = (index) => setCategoryIndex(index);

  const CategoryList = () => (
    <View style={categories}>
      {plantCategories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategorySelect(index)}
          key={index}
          activeOpacity={0.5}
        >
          <Text
            style={[
              categoryText,
              categoryIndex === index && categoryTextSelected,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const Card = ({ plant }) => (
    <TouchableOpacity
      style={card}
      onPress={() => {
        console.log("clicked");
        navigation.navigate("details", { plant });
      }}
    >
      <View
        style={[favourite, plant.like && { backgroundColor: COLORS.lightPink }]}
      >
        <Ionicons
          name="heart"
          size={20}
          color={plant.like ? COLORS.darkPink : COLORS.black}
        />
      </View>
      <View style={imageWrapper}>
        <Image source={plant.img} style={plantImage} />
      </View>
      <Text style={plantName}>{plant.name}</Text>
      <View style={priceWrapper}>
        <Text style={price}>$ {plant.price}</Text>
        <TouchableOpacity style={addBtn}>
          <AntDesign name="plus" size={15} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={safeAreaView}>
      <View style={header}>
        <View>
          <Text style={welcome}>Welcome To</Text>
          <Text style={shopName}>Plant Shop</Text>
        </View>
        <Ionicons name="cart" size={28} />
      </View>
      <View style={search}>
        <View style={searchBar}>
          <Ionicons name="search" size={20} />
          <TextInput placeholder="Search" style={searchInput} />
        </View>
        <TouchableOpacity style={sort}>
          <MaterialIcons name="sort" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <CategoryList />
      {timer ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={flatListWrapperStyle}
          contentContainerStyle={flatListContentStyle}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={plants}
          renderItem={({ item }) => <Card plant={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
  },
  shopName: {
    fontSize: 30,
    color: COLORS.green,
    fontWeight: "bold",
  },
  search: {
    marginTop: 30,
    flexDirection: "row",
  },
  searchBar: {
    width: "85%",
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 10,
  },
  sort: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.green,
    borderRadius: 10,
    width: 50,
  },
  categories: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
  categoryTextSelected: {
    color: COLORS.green,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    padding: 10,
    position: "relative",
    alignItems: "center",
  },
  flatListWrapperStyle: {
    marginTop: 10,
    justifyContent: "space-between",
  },
  flatListContentStyle: {
    marginTop: 10,
    paddingBottom: 50,
  },
  favourite: {
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 50,
    padding: 3,
    backgroundColor: "lightgray",
  },
  plantImage: {
    flex: 1,
    resizeMode: "contain",
  },
  imageWrapper: { alignItems: "center", height: 100, marginTop: 50 },
  plantName: {
    fontSize: 15,
  },
  priceWrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
  },
  addBtn: {
    backgroundColor: COLORS.green,
    marginLeft: 50,
    padding: 5,
    borderRadius: 5,
  },
});

export default Home;
