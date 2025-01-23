import PropTypes from 'prop-types';
// third party
import { useNProgress } from '@tanem/react-nprogress';

// project imports
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';

// -----------------------|| PROGRESS ||-----------------------//

export default function Progress({ isAnimating }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      <Spinner />
    </Container>
  );
}

Progress.propTypes = { isAnimating: PropTypes.bool };
