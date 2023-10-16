import { getCardById } from '../../redux/cardsReducer';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleClass, removeCard } from '../../redux/cardsReducer';

const Card = (props) => {
    const card = useSelector(state => getCardById(state, props.id))
    const dispatch = useDispatch(); 

    const toggle = () => {
        dispatch(toggleClass(props.id))
    }
    
    const remove = () => {
        dispatch(removeCard(props.id))
    }

    
    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button onClick={toggle} className={styles.star}>
                <i className={clsx(card.isFavorite && styles.favorite, 'fa fa-star')}></i>
                </button>
                <button className={styles.star} onClick={remove}><i className={"fa fa-trash"}></i></button>
            </div>
        </li>
    );
};

export default Card;