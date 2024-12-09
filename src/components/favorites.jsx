import { useSelector, useDispatch } from 'react-redux'
import Job from './Job'

const MyFavorites = () => {
  const favoritesArray = useSelector(
    (reduxState) => reduxState.favorites.content
  )
  const dispatch = useDispatch()

  const handleRemoveFavorite = (id) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: id,
    })
  }

  return (
    <div>
      <h1>My Favorite Jobs</h1>
      {favoritesArray.length === 0 ? (
        <p>Non hai aggiunto nessun lavoro ai preferiti.</p>
      ) : (
        favoritesArray.map((job) => (
          <Job
            key={job.id}
            data={job}
            onRemoveFavorite={() => handleRemoveFavorite(job.id)}
          />
        ))
      )}
    </div>
  )
}

export default MyFavorites
