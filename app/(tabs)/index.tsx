import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const handleLogout = () => {
    useAuth.getState().logout();
  };

  return (
    <>
      <Text className="absolute top-5 right-5" onPress={handleLogout}>
        Logout
      </Text>
      <View className="display flex-1 justify-center items-center">
        <Text className="text-4xl">Yacht Dice</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("@/assets/images/throwDice.png")}
        />
      </View>
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
