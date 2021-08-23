import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

import FormData from './FormData';

const ModalForm = ({ modal, toggle, setEditing, editing, taskEditing, onCreate, onUpdate }) => (
    <>
        <Button color="primary" onClick={toggle}>
            <FontAwesomeIcon icon={faPlus} /> Add
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>{ editing ? 'Edit' : 'Create' } Task</ModalHeader>
            <ModalBody>
                <FormData toggle={toggle}
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

export default ModalForm
