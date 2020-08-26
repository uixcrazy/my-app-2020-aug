import React, { useState } from "react";
import withStyles from "react-jss";
import Sidebar from "react-sidebar";
import { ToastContainer } from "react-toastify";
import { MenuContextProvider } from "core/rcontext/MenuContext";
import Header from "./Header";
import SidebarContent from "./Sidebar";

const MainContent = withStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
})(
  function MainContent ({ classes, children }) {
    return (
      <div className={classes.wrapper}>
        <main className={classes.main}>
          {children}
        </main>
        <ToastContainer />
      </div>
    );
  }
);


export default ({ children, route }) => {
  const [sidebarDocked, setSidebarDock] = useState(true);
  const onToggleSidebar = () => {
    setSidebarDock(!sidebarDocked);
  };
  return (
    <MenuContextProvider route={route}>
      <Sidebar
        sidebar={<SidebarContent />}
        docked={sidebarDocked}
        shadow={false}
      >
        <Header onToggleSidebar={onToggleSidebar} />
        <MainContent>{children}</MainContent>
      </Sidebar>
    </MenuContextProvider>
  );
};
