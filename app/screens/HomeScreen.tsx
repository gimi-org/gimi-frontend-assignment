import {
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetRandomUsersQuery } from "@/app/api/randomUserApi";
import { User } from "@/app/types/User";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  const { data } = useGetRandomUsersQuery();

  const handlePress = (userId: string) => () => {
    navigation.navigate("UserDetails", { userId });
  };

  const renderItem: ListRenderItem<User> = ({ item: user }) => (
    <Pressable onPress={handlePress(user.id.value)} style={styles.row}>
      <Text>
        {user.name.first} {user.name.last}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your contacts</Text>
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        style={styles.list}
        keyExtractor={(item) => item.id.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginTop: 72,
    marginBottom: 40,
    marginLeft: 32,
    fontSize: 32,
    fontWeight: "700",
  },
  list: {
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
