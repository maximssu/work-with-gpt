import { memo } from 'react';

import { iconPropTypes } from '@/utils/types';

import { useColor } from '@/utils/hooks';

const Close = memo(({ width, height }) => {
  const { black } = useColor();

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"
        fill={black}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
        fill={black}
      />
    </svg>
  );
});

Close.defaultProps = {
  width: 24,
  height: 24,
};

Close.propTypes = { ...iconPropTypes };

export default Close;