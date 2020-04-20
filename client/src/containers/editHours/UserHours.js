import React from 'react'
import { getMonthName } from "../../services/editHoursSev";

export default function UserHours (month_number,hour_logged,day_number){

    return(
           <table>
            <tbody>
              <tr>
                <th>{getMonthName(month_number)}</th>
                <td>{day_number}</td>
                <td>{hour_logged}</td>
              </tr>
            </tbody>
            </table>
    )
}