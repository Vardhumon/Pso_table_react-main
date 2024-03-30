import React, { useState } from 'react';

function ExamMarksTable() {
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
        "TEAIDA04"
    ]);

    const [prn, setPrn] = useState([
        "TEAIDA01",
        "TEAIDA02",
        "TEAIDA03",
        "TEAIDA04"
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
        <div className="container-fluid w-100 border border-danger border-3 mt-4 text-dark">
            <div className="row">
                <div className="col">
                    <div className="row text-dark no-wrap fs-4 d-flex justify-content-center font-weight-bold">
                        <div className="col-1 fs-4 fw-bold border border-2 px-5 py-5">Sr.No</div>
                        <div className="col-3 fs-4 fw-bold border border-2 px-5 py-5">Student Name</div>
                        <div className="col-1 fs-4 fw-bold border border-2 px-5 py-5">Roll No.</div>
                        <div className="col-1 fs-4 fw-bold border border-2 px-5 py-5">Prn No.</div>
                        <div className="col-6 fs-4 fw-bold border border-2 px-2 py-2">
                            <div className="col-12 fs-4 fw-bold px-2 py-2">CO Attainment from University Exam</div>
                            <div className="col-12 fs-4 fw-bold d-flex">
                                <div className="col px-0">
                                    <div className="fs-4 fw-bold border border-2 px-2 py-2">ESE</div>
                                    <div className="fs-4 fw-bold border border-2 px-2 py-2">70</div>
                                </div>
                                <div className="col"><div className="fs-4 fw-bold border border-2 px-2 py-2">Mid Sem</div><div className="fs-4 fw-bold border border-2 px-2 py-2">30</div></div>
                                <div className="col"><div className="fs-4 fw-bold border border-2 px-2 py-2">PR/OR</div><div className="fs-4 fw-bold border border-2 px-2 py-2">25</div></div>
                                <div className="col"><div className="fs-4 fw-bold border border-2 px-2 py-2">Term Work</div><div className="fs-4 fw-bold border border-2 px-2 py-2">25</div></div>
                                <div className="col"><div className="fs-4 fw-bold border border-2 px-2 py-2">Total</div><div className="fs-4 fw-bold border border-2 px-2 py-2">150</div></div>
                            </div>
                            <div className="col-12 fs-4 fw-bold px-2 py-2 d-flex">
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        {data.map((item, index) => (
                            <div className="row align-items-center hover-overlay" key={index} >
                                <div className="col-1 border border-end-0 border-1 px-2 py-3 fs-4 d-inline-flex align-items-center justify-content-start hover-shadow">
                                    <span>{`${index + 1}`}</span>
                                    <div>
                                        {editIndex === index ? (
                                            <button className="btn btn-success ms-2" onClick={() => handleSave(index)}>Save</button>
                                        ) : (
                                            <button className="btn btn-light border border-3 ms-3" onClick={() => handleEdit(index)}>Edit</button>
                                        )}
                                    </div>
                                </div>
                                {editIndex === index ? (
                                    <div className="col-3 border border-2 fs-4 px-2 py-3">
                                        <input type="text" className="form-control fs-5" value={editedData[index]} onChange={(event) => handleInputChange(event, index)} />
                                    </div>
                                ) : (
                                    <div className="col-3  border border-top-0 border-2 fs-5 px-2 " style={{ paddingTop: "23px", paddingBottom: "20px", display: "flex", alignItems: "center" }}>{item}</div>
                                )}
                                {/* Add corresponding roll item here */}
                                {editIndex === index ? (
                                    <div className="col-1 border border-2 fs-4 px-2 py-3">
                                        <input type="text" className="form-control fs-5" value={editedData[index]} onChange={(event) => handleInputChange(event, index)} />
                                    </div>
                                ) : (
                                    <div className="col-1  border border-top-0 border-2 fs-5 px-2 " style={{ paddingTop: "23px", paddingBottom: "20px", display: "flex", alignItems: "center", marginLeft: "6px" }}>{roll[index]}</div>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ExamMarksTable;
