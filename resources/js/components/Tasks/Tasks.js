import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Row } from 'reactstrap';

import Task from './Task';
import Loading from '../Loading/Loading';
import ModalForm from './Form/ModalForm';

const Tasks = () => {
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [taskEditing, setTaskEditing] = useState({});
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggle = () => setModal(!modal);
    
    useEffect(() => {
        getTasks();
    }, [])

    const getTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            setTasks(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    const onCreate = async task => {
        try {
            await axios.post('/api/tasks', task);
        } catch (e) {
            console.error(e);
        } finally {
            await getTasks();
        }
    }

    const onUpdate = async task => {
        try {
            await axios.put(`/api/tasks/${task.id}`, task);
        } catch (e) {
            console.error(e);
        } finally {
            await getTasks();
        }
    }

    const onDelete = async id => {
        try {
            await axios.delete(`/api/tasks/${id}`);
        } catch (e) {
            console.error(e);
        } finally {
            await getTasks();
        }
    }

    return (
        <div>
            <h1>Tasks</h1>

            <div className="d-flex mb-3">
                <ModalForm modal={modal}
                           setEditing={setEditing}
                           editing={editing}
                           taskEditing={taskEditing}
                           toggle={toggle}
                           onCreate={onCreate}
                           onUpdate={onUpdate}
                />
            </div>

            <Row>
                {
                    loading
                    ? <Loading size="md" color="primary" />
                    :    tasks?.map(({id, name, description, finish_date}, i) =>(
                            <Task key={i}
                                id={id}
                                name={name}
                                description={description}
                                finish_date={finish_date}
                                onDelete={onDelete}
                                onUpdate={onUpdate}
                                setModal={setModal}
                                setEditing={setEditing}
                                setTaskEditing={setTaskEditing}
                            />
                        ))
                }
            </Row>
        </div>
    )
}

export default Tasks

if(document.getElementById('tasks')){
    ReactDOM.render(<Tasks />, document.getElementById('tasks'));
}