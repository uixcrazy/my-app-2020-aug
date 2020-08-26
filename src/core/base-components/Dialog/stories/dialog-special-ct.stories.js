import React from "react";
import { storiesOf } from "@storybook/react";

import Dialog from "../Dialog";
import DialogContent from "../DialogContent";
import Lipsum from "../../common/Lipsum";

const styleDialog = {
  WebkitBoxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
  boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
  borderRadius: '5px',
  background: '#fff',
  color: '#587d8b',
  padding: 20,
  minWidth: 300,
  maxWidth: "80%",
};

class Demo extends React.PureComponent {
  state = {
    dialogContent: null
  };

  handleCloseDialog = () => {
    this.setState({ dialogContent: null });
  };

  openDialogNoOne = () => {
    this.setState({ dialogContent: <div style={styleDialog}>content 01</div> });
  }

  openDialogNoTwo = ({content}) => {
    const dialogContent = (
      <DialogContent
        style={{
          minWidth: 300,
          maxWidth: 500,
          paddingTop: 30
        }}
        onClose={this.handleCloseDialog}
      >
        {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <Lipsum />}
      </DialogContent>
    );
    this.setState({ dialogContent });
  }

  render() {
    return (
      <div className="stories-description">
        <Dialog onClose={this.handleCloseDialog}>
          {this.state.dialogContent}
        </Dialog>
        <div>
          <button className="stories-link" onClick={this.openDialogNoOne}>
            open dialog no.1
          </button>
        </div>
        <button className="stories-link" onClick={this.openDialogNoTwo}>
          open dialog no.2
        </button>
        <button className="stories-link" onClick={() => this.openDialogNoTwo({content:
          `<p> . 復讐者」.伯母さん 復讐者」 . 復讐者」. .復讐者」 伯母さん . 復讐者」. 伯母さん 復讐者」. 第十三章 第十八章 第十一章 手配書. 第六章 第九章 第四章 第七章 第三章. .伯母さん 復讐者」.</p>

          <p> 復讐者」. 復讐者」. 第二章 第七章 第五章 第三章 第六章 第八章.伯母さん 復讐者」. 復讐者」.手配書 第十四章 第十八章 第十一章 第十九章. 第十五章 第十二章 第十八章 第十四章 第十九章. .復讐者」 伯母さん.</p>

          <p> . 第十七章 第十六章 第十五章 手配書.手配書 第十六章 第十七章 第十三章. 復讐者」 伯母さん. 伯母さん 復讐者」. 復讐者」. 伯母さん 復讐者」. 第三章 第九章 第七章 第六章 第八章 第五章. 第四章 第八章 第二章 第九章 第五章 第十章. 第十四章 第十九章 第十一章 第十七章. 第九章 第三章 第八章. 第十九章 第十三章 第十四章 第十五章. 第九章 第十章 第三章 第五章 第六章. .復讐者」 伯母さん . .伯母さん 復讐者」 . 復讐者」.</p>`
        })}>
          open dialog no.2 - have data
        </button>
      </div>
    )
  }

}

storiesOf('base-components/Dialog', module)
  .add("04. has special content", () => <Demo />)
