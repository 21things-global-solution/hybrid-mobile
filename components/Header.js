import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { excerpt, title, foregroundColor, backgroundColor } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: backgroundColor || 'transparent' }]}>
        <Text style={[styles.titleSize, { color: foregroundColor || '#000' }]}>{title}</Text>
        {excerpt.toString().trim() !== "" && (
          <Text style={[styles.excerptSize, { color: foregroundColor || '#000' }]}>{excerpt}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
  },
  titleSize: {
    fontSize: 20,
  },
  excerptSize: {
    fontSize: 14,
  },
});
