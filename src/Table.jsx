import React from "react";


export const Table=()=>{
    return(
        < div className="table">
            <h1>Table</h1>
            <table border={2}>
                <tr>
                    <th>employee name</th>
                    <th>employee joining date</th>
                    <th>employee salary</th>
                    <th>employee experience</th>
                    <th>employee age</th>
                </tr>
                <tr>
                    <td>muskan</td>
                    <td>2020</td>
                    <td>50,000</td>
                    <td>2 years</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>zahura</td>
                    <td>2021</td>
                    <td>50,000</td>
                    <td>3years</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>saniya</td>
                    <td>2019</td>
                    <td>60,000</td>
                    <td>4.3 years</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>salib</td>
                    <td>2022</td>
                    <td>45,000</td>
                    <td>6 months</td>
                    <td>20</td>
                </tr>
            </table>
        </div>
    )
}
