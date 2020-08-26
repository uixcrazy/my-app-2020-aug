import React, { useContext } from "react";
import withStyles from "react-jss";
import { MENU_LIST, MenuContext } from "core/rcontext/MenuContext";

const MenuItem = ({ item, itemNameClass }) => {
  const ItemIcon = item.icon;
  return (
    <>
      <span className="svg-icon-with-txt">
        <ItemIcon />
      </span>
      <span className={itemNameClass}>{item.name}</span>
    </>
  );
};

const SidebarContent = ({ classes }) => {
  /** instead of
  * <MenuContext.Consumer>
    {({selected, onSelect}) => (
  */
  const [selected, onSelectMenu] = useContext(MenuContext);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <a className={`${classes.homelink} homelink`}  href="link.html">
          <img src="/logo.png" alt="bagiatronghoa" />
        </a>
      </div>
      <ul className={classes.menu}>
        {MENU_LIST.map((item, index) => {
          return item.id === selected.id ? (
            <li key={index}>
              <div className={[classes.item, "active"].join(" ")}>
                <MenuItem item={item} itemNameClass={classes.itemName} />
              </div>
            </li>
          ) : (
            <li key={index} onClick={() => onSelectMenu(item)}>
              <a className={classes.item} href="link.html">
                <MenuItem item={item} itemNameClass={classes.itemName} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "15rem",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    height: "var(--height-header)",
    borderBottom: "1px solid #d8dbe0",
  },
  homelink: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "90%",
    },
  },
  menu: {
    flex: "1 1",
    background: "#2f353a",
    color: "#fff",
    height: "100%",
    paddingTop: ".5rem",
    fontSize: "0.875rem",
  },
  item: {
    display: "flex",
    flex: "1 1",
    alignItems: "center",
    padding: ".8445rem 1rem",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "borderColor .3s,color .3s",
    color: "hsla(0,0%,100%,.8)",
    borderTop: "1px solid transparent",
    borderBottom: "1px solid transparent",
    "&:hover:not(.active)": {
      color: "hsla(0,0%,100%,1)",
      borderColor: "#384146",
    },
    "&.active": {
      background: "#34393c",
      // color: "#2f353a",
      // background: '#c2c9d0',
    },
  },
  itemName: {
    marginLeft: "15px",
  },
};

SidebarContent.displayName = 'Sidebar';

export default withStyles(styles)(SidebarContent);
