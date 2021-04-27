import React, { Component } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/RootNavigation';
import { getListAsync } from 'services/SWAPI';
import { Film } from 'types/StarWarsTypes';
import List from 'components/List';
import Loading from 'components/Loading';
import Error from 'components/Error';
import { GetListReturnType } from 'types/SWAPITypes';

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
  data: GetListReturnType | null,
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
      const data = await getListAsync('Film');
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
      return <List data={results} />;
    };

    return <Loading />;
  }
};

export default FilmsList;