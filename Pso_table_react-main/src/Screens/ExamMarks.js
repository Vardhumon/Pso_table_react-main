import React, { useState } from 'react';

function ExamMarks() {
    const [data, setData] = useState([
        "Vardhaman Begani",
        "Vardhaman Begani",
        "Vardhaman Begani",
        "Vardhaman Begani",


    ]);

    const [roll, setRoll] = useState([
        "TEAIDA01",
        "TEAIDA02",
        "TEAIDA03",
        "TEAIDA04",

    ]);

    const [prn, setPrn] = useState([
        "72280089E",
        "72280089E",
        "72280089E",
        "72280089E",



    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [editedData, setEditedData] = useState([...data]);
    const [editedRoll, setEditedRoll] = useState([...roll]);
    const [editedPRN, setEditedPRN] = useState([...prn]);
    // const [editedNames, setEditedNames] = useState([...name]);


    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData([...data]); // Reset edited data
    };

    const handleInputChange = (event, index) => {
        const newData = [...editedData];
        newData[index] = event.target.value;
        setEditedData(newData);
    };
    const handleInputChange1 = (event, index) => {
        const newRolls = [...editedRoll];
        newRolls[index] = event.target.value;
        setEditedRoll(newRolls);
    }; const handleInputChange2 = (event, index) => {
        const newPrn = [...editedPRN];
        newPrn[index] = event.target.value;
        setEditedPRN(newPrn);
    };

    const handleSave = (index) => {
        setEditIndex(null);
        setData([...editedData]);
        setRoll([...editedRoll]); // Save edited data
        setPrn([...editedPRN]); // Save edited data
        // Save edited data
    };

    return (
        <div className="container-fluid w-100 border border-danger border-3 mt-4 text-dark">
            <div className="row">
                <div className="col ms-0 ps-0">
                    <div className="row h-100 text-dark no-wrap fs-5 d-flex justify-content-center font-weight-bold">
                        <div className="col-12 d-flex">
                            <div className="Sr-no d-flex flex-column">
                                <div className="fs-4 fw-bold border border-2 px-5 py-5 sticky-top bg-danger text-white">Sr.No</div>
                                {data.map((item, index) => (
                                    <span className="col-12 border border border-1 ps-0 ms-0 py-3 fs-4 hover-shadow" key={index}>
                                        <span>{`${index + 1}`}</span>
                                        <button
                                            className="btn btn-outline-primary border border-3 ms-3 btn-sm"
                                            onClick={() => {
                                                editIndex === index ? handleSave(index) : handleEdit(index);
                                            }}
                                        >
                                            {editIndex === index ? "Save" : "Edit"}
                                        </button>
                                    </span>
                                ))}
                            </div>


                            {/* roll no */}


                            <div className="Roll-no d-flex flex-column">
                                <div className="fs-4 fw-bold border border-2 px-5 py-5 sticky-top bg-danger text-white">Roll No.</div>
                                {roll.map((item, index) => (
                                    <span className="col-12 border border border-1 px-2 py-3 fs-4 d-inline-flex align-items-center justify-content-start hover-shadow" key={index}>

                                        <span>
                                            {editIndex === index ? (
                                                <input type="text" className="form-control form-control-sm fs-5" value={editedRoll[index]} onChange={(event) => handleInputChange1(event, index)} />
                                            ) : (
                                                <span>{item}</span>
                                            )}
                                        </span>
                                    </span>
                                ))}
                            </div>


                            {/* prn number */}

                            <div className="prn-no d-flex flex-column">
                                <div className="fs-4 fw-bold border border-2 px-5 py-5 sticky-top bg-danger text-white">Prn No.</div>
                                {prn.map((item, index) => (
                                    <span className="col-12 border border border-1 px-2 py-3 fs-4 d-inline-flex align-items-center justify-content-start hover-shadow" key={index}>

                                        <span>
                                            {editIndex === index ? (
                                                <input type="text" className="form-control form-control-sm fs-5" value={editedPRN[index]} onChange={(event) => handleInputChange2(event, index)} />
                                            ) : (
                                                <span>{item}</span>
                                            )}
                                        </span>
                                    </span>
                                ))}
                            </div>

                            {/* name list */}

                            <div className="Names d-flex flex-column">
                                <div className="fs-4 fw-bold border border-2 px-5 py-5 sticky-top bg-danger text-white">Student Names</div>
                                {data.map((item, index) => (
                                    <span className="col-12 border border border-1 px-2 py-3 fs-4 d-inline-flex align-items-center justify-content-start hover-shadow" key={index}>

                                        <span>
                                            {editIndex === index ? (
                                                <input type="text" className="form-control form-control-sm fs-5" value={editedData[index]} onChange={(event) => handleInputChange(event, index)} />
                                            ) : (
                                                <span>{item}</span>
                                            )}
                                        </span>
                                    </span>
                                ))}
                            </div>

                            {/* CO Attainment table*/}
                            <div className="Roll-no d-flex flex-column">
                                <div className="fs-4 fw-bold border border-2 px-5 py-5 sticky-top bg-danger text-white">
                                    <div className="row">CO Attainment from University Exam</div>
                                </div>
                                {data.map((item, index) => (
                                    <span className="col-12 border border border-1 px-2 py-3 fs-4 d-inline-flex align-items-center justify-content-start hover-shadow" key={index}>

                                        <span>
                                            {editIndex === index ? (
                                                <input type="text" className="form-control form-control-sm fs-5" value={editedData[index]} onChange={(event) => handleInputChange(event, index)} />
                                            ) : (
                                                <span>{item}</span>
                                            )}
                                        </span>
                                    </span>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ExamMarks;
