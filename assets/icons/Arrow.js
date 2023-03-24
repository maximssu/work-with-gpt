import { useMemo } from 'react';

import PropTypes from 'prop-types';

import { useColor } from '@/utils/hooks';

const Arrow = ({ width, height, fill, className }) => {
  const { white, blue } = useColor();

  const fillColor = useMemo(() => {
    switch (fill) {
      case 'blue':
        return blue;
      default:
        return white;
    }
  }, [blue, fill, white]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.0002 1.16994C10.8128 0.983692 10.5594 0.87915 10.2952 0.87915C10.031 0.87915 9.77756 0.983692 9.59019 1.16994L6.00019 4.70994L2.46019 1.16994C2.27283 0.983692 2.01938 0.87915 1.75519 0.87915C1.49101 0.87915 1.23756 0.983692 1.05019 1.16994C0.956464 1.26291 0.88207 1.37351 0.831301 1.49537C0.780533 1.61723 0.754395 1.74793 0.754395 1.87994C0.754395 2.01195 0.780533 2.14266 0.831301 2.26452C0.88207 2.38638 0.956464 2.49698 1.05019 2.58994L5.29019 6.82994C5.38316 6.92367 5.49376 6.99806 5.61562 7.04883C5.73747 7.0996 5.86818 7.12574 6.00019 7.12574C6.1322 7.12574 6.26291 7.0996 6.38477 7.04883C6.50663 6.99806 6.61723 6.92367 6.71019 6.82994L11.0002 2.58994C11.0939 2.49698 11.1683 2.38638 11.2191 2.26452C11.2699 2.14266 11.296 2.01195 11.296 1.87994C11.296 1.74793 11.2699 1.61723 11.2191 1.49537C11.1683 1.37351 11.0939 1.26291 11.0002 1.16994Z"
        fill={fillColor}
      />
    </svg>
  );
};

Arrow.defaultProps = {
  width: 12,
  height: 8,
  className: '',
  fill: '',
};

Arrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default Arrow;
