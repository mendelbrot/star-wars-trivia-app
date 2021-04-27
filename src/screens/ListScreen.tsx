import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/RootNavigation';
import { getListAsync } from 'services/Swapi';
import List from 'components/List';
import Loading from 'components/Loading';
import Error from 'components/Error';
import { GetListReturnType } from 'types/SwapiTypes';
import { StarWarsType } from 'types/StarWarsTypes';
import StarWarsViewModel from 'models/StarWarsViewModel';

type ListScreenRouteProp = RouteProp<
  RootStackParamList,
  'ListScreen'
>;

type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListScreen'
>;

type Props = {
  route: ListScreenRouteProp;
  navigation: ListScreenNavigationProp;
};

type State = {
  data: GetListReturnType | null,
  error: any | null,
};

class ListScreen extends Component<Props, State> {
  type: StarWarsType;
  title: string;

  constructor(props: Props) {
    super(props);

    this.state = {
      data: null,
      error: null,
    };

    this.type = this.props.route.params.type;
    this.title = StarWarsViewModel[this.type].pluralLabel;
  };

  async componentDidMount() {
    try {
      const data = await getListAsync(this.type);
      this.setState({data});
    } catch (error) {
      this.setState({error});
    }
  };
  
  render() {
    const { data, error } = this.state;

    if (error) {
      return <Error />;
    };

    if (data) {
      const { results } = data;
      return <List items={results} key='url' />;
    };

    return <Loading />;
  }
};

export default ListScreen;