import React from 'react';
import {View, StyleSheet} from 'react-native';
const THUMB_RADIUS = 12;

export const Thumb = ({}) => {
  return <View style={styles.thumb} />;
};
export const Thumb_1 = ({}) => {
  return <View style={styles.thumb} />;
};
export const RailSelected = () => {
  return <View style={styles.railSelected} />;
};
export const Rail = () => {
  return <View style={styles.rail} />;
};
export const Notch = () => {
  return <View style={styles.notch} />;
};
export const Label = ({...restProps}) => {
  return <View style={styles.label} {...restProps} />;
};
const styles = StyleSheet.create({
  slider: {},
  thumb: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#9BA57E',
  },
  railSelected: {
    height: 4,
    backgroundColor: '#9BA57E',
    borderRadius: 2,
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#7f7f7f',
  },
  notch: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#9BA57E',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
  label: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#9BA57E',
    borderRadius: 4,
  },
  value: {
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
