import { memo } from "react";
import { View } from "react-native";

import { styles } from "./styles";

const ProductItem = memo(({ item, index, viewableItems }) => {
  return <View style={styles.item} />;
});

export default ProductItem;
