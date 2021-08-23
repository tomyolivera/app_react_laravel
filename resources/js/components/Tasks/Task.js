import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap'

const Task = ({ id, name, description, finish_date, onDelete, setModal, setEditing, setTaskEditing }) => {
    const handleEditButton = () => {
        setEditing(true);
        setModal(true);
        setTaskEditing({ id, name, description, finish_date });
    }

    return (
        <Col lg="3" md="4" sm="12">
            <Card color="dark mb-3" inverse>
                <CardHeader className="d-flex justify-content-between">
                    <p>Category</p>
                    <span>{ finish_date }</span>
                </CardHeader>

                <CardBody>
                    <h4>{ name }</h4>
                    <p>{ description || '-' }</p>
                </CardBody>

                <CardFooter className="d-flex justify-content-between">
                    <Button color="warning" onClick={handleEditButton}>
                        <FontAwesomeIcon icon={faPen} />
                    </Button>

                    <Button color="danger" onClick={() => onDelete(id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </CardFooter>
            </Card>
        </Col>
    );
}

export default Task
