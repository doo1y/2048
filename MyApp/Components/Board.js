import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

const Board = props => {
  return <View style={styles.gameBoard}>{props.board}</View>;
};

const styles = StyleSheet.create({
  gameBoard: {
    flex: 0,
    width: 390,
    height: 390,
    backgroundColor: '#fdffc0',
    borderRadius: 10,
    marginTop: 150,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },
});

export default Board;
