import React, { useState } from "react";
import displayImages from "../../services/API/displayImages";
import { connect } from "react-redux";
import "../../style/displayImages.scss";
import { months } from "../../services/editHoursSev";

const DisplayImages = ({ userToken, userId }) => {
  const [uploadFile, setUploadFile] = useState([]);
  const [message, setMessage] = useState("");

  /**
   * @function handleOnChange - target the number of the month selected on the select input and set the month state
   * @param {*} e - event
   *
   */

  /**
   * @function handleImage - store image on the database based on account ID and the selected month
   * The server sends back the image data and a message saying if your request was succesful or not
   */
  const handleImage = (month) => {
    displayImages(userToken, userId, month)
      .then((res) => {
        setUploadFile(res.data);
        setMessage(res.data.message);
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  return (
    <main className="displayImages-main">
      <div className="wrap-displaImages">
        {message ? <h1>{message}</h1> : <h1>My Documents</h1>}

        <section className="select-image">
          <select
            onChange={(e) => handleImage(e.target.value)}
            className="select-css"
            name="month"
            id="month"
          >
            <option value={1}>Select Month</option>
            {months.map((e, index) => (
              <option key={index} value={index + 1}>
                {e}
              </option>
            ))}
          </select>
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
