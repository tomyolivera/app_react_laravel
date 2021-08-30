import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ThemeContext from '../../../context/theme';
import TasksForm from './TasksForm';

const ModalTasksForm = ({ modal, toggle, setEditing, editing, taskEditing, onCreate, onUpdate }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Button color="primary" onClick={toggle}>
                <FontAwesomeIcon icon={faPlus} /> Add
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className={`bg-${theme}`}>{ editing ? 'Edit' : 'Create' } Task</ModalHeader>
                <ModalBody className={`bg-${theme}`}>
                    <TasksForm toggle={toggle}
                            setEditing={setEditing}
                            editing={editing}
                            taskEditing={taskEditing}
                            onCreate={onCreate}
                            onUpdate={onUpdate}
                    />
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalTasksForm
