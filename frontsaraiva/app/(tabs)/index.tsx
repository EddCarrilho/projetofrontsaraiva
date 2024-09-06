import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.caixa}>
      <View style={styles.header}> </View>
      <View style={styles.carousel}> </View>
      <View style={styles.content}> </View>
    </View>
  );
}

const styles = StyleSheet.create({

  caixa:{
    flexDirection:"row",
    flex:1,
    padding:30,
    backgroundColor:"black"
  },
  header:{
    flex:1,
    backgroundColor:"yellow"
  },
  carousel:{
    flex:2,
    backgroundColor:"red"
  },
  content:{
    flex:3,
    backgroundColor:"green"
  },

  txtCaixa:{
    display:"flex",
    fontSize:32,
    color:"white",
    justifyContent:"center"
  },


  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
