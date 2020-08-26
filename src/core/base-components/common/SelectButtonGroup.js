import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

class SelectButtonGroup extends React.Component {
  state = {
    selected: this.props.data.find(item => item.id === this.props.selectedId)
  }

  render() {
    const {classes, data, style} = this.props;
    const {selected} = this.state;

    return (
      <ul className={classes.selectGroup} style={style}>
        {data.map((item,i) => (
          <li
            key={i+item.id}
            onClick={() => {
              if (this.state.selected.id !== item.id) {
                this.props.onChange(item);
                this.setState({selected: item})
              }
            }}
            className={selected.id === item.id ? classes.selected : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
};

SelectButtonGroup.propTypes = {
  classes: PropTypes.object,
  style: PropTypes.object,
  data: PropTypes.array.isRequired,
  selectedId: PropTypes.number,
};

SelectButtonGroup.defaultProps = {
  data: [
    {id: null, name: "All"},
    // {id: 1, name: "Sunflower"},
    // {id: 2, name: "Petunia"},
    // {id: 3, name: "Hibiscus"},
    // {id: 4, name: "Marigold"}
  ],
  selectedId: null || '',
};

 const styles = {
  selected: {},
  selectGroup: {
    display: 'flex',
    border: '1px solid transparent',
    borderRight: 'none',
    borderBottom: 'none',
    listStyle: 'none',
    backgroundColor: '#fff',
    userSelect: 'none',
    width: '100%',
    '& li': {
      border: '1px solid var(--color-border)',
      height: 34,
      lineHeight: '34px',
      margin: '-1px 0 0 -1px',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
      padding: '0 10px',
      cursor: 'pointer',
      zIndex: '1',
      textAlign: 'center',

      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      '&:first-child': {
        borderRadius: '3px 0 0 3px',
      },
      '&:last-child': {
        borderRadius: '0 3px 3px 0',
      },
      '&$selected': {
        zIndex: '3',
        borderColor: 'var(--color-primary-lighter)',
        backgroundColor: 'var(--color-primary-lighter)',
        color: '#fff',
        cursor: 'default',
      }
    }
  },
};

export default withStyles(styles)(SelectButtonGroup);