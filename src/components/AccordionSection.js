import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;





    return (
      <div
        style={{
          background: isOpen ? '#eee' : '#eee',
          border: 'none',
          padding: '18px',
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9660;</span>}
            {isOpen && <span>&#9650;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#eee',
              border: 'none',
              marginTop: 10,
              padding: '18px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;