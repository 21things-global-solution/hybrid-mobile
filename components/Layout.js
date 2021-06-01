import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          backgroundColor={styles.primary.backgroundColor}
          foregroundColor="#fff"
          {...this.props}
        />
        {this.props.children}
        <StatusBar barStyle="light-content" backgroundColor={styles.primary.backgroundColor} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#f12',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
});
