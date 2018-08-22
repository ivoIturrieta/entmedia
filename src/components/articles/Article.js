import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { database } from "../../firebase";
import { connect } from "react-redux";

import EditorRead from "../editor/EditorRead";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4
  },
  mainPostContent: {
    padding: `${theme.spacing.unit * 6}px`
  }
});

class Article extends Component {
  componentDidMount() {
    this.ref = database.ref("/").on("value", snapshot => {
      this.props.onSaveEditorState({ data: snapshot.val()["articles"] });
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper elevation={14} className={classes.root} elevation={1}>
          <EditorRead article={this.props.article} />
        </Paper>
      </div>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    article: state.articles[0]
  };
};

const mapDispatchToProps = dispatch => ({
  onSaveEditorState: article => {
    dispatch({
      type: "UPDATE_EDITOR_STATE",
      payload: article
    });
  }
});

const ConnectedEditor = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ConnectedEditor(withStyles(styles)(Article));
