import React, { useState } from "react";
import uploadAPI from "../../services/API/upload";
import { connect, useDispatch } from "react-redux";
import { months } from "../../services/editHoursSev";
import "../../style/upload.scss"
import {setMessage} from "../../reducers/actions/index"
import { Link } from "react-router-dom";

function Upload({ userId, userToken }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('Select your file(s)');
  const [image, setImage] = useState({});
  const [month, setMonth] = useState();

  const dispatch = useDispatch();

  /**
   * @function onChange target the data from the uploaded image  and set the state
   * @param {*} e 
   */
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  /**
   * @function handleOnChange - target the value of the selected month
   * @param {*} e 
   */
  const handleOnChange = (e) => {
    setMonth(e.target.value)
  };


  const onSubmit = (e) => {
    e.preventDefault();
    handlerOnSubmit()
  }

/**
 * @function handlerOnSubmit - creat a new formData and sendo the fiel together with a userId and selected month to the client
 * It also set the image state and dispatch the message that comes from te server
 */
  const handlerOnSubmit = async()=>{
    const formData = new FormData();
    const data = [file,userId, month];
    data.forEach((e) => formData.append("file", e));

    try {
      uploadAPI(formData).then((res) => {
        const { fileName, filePath, message } = res.data;
        setImage({ fileName, filePath });
         dispatch(
          setMessage({message})
        )  
      });
    } catch (err) {
      if (err.response.status === 500) {
         dispatch(
          setMessage("There was a problem with the server")
        ) 
        ;
      } else {
         dispatch(
          setMessage("Something went wrong. Your image was not updated")
        )  
        console.log(err.data.response.message);
      }
    } 
  }

  return (
    <div>
            <Link to='/dashboard'> Back</Link>

      <h1> Upload </h1>
      <form  id='form-upload'onSubmit={onSubmit}>
      <label htmlFor="customFile">{fileName}</label>
          <input type="file" onChange={onChange} multiple />
          
          <label htmlFor="month">Select a month</label>
           <select onChange={handleOnChange} name="month" id="month">
           <option  value='1'> Select a month </option>

        {months.map((e, index) => (
          <option key={index} value={index+1}>{e}</option>
        ))}
      </select>
      <input type="submit" value="Upload" />      
      </form>
       </div>
  );
}

function mapStateToProps(state) {
  return {
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}
export default connect(mapStateToProps)(Upload);
