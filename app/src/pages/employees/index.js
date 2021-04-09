import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "reactstrap";

const List = () => {
    const [employees, setEmployees] = useState([]);
    const [avgEmp, setAvgEmp] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://127.0.0.1:8000/api/employees");
            setEmployees(response.data);
            const responseAvg = await axios.get("http://127.0.0.1:8000/api/employees/average");
            setAvgEmp(responseAvg.data.age);
        }
        fetchData()
    }, [])


    return (
        <>
            <div className="col-4 offset-8 text-center border bg-light py-3 mb-5">
                <h4 className="font-weight-bold">Edad Promedio</h4>
                <h3 className="mb-0">{avgEmp}</h3>
            </div>
            <Table striped responsive>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee =>
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.age}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>

    );
}

export default List;
