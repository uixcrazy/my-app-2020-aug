import Head from "next/head";
import React, { useContext } from "react";
import withStyles from "react-jss";
import { MenuContext } from "core/rcontext/MenuContext";
import { DehazeIcon } from "icons";

export default withStyles({
  header: {
    fontSize: "0.875rem",
    background: "#fff",
    height: "var(--height-header)",
    borderBottom: "1px solid #d8dbe0",
  },
  headerCt: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 .5rem",
  },
  headerCtLeft: {
    color: "var(--color-label)",
    display: "flex",
    fontSize: "1.125rem",
    alignItems: "center",
  },
  btnToggle: {
    marginRight: ".25rem",
    display: "flex",
    "& svg": {
      fontSize: "1.75rem",
    },
  },
})(({ classes, onToggleSidebar }) => {
  const [selected] = useContext(MenuContext);
  return (
    <>
      <Head>
        <title>Admin : {selected.name}</title>
      </Head>
      <header className={classes.header}>
        <div className={classes.headerCt}>
          <div className={classes.headerCtLeft}>
            <button className={classes.btnToggle} onClick={onToggleSidebar}>
              <DehazeIcon />
            </button>
            {selected.name}
          </div>
          aaaaaa
        </div>
      </header>
    </>
  );
});
