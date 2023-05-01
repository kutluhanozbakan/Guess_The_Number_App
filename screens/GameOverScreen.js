import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import { Image } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={style.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={style.imageContainer}>
        <Image style={style.image} source={require("../assets/success.png")} />
      </View>
      <View>
        <Text style={style.summaryText}>
          Your phone needed <Text style={style.highLight}> {roundsNumber} </Text> rounds to
          guess the number 
          <Text style={style.highLight}> {userNumber} </Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
      </View>
    </View>
  );
}
export default GameOverScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
    marginBottom: 24,
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
