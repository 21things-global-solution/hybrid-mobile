import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../components/Header';
import { data } from '../data';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({
    item: {
      details: { name, price },
    },
  }) => (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          padding: 12,
        }}
      >
        <Text>{name}</Text>
        <Text>R$ {price}</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          backgroundColor={styles.primaryBg.backgroundColor}
          foregroundColor={styles.textWhite.color}
          title="Hotéis"
          excerpt=""
        />
        <FlatList data={data} keyExtractor={item => item.id} renderItem={this.renderItem} />
        <StatusBar barStyle="light-content" backgroundColor={styles.primaryBg.backgroundColor} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff',
  },
  primaryBg: {
    backgroundColor: '#f12',
  },
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
});
