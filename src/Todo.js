import { ListItem, List, ListItemAvatar, ListItemText, Button, Modal, makeStyles } from '@material-ui/core'
import './Todo.css';
import React, { useState } from 'react';
import db from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);

    const handleOpen = () => {
        setOpen(true)
    };

    const updateTodo = () => {
        // update to do with the new input text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })

        setOpen(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am a model</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List className='todo_list'>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary='Dummy deadline ⏰' />
                </ListItem>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌DELETE ME</Button>
            </List>
        </>
    )
}

export default Todo