import React from "react";
import { getMonthName } from "../../services/editHoursSev";
import { Link } from "react-router-dom";
import {
  TableHead ,
  TableRow,
  TableCell ,
  Table ,
  TableBody,
  Typography ,
  Button
} from "@material-ui/core"
import { withStyles, makeStyles } from '@material-ui/core/styles';


const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#2D4454',
    color: '#ECCEA0',
    fontStyle: 'Space Mono'

  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#8C877D',
      color:"#ECCEA0",
      fontStyle: 'Space Mono',

    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  typographyH2:{
    fontStyle: 'Space Mono',
    color:'#8E0E06',
    fontSize:"5vh",
    marginTop: "5%"

  } ,
  button: {
    fontStyle: "Space Mono",
    backgroundColor: "#2D4454",
    color:'rgb(231, 230, 230)',
    marginTop: "2%",
    marginLeft:'5%',
    textDecoration:'none'
  }
});
function UserHours({
  monthData,
 
}) {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.typographyH2}>{getMonthName(monthData[0].month_number)}</Typography>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell>Hour</StyledTableCell>
          </TableRow>
        </TableHead>
        {monthData.map((item, index) => (
          <TableBody key={index}>
            <StyledTableRow >
              <StyledTableCell >{item.day_number}</StyledTableCell >
              <StyledTableCell >{item.hour_logged}</StyledTableCell >
            </StyledTableRow >
          </TableBody>
        ))}
      </Table>
      <Link to="/edit">
        <Button className={classes.button}>Edit</Button>
      </Link>
    </div>
  );
}



export default (UserHours)