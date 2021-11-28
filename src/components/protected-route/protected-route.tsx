import { Route, Redirect } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { IRest } from '../../utils/types';

const ProtectedRoute: React.FC<IRest> = ({ children, ...rest }) => {

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

export default ProtectedRoute;
