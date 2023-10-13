import { getCardById } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleClass } from '../../redux/store';

const Card = props => {
    const card = useSelector(state => getCardById(state, props.id))
    const dispatch = useDispatch(); 

    const toggle = () => {
        dispatch(toggleClass(props.id))
    }

    
    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button onClick={toggle} className={styles.star}>
                <i className={clsx(card.isFavorite && styles.favorite, 'fa fa-star')}></i>
                </button>
            </div>
        </li>
    );
};

export default Card;