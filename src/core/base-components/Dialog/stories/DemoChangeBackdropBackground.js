import React, { useState } from 'react';
import withStyles from "react-jss";
import Dialog from "../Dialog";
import Lipsum from "../../common/Lipsum";

const styleDialog = {
  WebkitBoxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
  boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
  borderRadius: '3px',
  background: '#fff',
  color: '#587d8b',
  padding: 20,
  minWidth: 300,
  maxWidth: "80%",
  maxHeight: '90%',
  overflow: 'auto',
};

const DemoChangeBackdropBackground = ({ classes }) => {
  const [dialogContent, setDialogContent] = useState(null);
  return (
    <div className="stories-description">
      <button
        className="stories-link"
        onClick={() =>
          setDialogContent(
            <div style={styleDialog}>
              <Lipsum />
            </div>
          )
        }
      >
        open dialog no.1
      </button>
      <Dialog
        backdropClass={classes && classes.caroStyle}
        backdropStyle={{
          backgroundColor: classes
            ? "rgba(0, 0, 0, 0.02)"
            : "rgba(0, 0, 0, 0.5)",
        }}
        onClose={() => setDialogContent(null)}
      >
        {dialogContent}
      </Dialog>
      <div>
        <button
          className="stories-link"
          onClick={() =>
            setDialogContent(<div style={styleDialog}>content 01</div>)
          }
        >
          open dialog no.2
        </button>
      </div>
      <Lipsum />
    </div>
  );
};

export { DemoChangeBackdropBackground as DemoDefaultBackdropBackground };
export default withStyles({
  caroStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px)',
    backgroundSize: '8px 8px',
  }
})(DemoChangeBackdropBackground);