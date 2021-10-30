import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, IRest } from '../../utils/types';

const ProtectedRoute: React.FC<IRest> = ({ children, ...rest }) => {

  const userName = useSelector<RootState, string>(store => store.profileReducer.name)

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

export default ProtectedRoute;
