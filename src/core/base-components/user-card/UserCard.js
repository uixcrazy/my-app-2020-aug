import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";
import styles from "./UserCard.style";

const UserCard = ({ classes, id, name, username, email, website, address }) => {
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <p className={classes.name}>{name}</p>
        <p className={classes.prof}>{username}</p>
        <p className={classes.pider}></p>
        <p className={classes.bio}>
          {address.street}, {address.suite}, {address.city}
        </p>
        <button className={classes.btn}>CONTACT ME</button>
      </div>
      <div className={classes.photo}>
        <img src={`https://i.pravatar.cc/300?img=${id}`} alt={name}/>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  address:  PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      long: PropTypes.string,
    })
  }),
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.shape({
    name: PropTypes.string,
    catchPhrase: PropTypes.string,
    ba: PropTypes.string,
  })
};

export default withStyles(styles)(UserCard);
