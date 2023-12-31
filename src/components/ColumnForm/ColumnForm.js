import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import styles from './ColumnForm.module.scss';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer';


const ColumnForm = props => {

    const dispatch = useDispatch(); 
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId  }));
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label className={styles.labelStyle}>Title:</label> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.labelStyle}>Icon:</label> <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;