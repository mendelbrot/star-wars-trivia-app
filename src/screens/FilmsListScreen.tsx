import React, { Component } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/RootNavigation';
import { GetFilmsListAsync } from 'services/SWAPI';
import { Film } from 'types/StarWarsItems';
import List from 'components/List';
import Loading from 'components/Loading';
import Error from 'components/Error';

type FilmsListScreenRouteProp = RouteProp<
  RootStackParamList,
  'FilmsListScreen'
>;

type FilmsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FilmsListScreen'
>;

type Props = {
  route: FilmsListScreenRouteProp;
  navigation: FilmsListScreenNavigationProp;
};

type State = {
  data: Film[] | null,
  error: any | null,
};

class FilmsList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: null,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await GetFilmsListAsync();

      this.setState({
        data,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
  
  render() {
    const { data, error } = this.state;

    if (error) {
      return <Error />;
    };

    if (data) {
      return <List data={data} />;
    };

    return <Loading />;
  }
};

export default FilmsList;