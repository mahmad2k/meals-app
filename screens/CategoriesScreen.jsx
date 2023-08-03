import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(navigation, itemData) {
  function pressHandler() {
    navigation.navigate("MealsOverview", {
      categoryId: itemData.item.id,
    });
  }

  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(navigation, item)}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
