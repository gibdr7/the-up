import React from 'react';

export default props => {
  const { size, emoji } = props;
  const styles = {
    fontSize: `${size}rem`,
  };

  return (
    <span style={styles} role="img" aria-label="emoji">
      {emoji}
    </span>
  );
};
