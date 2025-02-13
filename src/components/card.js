import React from 'react';

const Card = ({taskObj, index, deleteTask}) => {
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleDelete = () => {
        deleteTask(index)
    }


    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
            <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
            <p className = "mt-3">{taskObj.Description}</p>

            <div style={{"position": "absolute", "right" : "20px", "top" : "20px"}}>
                <i class = "feather feather-check-square" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}}></i>
                <i class = "feather feather-edit" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}}></i>
                <i class = "feather feather-trash-2" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>

            </div>
            </div>
        </div>
    );
};

export default Card;