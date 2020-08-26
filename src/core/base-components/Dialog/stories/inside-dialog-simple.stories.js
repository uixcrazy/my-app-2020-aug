import React from "react";
import { storiesOf } from "@storybook/react";

import DialogInside from "../DialogInside";
import DialogContentAlert from "../DialogContentAlert";
import Lipsum from "../../common/Lipsum";

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
          // style={{ width: 390 }}
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
        <DialogInside onClose={this.closeDialog}>
          {this.state.dialogContent}
        </DialogInside>
      </div>
    )
  }

}

storiesOf('base-components/Dialog', module)
  .add("07. Dialog Inside - don't have container", () => <Demo />)
  .add("07.1 Dialog Inside - don't have container", () =>
    <div>
      <Demo />
      <Lipsum />
    </div>
  )
  .add("08. Dialog Inside", () =>
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
  .add("08. Dialog Inside - long text", () =>
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
        <Lipsum />
      </div>
    </div>
  )
