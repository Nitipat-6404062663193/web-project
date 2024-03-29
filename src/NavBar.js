
import React from 'react';
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

var Barndstyle ={
    color:'white',
    fontsize:'120%',
};
export const NavBar = () =>{
    return(
    <Navbar bg="dark" sticky='top' expand="md" variant="dark">
        <Container>
            <Navbar.Brand>
                <babel style={Barndstyle}> Nitipat Project</babel>
            </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Root of equation
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu variant="dark">
                            <Nav.Link as={Link} to="/Bisection">Bisection</Nav.Link>
                            <Nav.Link as={Link} to="/FalsePosition">False Position</Nav.Link>
                            <Nav.Link as={Link} to="/OnepointIteration">One point Iteration</Nav.Link>
                            <Nav.Link as={Link} to="/Newtonraphson">Newton raphson</Nav.Link>
                            <Nav.Link as={Link} to="/Secantmethod">Secant Method</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Linear Algebraic Equation
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Nav.Link as={Link} to="/Cramer">Cramer</Nav.Link>
                            <Nav.Link as={Link} to="/GaussElimination">Gauss Elimination</Nav.Link>
                            <Nav.Link as={Link} to="/GaussJordan">Gauss-Jordan</Nav.Link>
                            <Nav.Link as={Link} to="/MatrixInvertion">Matrix Invertion</Nav.Link>
                            <Nav.Link as={Link} to="/Jacobi">Jacobi Iteration</Nav.Link>
                            <Nav.Link as={Link} to="/GaussSedial">Gauss-Sedial Iteration</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Interpolation
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Nav.Link as={Link} to="/NewtonDivided">Newton's divided-differences</Nav.Link>
                            <Nav.Link as={Link} to="/Lagrange">Lagrange polynomials</Nav.Link>
                            <Nav.Link as={Link} to="/Spline">Spline interpolation</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Regression
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Nav.Link as={Link} to="/Linear">Linear Regression</Nav.Link>
                            <Nav.Link as={Link} to="/Polynomial">Polynomial Regression</Nav.Link>
                            <Nav.Link as={Link} to="/Multiple">Multiple Linear Regression</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Nav.Link as={Link} to="/Regression">Regression</Nav.Link>  */}
                </Nav>
        </Container>
    </Navbar>
    );
};