import React, {useState} from 'react';

import {SafeAreaView, Text, View, StyleSheet, Pressable} from 'react-native';
import Game from './gameLogic';
import Board from './Components/Board';

const TwoZeroFourEight = () => {
  const [inGame, setInGame] = useState(false);
  Game.initialize();

  const onStartPress = function () {
    const valArr = new Array();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Board board={Game.board} />
      <Pressable onPress={this.onStartPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.startText}>Start Game</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },

  buttonContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#dfa54f',
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  startText: {
    paddingVertical: 30,
    paddingHorizontal: 70,
    fontSize: 25,
  },
});

export default TwoZeroFourEight;
