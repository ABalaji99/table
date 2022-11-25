import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { CiSearch } from 'react-icons/ci';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import Toast from 'react-bootstrap/Toast';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { AiOutlineUserAdd } from 'react-icons/ai';




export const userData = [

    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

// Creating styles


const Component = () => {
    // Creating style object


    // Defining a state named rows
    // which we can update by calling on setRows function
    const [rows, setRows] = useState([
        { id: 1, firstname: "", lastname: "", city: "" },
    ]);

    // Initial states
    const [open, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [showConfirm, setShowConfirm] = React.useState(false);

    // Function For closing the alert snackbar
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    // Function For adding new row object
    const handleAdd = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1, firstname: "",
                lastname: "", city: ""
            },
        ]);
        setEdit(true);
    };

    // Function to handle edit
    const handleEdit = (i) => {
        // If edit mode is true setEdit will
        // set it to false and vice versa
        setEdit(!isEdit);
    };

    // Function to handle save
    const handleSave = () => {
        setEdit(!isEdit);
        setRows(rows);
        console.log("saved : ", rows);
        setDisable(true);
        setOpen(true);
    };

    // The handleInputChange handler can be set up to handle
    // many different inputs in the form, listen for changes
    // to input elements and record their values in state
    const handleInputChange = (e, index) => {
        setDisable(false);
        const { name, value } = e.target;
        const list = [...rows];
        list[index][name] = value;
        setRows(list);
    };

    // Showing delete confirmation to users
    const handleConfirm = () => {
        setShowConfirm(true);
    };

    // Handle the case of delete confirmation where
    // user click yes delete a specific row of id:i
    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
        setRows(list);
        setShowConfirm(false);
    };

    // Handle the case of delete confirmation
    // where user click no
    const handleNo = () => {
        setShowConfirm(false);
    };


   

    return (
        <div>

            <div margin={1}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        {isEdit ? (
                            <div>
                                <Button onClick={handleAdd}>
                                    <AiOutlineUserAdd onClick={handleAdd} />
                                    ADD
                                </Button>
                                {rows.length !== 0 && (
                                    <div>
                                        {disable ? (
                                            <Button disabled align="right" onClick={handleSave}>

                                                SAVE
                                            </Button>
                                        ) : (
                                            <Button align="right" onClick={handleSave}>

                                                SAVE
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                <Button onClick={handleAdd}>
                                    <AiOutlineUserAdd onClick={handleAdd} />
                                    ADD
                                </Button>
                                <Button align="right" onClick={handleEdit}>
                                    <BiEditAlt />
                                    EDIT
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <tr align="center"></tr>

                <Table striped bordered hover

                 
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Company Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody >

                        {
                            userData.slice(0,7).map((cells)=>(
                                <tr>
                                    <td>{cells.id}</td>
                                    <td>{cells.name}</td>
                                    <td>{cells.username}</td>
                                    <td>{cells.company.name}</td>
                                    <td>{cells.email}</td>
                                    <td>{cells.address.city}</td>
                                    <td>
                                    <div className='btn-grp'>
                                        <button type="">Details</button>
                                        <button type="">Edit</button>
                                        <button type="button" >Delete</button>
                                    </div>
                                    </td>
                                </tr>
                            ))
                        }

                      
                        {rows.map((row, i) => {
                            return (
                                <>
                                    <tr>
                                        {isEdit ? (
                                            <tr>
                                                <td padding="none">
                                                    <input
                                                        value={row.firstname}
                                                        name="firstname"
                                                        onChange={(e) => handleInputChange(e, i)}
                                                    />
                                                </td>
                                                <td padding="none">
                                                    <input
                                                        value={row.lastname}
                                                        name="lastname"
                                                        onChange={(e) => handleInputChange(e, i)}
                                                    />
                                                </td>
                                                <td padding="none">
                                                    <select
                                                        style={{ width: "100px" }}
                                                        name="city"
                                                        value={row.city}
                                                        onChange={(e) => handleInputChange(e, i)}
                                                    >
                                                        <option value=""></option>
                                                        <option value="Karanja">Karanja</option>
                                                        <option value="Hingoli">Hingoli</option>
                                                        <option value="Bhandara">Bhandara</option>
                                                        <option value="Amaravati">Amaravati</option>
                                                        <option value="Pulgaon">Pulgaon</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ) : (
                                            <div>
                                                <td component="th" scope="row">
                                                    {row.firstname}
                                                </td>
                                                <td component="th" scope="row">
                                                    {row.lastname}
                                                </td>
                                                <td component="th" scope="row" align="center">
                                                    {row.city}
                                                </td>
                                                <td
                                                    component="th"
                                                    scope="row"
                                                    align="center"
                                                ></td>
                                            </div>
                                        )}
                                        {isEdit ? (
                                            <Button className="mr10" onClick={handleConfirm}>
                                                <MdDeleteOutline />
                                            </Button>
                                        ) : (
                                            <Button className="mr10" onClick={handleConfirm}>
                                                <MdDeleteOutline />
                                            </Button>
                                        )}
                                        {showConfirm && (
                                            <div>
                                                <Modal.Dialog
                                                    open={showConfirm}
                                                    onClose={handleNo}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <Modal.Header id="alert-dialog-title">
                                                        {"Confirm Delete"}
                                                    </Modal.Header>
                                                    <Modal.Body>

                                                        Are you sure to delete

                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button
                                                            onClick={() => handleRemoveClick(i)}
                                                            color="primary"
                                                            autoFocus
                                                        >
                                                            Yes
                                                        </Button>
                                                        <Button
                                                            onClick={handleNo}
                                                            color="primary"
                                                            autoFocus
                                                        >
                                                            No
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal.Dialog>
                                            </div>
                                        )}
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Component