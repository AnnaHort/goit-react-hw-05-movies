import { getMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { ListElStyled, ListStyled, TextStyle } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const adress = `/movie/${id}/reviews`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await getMovies(adress);

        setLoading(false);
        const results = reviewsData.results;
        setReviews(results);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [adress]);

  if (loading) {
    return <Circles />;
  }
  return (
    <ListStyled>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <ListElStyled key={review.id}>
            <>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </>
          </ListElStyled>
        ))
      ) : (
        <TextStyle>We don't have any reviews for this movie</TextStyle>
      )}
    </ListStyled>
  );
};
