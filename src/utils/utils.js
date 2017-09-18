/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

export default function injectWidgetId(Component) {
  const Wrapper = (props, context) => <Component {...props} widgetId={context.widgetId} />;

  Wrapper.contextTypes = { widgetId: PropTypes.string };
  return Wrapper;
}
