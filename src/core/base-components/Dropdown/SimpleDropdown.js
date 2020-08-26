import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from ".";

class SimpleDropdown extends React.Component {
  state = {
    selected: this.props.data.find(item => item.id === this.props.selectedId)
  }

  onChange(item) {
    const {onChange} = this.props;
    const {selected} = this.state;
    if (selected.id !== item.id) {
      this.dropdownRef.toggle(false);
      onChange && onChange(item);
      this.setState({selected: item})
    }
  }

  render() {
    const {data, style, valKey = 'name'} = this.props;
    const {selected} = this.state;

    return (
      <Dropdown
        style={style}
        innerRef={comp => this.dropdownRef=comp}
        label={selected && selected.name}
      >
        <ul className="custom-scrollbar" style={{maxHeight: 300}}>
          {data.map((item, index) => (
            <li key={index}
              onClick={() => {
                this.onChange(item);
              }}
              disabled={selected && selected.id === item.id}
              className={selected && selected.id === item.id ? 'active' : ''}
            >
              {item[valKey]}
            </li>
          ))}
        </ul>
      </Dropdown>
    )
  }
}

SimpleDropdown.propTypes = {
  data: PropTypes.array.isRequired,
  selectedId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

SimpleDropdown.defaultProps = {
  data: [
    {id: '', name: "All"},
    // {id: 1, name: "Sunflower"},
    // {id: 2, name: "Petunia"},
    // {id: 3, name: "Hibiscus"},
    // {id: 4, name: "Marigold"}
  ],
  selectedId: '',
};

export default SimpleDropdown;
