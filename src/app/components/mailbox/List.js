import React from 'react';
import PropTypes from 'prop-types';

const List = ({ mailSettings }) => {
    return <div className="items-column-list scroll-if-needed scroll-smooth-touch">List</div>;
};

List.propTypes = {
    mailSettings: PropTypes.object.isRequired
};

export default List;