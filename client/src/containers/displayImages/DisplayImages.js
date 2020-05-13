import React, { useState } from "react";
import displayImages from "../../services/API/displayImages";
import { connect } from "react-redux";
import "../../style/displayImages.scss";
import { months } from "../../services/editHoursSev";
import { Link } from "react-router-dom";

const DisplayImages = ({ userToken, userId }) => {
  const [uploadFile, setUploadFile] = useState([]);
  const [message, setMessage] = useState("");
  const [month, setMonth] = useState();

  /**
   * @function handleOnChange - target the number of the month selected on the select input and set the month state
   * @param {*} e - event
   *
   */
  const handleOnChange = (e) => {
    setMonth(e.target.value);
  };

  /**
   * @function handleImage - store image on the database based on account ID and the selected month
   * The server sends back the image data and a message saying if your request was succesful or not
   */
  const handleImage = () => {
    displayImages(userToken, userId, month)
      .then((res) => {
        {
          setUploadFile(res.data);
          setMessage(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="displayImages-main">
      <Link to="/dashboard" className="link-back">
        {" "}
        Menu{" "}
      </Link>
      <div className="wrap-displaImages">
        {message ? <h1>{message}</h1> : <h1>My Images</h1>}

        <section className="select-image">
          <select
            className="select-css"
            onChange={handleOnChange}
            name="month"
            id="month"
          >
            <option value={1}>Select a Month</option>
            {months.map((e, index) => (
              <option key={index} value={index + 1}>
                {e}
              </option>
            ))}
          </select>
          <button data-testid="test-displayimage-router" onClick={handleImage}>
            Select
          </button>
        </section>

        <div className="displayImages-content">
          {uploadFile.length > 0
            ? uploadFile.map((item, index) => (
                <section className="displayImages-image" key={index}>
                  <h3>{item.fileName}</h3>

                  <a href={item.filePath}>
                    <img
                      className="image-display"
                      src={item.filePath}
                      alt={item.fileName}
                    />
                  </a>
                </section>
              ))
            : null}
        </div>
      </div>
    </main>
  );
};
export function mapStateToProps(state) {
  return {
    userToken: state.authorization.token,
    userId: state.authorization.id,
  };
}
export default connect(mapStateToProps)(DisplayImages);
