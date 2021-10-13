import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children, ...rest }) {
  const userName = useSelector(store => store.profileReducer.name)

  return (
    <Route
      {...rest}
      render={() =>
        userName ? (
          children
        ) : (
          <Redirect
            to='/login'
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
  rest: PropTypes.object
};
