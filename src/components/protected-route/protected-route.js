import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children, ...rest }) {
  const userName = useSelector(store => store.profileReducer.name)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
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
