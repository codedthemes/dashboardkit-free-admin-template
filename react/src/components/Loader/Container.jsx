import PropTypes from 'prop-types';

// -----------------------|| CONTAINER ||-----------------------//

export default function Container({ animationDuration, children, isFinished }) {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`
      }}
    >
      {children}
    </div>
  );
}

Container.propTypes = { animationDuration: PropTypes.number, children: PropTypes.node, isFinished: PropTypes.bool };
