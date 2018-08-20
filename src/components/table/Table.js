import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import CardPhotos from "../card/CardMedia";
import { rows } from "../pages/CoworkData";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  heading: {
    textDecoration: "underline"
  },
  linkButton: {
    textDecoration: "none"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const GeneralTableCell = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Logo</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Precios</CustomTableCell>
            <CustomTableCell>Ubicacion</CustomTableCell>
            <CustomTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  <CardPhotos image={row.image} />
                </CustomTableCell>
                <CustomTableCell>{row.name}</CustomTableCell>
                <CustomTableCell>
                  <Typography className={classes.heading} variant="subheading">
                    Escritorios
                  </Typography>
                  <Typography>Hot Desk: ${row.prices.hotDesk}</Typography>
                  <Typography>
                    Dedicated Desk: ${row.prices.dedicated}
                  </Typography>
                  {row.prices.partTime && (
                    <Typography>Part Time: ${row.prices.partTime}</Typography>
                  )}
                  {row.prices.dayPass && (
                    <Typography>Day Pass: ${row.prices.dayPass}</Typography>
                  )}
                </CustomTableCell>
                <CustomTableCell>
                  <Typography>{row.location}</Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Typography>
                    <Link
                      className={classes.linkButton}
                      to={{ pathname: `cowork/${row.id}`, cowork: row }}
                    >
                      Ver Más?
                    </Link>
                  </Typography>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

TableCell.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GeneralTableCell);
