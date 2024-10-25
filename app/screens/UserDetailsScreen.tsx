import { Pressable, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import { useGetRandomUserQuery } from "@/app/api/randomUserApi";
import { SimpleLineIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "UserDetails">;

export function UserDetailsScreen({ route, navigation }: Props) {
  const { userId } = route.params;
  const { data: user } = useGetRandomUserQuery(userId);

  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePressBack}>
        <SimpleLineIcons name="arrow-left" size={12} color="green" />
      </Pressable>
      <Text>{user?.name.first}</Text>
      <Text>{user?.name.last}</Text>
      <Text>{user?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
