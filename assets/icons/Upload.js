import { memo } from 'react';

import PropTypes from 'prop-types';

import { iconPropTypes } from '@/utils/types';

import { useColor } from '@/utils/hooks';

const Upload = memo(({ width, height, disabled }) => {
  const { white, grey } = useColor();

  return (
    <svg width={width} height={height} viewBox="0 0 16 18" fill="current" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.09167 4.5917L7.16667 3.50836V13.1667C7.16667 13.3877 7.25446 13.5997 7.41074 13.756C7.56702 13.9122 7.77899 14 8 14C8.22101 14 8.43297 13.9122 8.58926 13.756C8.74554 13.5997 8.83333 13.3877 8.83333 13.1667V3.50836L9.90833 4.5917C9.9858 4.6698 10.078 4.7318 10.1795 4.77411C10.2811 4.81641 10.39 4.8382 10.5 4.8382C10.61 4.8382 10.7189 4.81641 10.8205 4.77411C10.922 4.7318 11.0142 4.6698 11.0917 4.5917C11.1698 4.51423 11.2318 4.42206 11.2741 4.32051C11.3164 4.21896 11.3382 4.11004 11.3382 4.00003C11.3382 3.89002 11.3164 3.7811 11.2741 3.67955C11.2318 3.578 11.1698 3.48583 11.0917 3.40836L8.59167 0.908364C8.5142 0.830257 8.42203 0.768262 8.32048 0.725954C8.21893 0.683647 8.11001 0.661865 8 0.661865C7.88999 0.661865 7.78107 0.683647 7.67952 0.725954C7.57797 0.768262 7.4858 0.830257 7.40833 0.908364L4.90833 3.40836C4.75141 3.56528 4.66326 3.77811 4.66326 4.00003C4.66326 4.22195 4.75141 4.43478 4.90833 4.5917C5.06525 4.74862 5.27808 4.83677 5.5 4.83677C5.72192 4.83677 5.93475 4.74862 6.09167 4.5917ZM13 6.50003H11.3333C11.1123 6.50003 10.9004 6.58783 10.7441 6.74411C10.5878 6.90039 10.5 7.11235 10.5 7.33336C10.5 7.55438 10.5878 7.76634 10.7441 7.92262C10.9004 8.0789 11.1123 8.1667 11.3333 8.1667H13C13.221 8.1667 13.433 8.2545 13.5893 8.41078C13.7455 8.56706 13.8333 8.77902 13.8333 9.00003V14.8334C13.8333 15.0544 13.7455 15.2663 13.5893 15.4226C13.433 15.5789 13.221 15.6667 13 15.6667H3C2.77899 15.6667 2.56702 15.5789 2.41074 15.4226C2.25446 15.2663 2.16667 15.0544 2.16667 14.8334V9.00003C2.16667 8.77902 2.25446 8.56706 2.41074 8.41078C2.56702 8.2545 2.77899 8.1667 3 8.1667H4.66667C4.88768 8.1667 5.09964 8.0789 5.25592 7.92262C5.4122 7.76634 5.5 7.55438 5.5 7.33336C5.5 7.11235 5.4122 6.90039 5.25592 6.74411C5.09964 6.58783 4.88768 6.50003 4.66667 6.50003H3C2.33696 6.50003 1.70107 6.76342 1.23223 7.23226C0.763392 7.7011 0.5 8.33699 0.5 9.00003V14.8334C0.5 15.4964 0.763392 16.1323 1.23223 16.6011C1.70107 17.07 2.33696 17.3334 3 17.3334H13C13.663 17.3334 14.2989 17.07 14.7678 16.6011C15.2366 16.1323 15.5 15.4964 15.5 14.8334V9.00003C15.5 8.33699 15.2366 7.7011 14.7678 7.23226C14.2989 6.76342 13.663 6.50003 13 6.50003Z"
        fill={disabled ? grey : white}
      />
    </svg>
  );
});

Upload.defaultProps = {
  width: 24,
  height: 24,
  disabled: false,
};

Upload.propTypes = {
  height: iconPropTypes.width,
  width: iconPropTypes.height,
  disabled: PropTypes.bool,
};

export default Upload;