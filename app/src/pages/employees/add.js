import {useState} from "react";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const Add = () => {
    const [type, setType] = useState(1);

    const saveEmployee = (e) => {
        e.preventDefault();

        axios.post("http://127.0.0.1:8000/api/employee", {
            name: e.target[0].value,
            last_name: e.target[1].value,
            age: e.target[2].value,
            type: e.target[3].value,
            value: e.target[4].value
        })
        this.setState({
            name: '',
            last_name: '',
            age: 0,
            type: '',
            value: ''
        });
    }


    return (
        <div className="border p-5">
            <h2 className="mb-4">Cargar Empleado</h2>
            <Form onSubmit={saveEmployee}>
                <FormGroup>
                    <Label for="exampleEmail">Nombre</Label>
                    <Input type="text" placeholder="Nombre" name="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Apellido</Label>
                    <Input type="text" placeholder="Apellido" name="last_name" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Edad</Label>
                    <Input type="number" placeholder="Edad" name="age" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Tipo de empleado</Label>
                    <Input type="select" name="type" onChange={({target:{value}}) => setType(parseInt(value))}>
                        <option value="1">Diseñador</option>
                        <option value="2">Programador</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Skills</Label>
                    <Input type="text" placeholder={type === 1 ? "Tipo de Diseñador" : "Lenguaje en el que programa"} name="value" />
                </FormGroup>
                <Button outline color="secondary">Cargar</Button>
            </Form>
        </div>
    );
}

export default Add;
