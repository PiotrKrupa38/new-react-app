import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card'
import { getFavoriteCard } from '../../redux/cardsReducer';
import { useSelector } from 'react-redux';


const Favorite = () => {
    const cards = useSelector(state => getFavoriteCard(state, true))

    if (!cards.length)
    return (
      <div className={styles.no_favorite_cards}>
        You don't have favorite cards
      </div>
    );

    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>I like it:</p>
            <ul className={styles.cards}>
            {cards.map((card) => (<Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />
        ))}
      </ul>
        </div>
    )
}

export default Favorite;