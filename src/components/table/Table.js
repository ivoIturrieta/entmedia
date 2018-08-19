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
import Maps from "../Maps";
import CardPhotos from "../card/CardMedia";
import wework from "../../img/wework.jpg";
import edge from "../../img/edge2.png";
import santander from "../../img/workcafe1.jpg";
import latam from "../../img/ltama2.png";

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
  linkButton: {},
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(image, name, prices, location, website, map) {
  id += 1;
  return { id, name, prices, location, website, map, image };
}

const rows = [
  createData(
    wework,
    "WeWork",
    { hotDesk: "165.000", dedicated: "188.000" },
    "Avda. Apoquindo 5950",
    "https://www.wework.com/",
    { lat: -33.409023, lng: -70.568871 }
  ),
  createData(
    edge,
    "Edge Cowork - El Golf",
    {
      hotDesk: "159.000",
      dedicated: "199.000",
      partTime: "119.000",
      dayPass: "19.000"
    },
    "San Sebastian 2909",
    "https://edgecowork.com/ubicaciones/el-golf/",
    { lat: -33.414708, lng: -70.600182 }
  ),
  createData(
    santander,
    "Work Café / Banco Santander",
    "",
    "Av. Apoquindo 3575, Las Condes.",
    16.0,
    {
      lat: -33.416258,
      lng: -70.592511
    }
  ),
  createData(
    latam,
    "Latam - El Golf",
    "",
    "Av. Apoquindo 3300, Zócalo Oriente, Las Condes, Santiago",
    3.7,
    {
      lat: -33.416567,
      lng: -70.595789
    }
  )
];

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
            <CustomTableCell>Map</CustomTableCell>
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
                  <Typography
                    className={classes.heading}
                    variant="subheading"
                    color="textPrimary"
                  >
                    Escritorios
                  </Typography>
                  <Typography color="textSecondary">
                    Hot Desk: ${row.prices.hotDesk}
                  </Typography>
                  <Typography color="textSecondary">
                    Dedicated Desk: ${row.prices.dedicated}
                  </Typography>
                  {row.prices.partTime && (
                    <Typography color="textSecondary">
                      Part Time: ${row.prices.partTime}
                    </Typography>
                  )}
                  {row.prices.dayPass && (
                    <Typography color="textSecondary">
                      Day Pass: ${row.prices.dayPass}
                    </Typography>
                  )}
                </CustomTableCell>
                <CustomTableCell>
                  <Typography color="texSecondary">{row.location}</Typography>
                </CustomTableCell>
                <CustomTableCell>
                  <Maps isMarkerShown lat={row.map.lat} lng={row.map.lng} />
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
