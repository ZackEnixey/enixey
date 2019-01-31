import React from 'react';
import Select from 'react-select';

class SelectFormComponent extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.selectGenres(selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <Select
          value={selectedOption}
          isMulti={true}
          onChange={this.handleChange}
          options={this.props.options}
        />

      </div>
    );
  }
}

export default SelectFormComponent;