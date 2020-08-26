import React from "react";
import { storiesOf } from "@storybook/react";

import DialogInside from "../DialogInside";
import DialogContentAlert from "../DialogContentAlert";

class Demo extends React.PureComponent {
  state = {
    dialogContent: null
  };

  closeDialog = () => {
    this.setState({ dialogContent: null });
  };

  openDialogNoOne = () => {
    this.setState({
      dialogContent: (
        <DialogContentAlert
          style={{
            width: 390,
            top: 120,
            margin: "0 auto"
          }}
          onClose={this.closeDialog}
        >
         <p>
          this is dialog inside a box!!!
          <br />
          ...
          <span
            onClick={() => {
              this.closeDialog();
            }}
          >
            Cancel
          </span>
        </p>
        </DialogContentAlert>
      )
    });
  }


  render() {
    return (
      <div className="stories-description">
        <button
          className="stories-link"
          onClick={this.openDialogNoOne}
        >
          open dialog no.2
        </button>
        <DialogInside
          style={{
            display: "block"
          }}
          onClose={this.closeDialog}
        >
          {this.state.dialogContent}
        </DialogInside>
      </div>
    )
  }

}

storiesOf("base-components/Dialog", module)
  .add("05. Dialog Inside - don't have container", () => <Demo />)
  .add("06. Dialog Inside", () =>
    <div
      className="stories-box"
      style={{
        width: '100%',
        minHeight: '355px',
        padding: '25px 18px 25px 25px',
        position: 'relative',
      }}
    >
      <div
        style={{
          padding: 30,
          background: "bisque",
        }}
      >
        Test with div inside has padding 30px
        <Demo />
      </div>
    </div>
  )
