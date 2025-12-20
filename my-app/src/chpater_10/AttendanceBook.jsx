import React from "react";

const students = [
    {
        name: "Inje",
    },
    {
        name: "Steve",
    },
    {
        name: "Bill",
    },
    {
        name: "Jeff",
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((studenct)=>{
                return <li>{students.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;