import { useAuth } from "@/hooks/useAuth"; // ✅ Zustand 훅 불러오기
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
  const { login } = useAuth(); // ✅ Zustand에서 로그인 함수 가져오기
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace("/");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">로그인 페이지</Text>
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
}
