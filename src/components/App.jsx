import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = { query: '' };

  onSubmitSearch = value => {
    this.setState(value);
    return true;
  };

  render() {
    return (
      <Box>
        <Searchbar onSubmit={this.onSubmitSearch} />
      </Box>
    );
  }
}
