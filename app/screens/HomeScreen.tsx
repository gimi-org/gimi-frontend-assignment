import { StyleSheet, Text, View } from "react-native";
import { useGetRandomUsersQuery } from "@/app/api/randomUserApi";
import { SimpleLineIcons } from "@expo/vector-icons";

export function HomeScreen() {
  const { data } = useGetRandomUsersQuery();

  return (
    <View style={styles.container}>
      {data
        ? data.results.map((user, index) => (
            <View key={index} style={styles.row}>
              <SimpleLineIcons name="star" size={12} color="green" />
              <Text>
                {user.name.first} {user.name.last}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
