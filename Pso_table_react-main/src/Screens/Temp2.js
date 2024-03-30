import React from 'react'

function Temp2() {
    return (
        <div>
            <table className='table table-hover table-light table-bordered bg-dark mt-5'>
                <thead>

                    <tr>
                        <th colSpan={3} className='text-center'>Co1</th>
                        <th colSpan={3} className='text-center'>Co2</th>
                        <th colSpan={3} className='text-center'>Co3</th>
                        <th colSpan={3} className='text-center'>Co4</th>
                        <th colSpan={3} className='text-center'>Co5</th>
                        <th colSpan={3} className='text-center'>Co6</th>
                    </tr>
                    <tr className='text-center'>
                        <th>UT-1</th>
                        <th>Classwork</th>
                        <th>Total</th>
                        <th>UT-2</th>
                        <th>Classwork</th>
                        <th>Total</th>
                        <th>UT-2</th>
                        <th>Classwork</th>
                        <th>Total</th>
                        <th>UT-2</th>
                        <th>Classwork</th>
                        <th>Total</th>
                        <th>{ }</th>
                        <th>Classwork</th>
                        <th>Total</th>
                        <th>{ }</th>
                        <th>Classwork</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add your rows here */}
                    <tr className='text-center'>
                        <td>20</td>
                        <td>10</td>
                        <td>30</td>
                        <td>10</td>
                        <td>10</td>
                        <td>20</td>
                        <td>14</td>
                        <td>10</td>
                        <td>24</td>
                        <td>16</td>
                        <td>10</td>
                        <td>26</td>
                        <td>{null}</td>
                        <td>20</td>
                        <td>20</td>
                        <td>{null}</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    )
}

export default Temp2