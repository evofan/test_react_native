import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={styles.buttonBack}>
        <TouchableHighlight style={styles.circleButton}
          onPress={() => alert("Button Pushed !")}
        >
          <Text style={styles.buttonText}>Push</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBack: {
    backgroundColor: "yellow",
    width: "55%",
    height: "60%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    padding: 5,
    height: 100,
    width: 100,
    borderRadius: 200,
    backgroundColor: "red",
    overflow: "hidden",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    shadowOpacity: 1,
    elevation: 2
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

