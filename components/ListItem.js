import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { details, id, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
        <Text>{details.name}</Text>
        <Text>R$ {details.price}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 12,
  },
});
