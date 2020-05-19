import React, { useState } from "react";
import uploadAPI from "../../services/API/upload";
import { connect, useDispatch } from "react-redux";
import { months } from "../../services/editHoursSev";
import "../../style/upload.scss";
import { Link } from "react-router-dom";

function Upload({ userId, userToken }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("Select your file(s)");
  const [month, setMonth] = useState();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [snackFlag, setSnackFlag] = useState(false);
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
    setMonth(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handlerOnSubmit()
      .then((res) => {
        setMessage("You uploaded your image");
        setSnackFlag(!snackFlag);
      })
      .catch((err) => {
        setMessage("something went wrong");
        setSnackFlag(!snackFlag);
      });
  };

  /**
   * @function handlerOnSubmit - creat a new formData and sendo the fiel together with a userId and selected month to the client
   * It also set the image state and dispatch the message that comes from te server
   */
  const handlerOnSubmit = async () => {
    const formData = new FormData();
    const data = [file, userId, month];
    data.forEach((e) => formData.append("file", e));

    try {
      uploadAPI(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="upload-component">
      <Link className="link-back" to="/dashboard">
        {" "}
        Menu
      </Link>

      <form id="form-upload" onSubmit={onSubmit}>
        <h1> Upload </h1>
        <div className="input-upload">
          <label htmlFor="customFile">{fileName}</label>
          <input
            id="custom-file-input"
            className="custom-file-input"
            type="file"
            onChange={onChange}
            multiple
          />

          <label htmlFor="month">Select a month</label>
          <select
            className="select-css-upload"
            onChange={handleOnChange}
            name="month"
            id="month"
          >
            <option value="1"> Select a month </option>

            {months.map((e, index) => (
              <option key={index} value={index + 1}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <input className="submit-input" type="submit" value="Upload" />
      </form>
      <p
        onClick={() => setSnackFlag(!snackFlag)}
        className={snackFlag ? "snackbar" : "snackclose"}
      >
        {message}
      </p>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}
export default connect(mapStateToProps)(Upload);
