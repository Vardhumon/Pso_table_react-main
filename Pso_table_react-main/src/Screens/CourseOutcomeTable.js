import React, { useState } from 'react';

function CourseOutcome() {
    const [data, setData] = useState([
        "Summarize fundamental concepts of Computer Networks, architectures, protocols and technologies",
        "Analyze the working of physical layer protocols",
        "Analyze the working of different routing protocols and mechanisms",
        "Implement client-server applications using sockets",
        "Illustrate role of application layer with its protocols, client-server architectures",
        "Summarize concepts of MAC and ethernet"
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [editedData, setEditedData] = useState([...data]);

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData([...data]); // Reset edited data
    };

    const handleInputChange = (event, index) => {
        const newData = [...editedData];
        newData[index] = event.target.value;
        setEditedData(newData);
    };

    const handleSave = (index) => {
        setEditIndex(null);
        setData([...editedData]); // Save edited data
    };

    return (
        <div className="container-fluid w-75 border border-danger border-3 mt-4">
            <div className="row">
                <div className="col">
                    <div className="row bg-success text-light no-wrap fs-4 d-flex justify-content-center font-weight-bold">
                        <div className="col-6 fs-4 fw-bold border border-2 px-2 py-2 w-25">CO</div>
                        <div className="col-5 fs-4 fw-bold border border-2 px-2 py-2 w-75">Course Outcomes (CO's)</div>
                    </div>
                    {data.map((item, index) => (
                        <div className="row align-items-center hover-overlay" key={index}>
                            <div className="col-6 border border-2 px-2 py-3 fs-4 w-25 d-inline-flex align-items-center ">
                                <span>{`CO502.${index + 1}`}</span>
                                <div>
                                    {editIndex === index ? (
                                        <button className="btn btn-success ms-2" onClick={() => handleSave(index)}>Save</button>
                                    ) : (
                                        <button className="btn btn-light border border-3 ms-3" onClick={() => handleEdit(index)}>Edit</button>
                                    )}
                                </div>
                            </div>
                            {editIndex === index ? (
                                <div className="col-5 border border-2 fs-4 px-2 py-3 w-75">
                                    <input type="text" className="form-control fs-5" value={editedData[index]} onChange={(event) => handleInputChange(event, index)} />
                                </div>
                            ) : (
                                <div className="col-5  border border-top-0 border-2 fs-5 px-2 w-75 " style={{ paddingTop: "23px", paddingBottom: "20px", display: "flex", alignItems: "center" }}>{item}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseOutcome;
