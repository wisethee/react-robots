import { Component } from 'react';

import './search-box.styles.scss';

type SearchBoxProps = {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
};

class SearchBox extends Component<SearchBoxProps> {
  override render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={this.props.onSearchChange}
      />
    );
  }
}

export default SearchBox;
