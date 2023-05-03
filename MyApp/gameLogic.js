import {View, StyleSheet} from 'react-native';

export default class Game {
  static board = new Array();
  static matrix = new Array();
  static colorMap = new Map();
  static insertValue = 2;
  static score = 0;
  static styles = StyleSheet.create({
    gameRow: {
      height: 90,
      gap: 7,
      flexDirection: 'row',
    },
    gameBox: {
      width: 90,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#dddfcf',
    },
  });

  // sets up the game board
  static initialize() {
    for (var i = 0; i < 4; i++) {
      var row = [];
      var box;
      for (var j = 0; j < 4; j++) {
        box = (
          <View key={`${i}-${j}`} style={Game.styles.gameBox}>
            {Game.matrix[i][j]}
          </View>
        );
        row.push(box);
      }
      var newRow = (
        <View style={Game.styles.gameRow} key={i}>
          {row}
        </View>
      );

      Game.board.push(newRow);
    }
  }

  // randomly matches color to value
  static matchColorWithValues() {
    let cL = [
      '#eee4da',
      '#eee1c9',
      '#f3b27a',
      '#d63384',
      '#b12ddd',
      '#FF7F4F',
      '#87FF4F',
      '#A3FFCE',
      '#A3FFFF',
      '#A3BEFF',
      '#CAA3FF',
    ];
    for (
      let num = 2, i = cL.splice(Math.floor(Math.random() * cL.length), 1)[0];
      num <= 2048;
      num += num, i = cL.splice(Math.floor(Math.random() * cL.length), 1)[0]
    ) {
      Game.colorMap.set(num, i);
    }
  }

  static getEmptyCells() {
    var emptyCellsIdxArray = new Array();
    Game.matrix.forEach((row, i) =>
      row.forEach((val, j) => {
        if (!val) {
          emptyCellsIdxArray.push([i, j]);
        }
      }),
    );
    return emptyCellsIdxArray;
  }

  static getRandomIndex(indicesArray) {
    let min = 0;
    let max = indicesArray.length;
    return indicesArray[Math.floor(Math.random() * (max - min) + min)];
  }

  static retriveRandomValue() {
    const twoOrFour = [2, 4];
    const max = 1;
    const min = 0;
    return twoOrFour[Math.floor(Math.random() * (max - min + 1) + min)];
  }

  static startGame() {
    // starting the game requires us to pick the value to be inserted,
    // as well as picking an cell
    for (let i = 0; i < 2; i++) {
      let initialValue = Game.retrieveRandomValue(),
        [row, col] = Game.getRandomIndex(Game.getEmptyCells());
      Game.matrix[row][col] = initialValue;
    }
  }
}
