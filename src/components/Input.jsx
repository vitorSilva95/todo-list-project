import PropTypes from 'prop-types';
import React from 'react';

function Input({ type, value, label, onChange, className,id}) {
  return (
    <div>
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          className={ className }
          value={ value }
          onChange={ onChange }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: '',
  value: '',
  onChange: '',
  id: '',
  className: '',
};

export default Input;
