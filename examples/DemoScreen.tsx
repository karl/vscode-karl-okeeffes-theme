import * as React from 'react';
import Tabula from '../components/Tabula';
import { modules as demoModules } from '../constants';
import UserRole from 'constants/user-role';
import TutorialState from 'constants/tutorial-state';
import { Tutorial, TutorialUser, MatrAuth0User } from 'constants/types';
import StarsBackground from 'components/StarsBackground/StarsBackground';
import { staticLogger } from 'matr-ui-log-lib';
import TutorialType from 'constants/tutorial-type';

const logger = staticLogger.createPrefixedLogger('Demo');

const demoAuthUser: MatrAuth0User = {
  sub: 'demoUser',
  nickname: 'Demo User',
  name: 'Demo User',
  picture: '',
  updated_at: '',
  email: 'demouser@matr.org',
  email_verified: false,
  'https://matr.org/profile-api/user_metadata': {
    given_name: 'Demo',
    family_name: 'User',
  },
  given_name: 'Demo',
  family_name: 'user',
};

const demoUser: TutorialUser = {
  userId: 'demoUser',
  role: UserRole.STUDENT,
  firstName: 'Demo',
  lastName: 'User',
};

const demoTutorial: Tutorial = {
  id: 'demo-tutorial',
  state: TutorialState.STARTED,
  startTime: null,
  endTime: null,
  users: [demoUser],
  type: TutorialType.MATR,
};

class DemoScreen extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    logger.info('In Demo mode');
  }

  render() {
    return (
      <StarsBackground>
        <Tabula
          tutorial={demoTutorial}
          authUser={demoAuthUser}
          user={demoUser}
          modules={demoModules}
          isDemo
        />
      </StarsBackground>
    );
  }
}

export default DemoScreen;
