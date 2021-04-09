import {useState} from "react";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const Search = () => {
    const [employee, setEmployee] = useState(null);

    const searchEmployee = async (e) => {
        e.preventDefault();

        const response = await axios.get(`http://127.0.0.1:8000/api/employee/${e.target[0].value}`)
        setEmployee(response.data);
    }


    return (
        <>
            <div className="border p-5">
                <h2 className="mb-4">Buscar Empleado</h2>
                <Form onSubmit={searchEmployee}>
                    <FormGroup>
                        <Label for="exampleEmail">Buscar por ID</Label>
                        <Input type="text" placeholder="ID" name="id"/>
                    </FormGroup>
                    <Button outline color="secondary">Buscar</Button>
                </Form>
            </div>
            {employee && <div class="pt-5">
                <p><strong>Nombre:</strong> {employee.name}</p>
                <p><strong>Apellido:</strong> {employee.last_name}</p>
                <p><strong>Edad:</strong> {employee.age}</p>
            </div>}
        </>
    );
}

export default Search;
