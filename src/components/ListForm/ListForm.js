import styles from './ListForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description, listId: props.listId}));
        setTitle('');
        setDescription('')
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
        <label className={styles.labelStyle}>Title:</label> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <label className={styles.labelStyle}>Description:</label> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add List</Button>
    </form>
    )
}

export default ListForm; 