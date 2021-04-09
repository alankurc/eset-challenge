import List from "./pages/employees";
import Add from "./pages/employees/add";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Search from "./pages/employees/search";

function App() {
    return (
        <Router>
            <Nav className="mr-auto py-3 justify-content-center shadow">
                <NavItem>
                    <Link to="/employee/index">
                        <NavLink className="text-dark font-weight-bold">Ver Empleados</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/employee/add">
                        <NavLink className="text-dark font-weight-bold">Cargar Empleado</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/employee/search">
                        <NavLink className="text-dark font-weight-bold">Buscar Empleado</NavLink>
                    </Link>
                </NavItem>
            </Nav>
            <Container className="pt-5">
                <Row>
                    <Col sm={{size:10, offset:1}}>
                        <Switch>
                            <Route path="/employee/index" exact component={List}/>
                            <Route path="/employee/add" component={Add}/>
                            <Route path="/employee/search" component={Search}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
