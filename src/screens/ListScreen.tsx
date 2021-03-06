import React, { Component } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/RootNavigation';
import { getListAsync, getListByUrlAsync } from 'services/Swapi';
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
  searchQuery: string
};

class ListScreen extends Component<Props, State> {
  type: StarWarsType;
  title: string;

  constructor(props: Props) {
    super(props);

    this.state = {
      data: null,
      error: null,
      searchQuery: ''
    };

    this.type = this.props.route.params.type;
    this.title = StarWarsViewModel[this.type].pluralLabel;

    this.getMoreItems = this.getMoreItems.bind(this);
    this.setSearchQuery = this.setSearchQuery.bind(this);
  };

  async componentDidMount() {
    try {
      const data = await getListAsync(this.type);
      this.setState({ data });
    } catch (error) {
      this.setState({error});
    };
  };

  async getMoreItems() {
    try {
      if (this.state.data) {
        const { next, results } = this.state.data;
        if (next) {
          const nextData = await getListByUrlAsync(this.type, next);
          const data = {
            ...nextData,
            results: results.concat(nextData.results)
          };
          this.setState({ data });
        };
      };
    } catch (error) {
      // pass
    };
  };

  async setSearchQuery(searchQuery: string) {
    try {
      this.setState({ data: null, error: null });
      const data = await getListAsync(this.type, searchQuery);
      this.setState({ data, searchQuery });
    } catch (error) {
      this.setState({ error });
    };
  };
  
  render() {
    const { data, error, searchQuery } = this.state;

    if (error) {
      return <Error />;
    };

    if (data) {
      const { results } = data;
      return (
        <List
          keyAttribute='url'
          items={results}
          getMoreItems={this.getMoreItems}
          setSearchQuery={this.setSearchQuery}
          searchQuery={searchQuery}
        />
      );
    };

    return <Loading />;
  }
};

export default ListScreen;