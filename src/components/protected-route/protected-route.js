import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children, ...rest }) {
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

export default ProtectedRoute;
