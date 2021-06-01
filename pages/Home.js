import React from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/Layout';
import ListItem from '../components/ListItem';
import { data } from '../data';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList = ({ item }) => {
    const { navigation } = this.props;

    return (
      <ListItem
        {...item}
        onPress={id =>
          navigation.navigate('Details', {
            itemId: id,
          })
        }
      />
    );
  };

  render() {
    return (
      <Layout title="Hotéis">
        <FlatList data={data} keyExtractor={item => item.id} renderItem={this.renderList} />
      </Layout>
    );
  }
}
