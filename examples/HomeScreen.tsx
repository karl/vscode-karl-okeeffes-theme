import * as React from 'react';
import { useState, useEffect } from 'react';
import { isApiError } from 'matr-relay-lib';
import Loading from '../components/Loading';
import { getTutorialData } from '../api';
import { staticLogger } from 'matr-ui-log-lib';
import CriticalError from 'components/CriticalError';
import { Tutorial } from 'constants/types';
import TutorialScreen from './TutorialScreen';
import { RouteComponentProps } from 'react-router';

const logger = staticLogger.createPrefixedLogger('Home Screen');

// All possible states
enum UIState {
  'LOADING' = 'LOADING',
  'READY' = 'READY',
  'NOT_FOUND' = 'NOT_FOUND',
  'ERROR' = 'ERROR',
}

interface State {
  uiState: UIState;
  tutorial?: Tutorial;
}

const useTutorial = (tutorialId: string): State => {
  const [state, setState] = useState<State>({ uiState: UIState.LOADING });

  console.log('What is this!');

  useEffect(() => {
    const loadTutorial = async () => {
      try {
        const { data } = await getTutorialData(tutorialId);
        setState({
          uiState: UIState.READY,
          tutorial: data,
        });
      } catch (error) {
        if (
          isApiError(error) &&
          error.matrData.meta &&
          error.matrData.meta.status === 404
        ) {
          logger.error('Tutorial not found', error);
          setState({ uiState: UIState.NOT_FOUND });
        } else {
          logger.error('Error loading tutorial', error);
          setState({ uiState: UIState.ERROR });
        }
      }
    };

    loadTutorial();
  }, [tutorialId]);

  return state;
};

interface Props extends RouteComponentProps<{ tutorialId: string }> {}

export const HomeScreen: React.FunctionComponent<Props> = ({
  match: {
    params: { tutorialId },
  },
}) => {
  const { uiState, tutorial } = useTutorial(tutorialId);

  if (uiState === UIState.LOADING) {
    return <Loading />;
  }

  if (uiState === UIState.NOT_FOUND) {
    return <CriticalError message="Sorry, your tutorial could not be found" />;
  }

  if (uiState === UIState.ERROR) {
    return (
      <CriticalError message="Sorry, there was a problem with your tutorial" />
    );
  }

  return <TutorialScreen tutorial={tutorial} />;
};

export default HomeScreen;
