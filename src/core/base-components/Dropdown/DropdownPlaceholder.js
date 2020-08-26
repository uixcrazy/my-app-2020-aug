import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isArrayEmpty} from "utils";
import Dropdown from ".";

class DropdownPlaceholder extends Component {
  state = {
    selected: this.props.data.find(item => item.id == this.props.selectedId)
  }

  onChange(item) {
    const {name, onChange} = this.props;
    this.dropdownRef.toggle(false);
    onChange && onChange({name, value: item.id});
    this.setState({selected: item})
  }

  render() {
    const {data, placeholder} = this.props;
    const {selected} = this.state;

    if (isArrayEmpty(data)) return null;

    return (
      <Dropdown
        {...this.props}
        innerRef={comp => this.dropdownRef=comp}
        label={selected ? selected.name : <span className="txt--placeholder">{placeholder}</span>}
      >
        <ul className="custom-scrollbar" style={{maxHeight: 300}}>
          {data.map((item, index) => {
            const isActive = selected && selected.id === item.id;
            return (
              <li key={index}
                onClick={() => {
                  this.onChange(item);
                }}
                disabled={isActive}
                className={isActive ? 'active' : ''}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </Dropdown>
    )
  }
}

DropdownPlaceholder.propTypes = {
  data: PropTypes.array.isRequired,
  selectedId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

DropdownPlaceholder.defaultProps = {
  data: [
    // {id: 3, name: "Hibiscus"},
  ],
  selectedId: null,
  placeholder: "Select an option",
};

export default DropdownPlaceholder;
