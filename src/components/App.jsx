import { Component } from 'react';
import { Box } from './Box';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box>
        <Searchbar onSubmit={() => {}} />
      </Box>
    );
  }
}
