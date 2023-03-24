import { memo } from 'react';

import PropTypes from 'prop-types';

import { iconPropTypes } from '@/utils/types';

import { useActiveColors } from '@/utils/hooks';

const Position = memo(({ width, height, isActive }) => {
  const setActiveColor = useActiveColors(isActive);

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 2H9C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7956 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7956 18 19V18H19C19.7956 18 20.5587 17.6839 21.1213 17.1213C21.6839 16.5587 22 15.7956 22 15V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM16 19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H16V19ZM16 10H4V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H15C15.2652 8 15.5196 8.10536 15.7071 8.29289C15.8946 8.48043 16 8.73478 16 9V10ZM20 15C20 15.2652 19.8946 15.5196 19.7071 15.7071C19.5196 15.8946 19.2652 16 19 16H18V9C17.9973 8.65886 17.9364 8.32067 17.82 8H20V15ZM20 6H8V5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6Z"
        fill={setActiveColor}
      />
    </svg>
  );
});

Position.defaultProps = {
  width: 24,
  height: 24,
  isActive: false,
};

Position.propTypes = {
  height: iconPropTypes.width,
  width: iconPropTypes.height,
  isActive: PropTypes.bool,
};

export default Position;
