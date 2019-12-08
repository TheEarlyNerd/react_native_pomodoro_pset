import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { CircularProgress } from 'react-native-svg-circular-progress'

import vibrate from '../utils/vibrate'

// Custom Hooks
import useTimer from '../hooks/useTimer'


const fullScreen = Math.floor(Dimensions.get('window').width * (4 / 5))


const CircleTimer = ({ setNewTime, length }) => {

  let initialTime = 60 * length
  const timer = useTimer(initialTime * 10)

  const remainingSecs = Math.floor(timer.time / 10)
  const remainingMins = Math.floor(remainingSecs / 60)
  const currPercent = ((initialTime * 10 - timer.time) / (initialTime * 10)) * 100

  if (timer.time === 0) {
    vibrate()
    setNewTime(0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressCircle}>
        <CircularProgress size={fullScreen + 20} progressWidth={fullScreen / 2} percentage={currPercent} donutColor='grey' />
        <View style={styles.circleContainer}>
          <View style={styles.innerCircle}>
            <View style={styles.timer}>
              <Text style={styles.minutes}>{remainingMins}</Text>
              <Text style={styles.seconds}>{remainingSecs % 60}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.controls}>
        <View>
          <TouchableOpacity onPress={timer.reset}>
            <MaterialCommunityIcons name="refresh" size={50} color="grey" />
          </TouchableOpacity>
        </View>
        <View>
          {timer.paused
            ? <TouchableOpacity onPress={timer.start}>
              <MaterialCommunityIcons name="play-circle" size={50} color="green" />
            </TouchableOpacity>
            : <TouchableOpacity onPress={timer.stop}>
              <MaterialCommunityIcons name="stop-circle" size={50} color="red" />
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  circleContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    width: fullScreen,
    height: fullScreen,
    borderRadius: fullScreen / 2,
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  minutes: {
    lineHeight: 0,
    fontSize: 55,
    paddingLeft: 10,
    paddingRight: 5,
  },
  seconds: {
    lineHeight: 0,
    fontSize: 28,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 100,
    marginBottom: 180,
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: Dimensions.get('window').width / 4,
    paddingVertical: 10,
    alignItems: 'stretch',
  }
})

export default CircleTimer
