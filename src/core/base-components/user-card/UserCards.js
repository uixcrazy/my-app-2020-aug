import React, {Fragment} from 'react';
import withStyles from "react-jss";
import PropTypes from "prop-types";
import UserCard from "./UserCard";

const UserCards = ({ classes, data }) => {
  // if data null
  return (
    <div className={classes.list}>
      {data.map((item, index) => <UserCard key={index.toString()} {...item} />)}
    </div>
  );
};

UserCards.propTypes = {

};

const styles = {
  list: {
    paddingTop: "5rem",

    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: 'space-around',
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
  },
};

export default withStyles(styles)(UserCards);
