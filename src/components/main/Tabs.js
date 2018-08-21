import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import InvestorTab from "../pages/investors/InvestorTab";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
});

class ContentChangeTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, tabs, investor } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label={investor.programa[0]} />
            <Tab label={investor.programa[1]} />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <InvestorTab
              investor={investor}
              headers={[
                "Capital sin comisión",
                "Aceleración y experiencia por 6 meses",
                "Beneficios"
              ]}
              tabValue={investor[0]}
            />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>1</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

ContentChangeTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentChangeTabs);
