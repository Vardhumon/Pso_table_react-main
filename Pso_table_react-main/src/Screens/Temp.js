import React, { useEffect, useState } from 'react';

function Temp() {
    const [name, setName] = useState([
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
        "72280089E",
        "72280090E",
        "72280091E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",
        "72280092E",



    ]);
    const [ese, setEse] = useState([
        50, 60, 50, 56
    ]);
    const [midsem, setMidsem] = useState([
        27, 27, 17, 14
    ]); const [pr_or, setPr_or] = useState([
        10, 20, 13, 14
    ]); const [termwork, setTermwork] = useState([
        17, 24, 13, 4
    ]);
    const [total, settotal] = useState([]);
    const [totalStudents, setTotalStudents] = useState(4);

    useEffect(() => {
        calculateTotal();
    }, [ese, midsem, pr_or, termwork]);

    useEffect(() => {
        console.log(total);
    }, [total]);

    const calculateTotal = () => {
        const newTotal = ese.map((eseValue, index) => {
            return parseInt(eseValue) + parseInt(midsem[index]) + parseInt(pr_or[index]) + parseInt(termwork[index]);
        });
        settotal(newTotal)
    };

    const [editIndex, setEditIndex] = useState(null);
    const [editedName, setEditedName] = useState([...name]);
    const [editedRoll, setEditedRoll] = useState([...roll]);
    const [editedPRN, setEditedPRN] = useState([...prn]);
    const [editedEse, setEditedEse] = useState([...ese]);
    const [editedMid, setEditedMid] = useState([...midsem]);
    const [editedPror, setEditedPrOr] = useState([...pr_or]);
    const [editedTermwork, setEditedPTermWork] = useState([...termwork]);


    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedName([...name]);
        setEditedRoll([...roll]);
        setEditedPRN([...prn]);
        setEditedEse([...ese]);
        setEditedMid([...midsem]);
        setEditedPrOr([...pr_or]);
        setEditedPTermWork([...termwork]);
    };

    const handleInputChangetotal = (event) => {
        setTotalStudents(parseInt(event.target.value) || 0);
    };

    const handleInputChange = (event, index) => {
        const newName = [...editedName];
        newName[index] = event.target.value;
        setEditedName(newName);
    };

    const handleInputChange1 = (event, index) => {
        const newRolls = [...editedRoll];
        newRolls[index] = event.target.value;
        setEditedRoll(newRolls);
    };

    const handleInputChange2 = (event, index) => {
        const newPrn = [...editedPRN];
        newPrn[index] = event.target.value;
        setEditedPRN(newPrn);
    };
    const handleInputChange3 = (event, index) => {
        const newEse = [...editedEse];
        newEse[index] = event.target.value;
        setEditedEse(newEse);
    };
    const handleInputChange4 = (event, index) => {
        const newMid = [...editedMid];
        newMid[index] = event.target.value;
        setEditedMid(newMid);
    };
    const handleInputChange5 = (event, index) => {
        const newPrOr = [...editedPror];
        newPrOr[index] = event.target.value;
        setEditedPrOr(newPrOr);
    }; const handleInputChange6 = (event, index) => {
        const newterm = [...editedTermwork];
        newterm[index] = event.target.value;
        setEditedPTermWork(newterm);
    };

    const handleSave = (index) => {
        setEditIndex(null);
        setName([...editedName]);
        setRoll([...editedRoll]); // Save edited data
        setPrn([...editedPRN]);
        setEse([...editedEse]);
        setMidsem([...editedMid]);
        setPr_or([...editedPror]);
        setTermwork([...editedTermwork]);

    };


    return (
        <div className='mt-5'>
            <span className='container-md mb-5' style={{ border: "2px solid red", padding: "20px", }}><span className='fs-4 fw-bold'>Enter Total Number Of Students</span><span><input
                type="number"
                className='ms-4 py-2'
                // style={{ padding: "10px" }}
                value={totalStudents}
                onChange={handleInputChangetotal}
                placeholder="Enter total number of students"
            /></span></span>
            <table className="table table-hover table-light table-bordered w-75 bg-dark mt-5">
                <thead className='ms-2'>
                    <tr className='ms-2 text-center table-primary sticky-top'>
                        <th scope="col ">Sr.no </th>
                        <th scope="col">PRN No.</th>
                        <th scope="col">Roll No.</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">ESE(70)</th>
                        <th scope="col">Mid Sem(30)</th>
                        <th scope="col">PR/OR(25)</th>
                        <th scope="col">Term Work(25)</th>
                        <th scope="col">Total(150)</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(totalStudents)].map((_, index) => (
                        <tr className='text-center' key={index}>
                            <th scope="row" className='text-center' ><span>{index + 1}</span><span><button
                                className="btn btn-outline-primary border border-3 btn-sm ms-2"
                                onClick={() => {
                                    editIndex === index ? handleSave(index) : handleEdit(index);
                                }}
                            >
                                {editIndex === index ? "Save" : "Edit"}
                            </button></span></th>

                            {/* PRN nO */}
                            <td><span>
                                {editIndex === index ? (
                                    <input type="text" className="form-control form-control-sm fs-5" value={editedPRN[index]} onChange={(event) => handleInputChange2(event, index)} style={{ maxWidth: "150px" }} />
                                ) : (
                                    <span>{prn[index]}</span>
                                )}
                            </span></td>

                            {/* ROLL NO   */}
                            <td><span>
                                {editIndex === index ? (
                                    <input type="text" className="form-control form-control-sm fs-5" value={editedRoll[index]} onChange={(event) => handleInputChange1(event, index)} style={{ maxWidth: "150px" }} />
                                ) : (
                                    <span>{roll[index]}</span>
                                )}
                            </span></td>

                            {/* NAME */}
                            <td><span>
                                {editIndex === index ? (
                                    <input type="text" className="form-control form-control-sm fs-5" value={editedName[index]} onChange={(event) => handleInputChange(event, index)} style={{}} />
                                ) : (
                                    <span>{name[index]}</span>
                                )}
                            </span></td>

                            {/* ESE Marks */}
                            <td className='text-center'>
                                <span>
                                    {editIndex === index ? (
                                        <input type="number" className="form-control form-control-sm fs-5" value={editedEse[index]} onChange={(event) => handleInputChange3(event, index)} style={{ maxWidth: "80px" }} max={70} min={0} />
                                    ) : (
                                        <span>{ese[index]}</span>
                                    )}
                                </span>
                            </td>

                            {/* MIDSEM */}
                            <td className='text-center'>
                                <span>
                                    {editIndex === index ? (
                                        <input type="number" className="form-control form-control-sm fs-5" value={editedMid[index]} onChange={(event) => handleInputChange4(event, index)} style={{ maxWidth: "80px" }} max={30} min={0} />
                                    ) : (
                                        <span>{midsem[index]}</span>
                                    )}
                                </span>
                            </td>

                            {/* PR_OR */}
                            <td className='text-center'>
                                <span>
                                    {editIndex === index ? (
                                        <input type="number" className="form-control form-control-sm fs-5" value={editedPror[index]} onChange={(event) => handleInputChange5(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                    ) : (
                                        <span>{pr_or[index]}</span>
                                    )}
                                </span>
                            </td>

                            {/* TERMWORK */}
                            <td className='text-center'>
                                <span>
                                    {editIndex === index ? (
                                        <input type="number" className="form-control form-control-sm fs-5" value={editedTermwork[index]} onChange={(event) => handleInputChange6(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                    ) : (
                                        <span>{termwork[index]}</span>
                                    )}
                                </span>
                            </td>
                            <td className='text-center'>{total[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Temp;
