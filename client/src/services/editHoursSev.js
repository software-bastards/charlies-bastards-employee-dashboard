/**
 * @function getMonthName
 * @param {number} number
 * @returns {string} - the name of the monh base on the number 
 */
export  const getMonthName = (id) => {
    switch (id) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
        case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Not Valide";
    }
  };

  export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

/**
 * @function filterData - filter data from the array of objects with information from the hour table
 * @param {array} data 
 * @returns {array} - array of objects with the hours registered on the selected month 
 */
  export async function filterData(data,id){
    console.log(id)
  const response = await data.filter((e) => {
    return parseInt(id) === e.month_number;
  });
  console.log(response)
  return response
}