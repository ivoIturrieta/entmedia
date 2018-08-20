import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InvestorReq from "./InvestorReq";

const styles = theme => ({
  contentWrapper: {
    display: "flex"
  }
});

class InvestorTab extends Component {
  state = { expanded: false };

  render() {
    const { classes, location } = this.props;

    return (
      <span>
        <div className={classes.contentWrapper}>
          <InvestorReq
            name="Beneficiarios"
            requisitos={this.props.investor.beneficiario}
          />
          <InvestorReq
            name="Financiamiento"
            requisitos={this.props.investor.financiamiento}
          />
        </div>
        <div className={classes.contentWrapper}>
          <InvestorReq
            name="Resultados Esperados"
            requisitos={this.props.investor.esperado}
          />
        </div>
      </span>
    );
  }
}

InvestorTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InvestorTab);
