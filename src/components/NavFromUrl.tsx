import React, { Component } from 'react';
import { getItemByUrlAsync } from 'services/Swapi';
import { StarWarsType, StarWarsItem, URL } from 'types/StarWarsTypes';
import NavItem from 'components/NavItem';

type Props = {
  type: StarWarsType,
  url: URL
};

type State = {
  item: StarWarsItem | null,
  error: any | null,
};
  
class NavFromUrl extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      item: null,
      error: null,
    };
  };

  async componentDidMount() {
    try {
      const { type, url } = this.props;
      const item = await getItemByUrlAsync(type, url) as StarWarsItem;
      this.setState({ item });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { item, error } = this.state;

    if (error) {
      return null;
    };

    if (item) {
      return <NavItem item={item} />;
    };

    return null;
  };
};

export default NavFromUrl;