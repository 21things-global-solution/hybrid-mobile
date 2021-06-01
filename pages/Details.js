import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import { data } from '../data';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, route } = this.props;
    const item = data.filter(item => item.id === route.params.itemId)[0];

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={item.details.name}
          excerpt={`${item.details.stars} estrelas`}
          backgroundColor="#f12"
          foregroundColor="#fff"
        />
        <Image source={item.details.image} style={{ width: '100%', height: 350 }} />
        <View style={styles.content}>
          <View>
            <View style={styles.row}>
              <Text style={[styles.contentSize, styles.itemLabel]}>Endereço:</Text>
              <Text style={[styles.contentSize, styles.itemContent]}>{item.details.address}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.contentSize, styles.itemLabel]}>Telefone:</Text>
              <Text style={[styles.contentSize, styles.itemContent]}>{item.details.phone}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.contentSize, styles.itemLabel]}>Preço:</Text>
              <Text style={[styles.contentSize, styles.itemContent]}>
                {item.details.price.toFixed(2)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#f12',
              padding: 10,
              maxWidth: 100,
              borderRadius: 5,
              alignSelf: 'center',
            }}
            onPress={navigation.goBack}
          >
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>Fechar</Text>
          </TouchableOpacity>
        </View>
        <StatusBar barStyle="light-content" backgroundColor="#f12" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentSize: {
    fontSize: 18,
  },
  content: {
    padding: 12,
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemLabel: {
    fontWeight: 'bold',
    marginRight: 15,
    width: 75,
  },
  itemContent: {
    flexShrink: 1,
  },
});
