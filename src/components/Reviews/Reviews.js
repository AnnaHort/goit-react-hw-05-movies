import { getMovies } from 'components/API';
import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const adress = `/movie/${id}/reviews`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await getMovies(adress);
        // console.log(reviewsData);
        setLoading(false);
        const results = reviewsData.results;
        setReviews(results);
        // console.log(results);
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
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </>
          </li>
        ))
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </ul>
  );
};
