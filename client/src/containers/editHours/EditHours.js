import React, { useEffect, useState } from "react";
import getDataFromHour from "../../services/API/getDataFromHour";
import { connect, useDispatch } from "react-redux";
import { months,filterData } from "../../services/editHoursSev";
import {monthHours} from "../../reducers/actions/index"
import UserHours from "./UserHours";
import "../../style/editHours.scss"
import {
  Typography ,
  Grid,
  Paper,
  Snackbar ,
  Button,
  TextField,
  InputLabel,
  Input,
  InputAdornment,
  
} from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  button: {
    fontStyle: "Space Mono",
    backgroundColor: "#2D4454",
    color:'rgb(231, 230, 230)',
    marginTop: "2%",
    marginLeft:'5%'
  },
  typography:{
    fontStyle: 'Frank Ruhl Libre',
    color:'#8E0E06',
    fontSize:"9vh",
    marginTop: "5%"

  } ,
  typographyH2:{
    fontStyle: 'Space Mono',
    color:'#8E0E06',
    fontSize:"5vh",
    marginTop: "5%"

  } 
 
});
function EditHours({ userToken, userId,monthData }) {
  const [data, setData] = useState([]);
  const [workThisMonth, setWorkThisMonth] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  
  //need to figure out how to call when the component also updates
  useEffect(() => {
    getDataFromHour(userToken, userId).then((res) => {
      setData(res.data);
      
    });
  }, []);

const handleId= async(e)=>{
   const id = await e.target.id;
  
    filterMonth(id)  
 
}

  
   const filterMonth =  (id) => {
      filterData(data,id).then(response=>
     {  dispatch(monthHours(response)) 
       
   }
      ).catch(err =>
        console.log(err)
      )
      if(monthData.length>0) setWorkThisMonth(true)
     
   }; 

  return (
    <Grid container  data-testid='component-editHours' className="main-editHours" justify="center" alignItems="center" direction="row">
      <Grid
        item
        xs={3}
        style={{ justifyItems:"center", height: "100%"}}
      >

      
       <Typography className={classes.typography} variant="h1" >Edit Hours</Typography >
     {months.map((item, index) => (
        <div key={index}>
          <Button 
          variant="outlined"
          size="small"
           color="secondary"
              className={classes.button}
              variant="outlined"
              data-testid="submit-button"
              type="submit"
              
             onClick={handleId}>
            <li id={index+1}>{item}</li>
          </Button>
        </div>
      ))}
</Grid>
 <Grid    
        item
        xs={8}
        style={{height: "50%", justify:"center", alignItems:'flex-end'}}>
      {monthData.length >0 ? (
        <UserHours monthData={monthData} />
      ) : workThisMonth ? (
        <Typography className={classes.typographyH2} variant="h2">You did not work this month </Typography>
      ) : (
        <Typography  className={classes.typographyH2} variant="h2">Select a Month</Typography>
      )} 
  </Grid>
       
    
    
    </Grid>
  );
}

export function mapStateToProps(state) {
  return {
    monthData:state.getMonthData.monthData,
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}

export default connect(mapStateToProps)(EditHours);
