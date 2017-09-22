import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayForm } from '../../actions/renderActions';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';


const BackButton = props => (
  <Button floated="left" content="Back" onClick={() => props.displayForm()} />
);


BackButton.propTypes = {
  displayForm: PropTypes.func.isRequired,
};

BackButton.defaultProps = {
  widgetId: WIDGET_ID,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;

  return {
    id,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  displayForm,
}, dispatch);


export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(BackButton));
