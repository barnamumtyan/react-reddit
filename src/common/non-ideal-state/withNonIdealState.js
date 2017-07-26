import { compose, branch, renderComponent } from 'recompose';

import Spinner from './Spinner';
import FailedMessage from './FailedMessage';

const withSpinnerWhileLoading = branch(
  ({isLoading}) => isLoading,
  renderComponent(Spinner)
)

const withMessageWhenFailed = branch(
  ({didFail}) => didFail,
  renderComponent(FailedMessage)
)

const withNonIdealState = compose(
  withSpinnerWhileLoading,
  withMessageWhenFailed
);

export default withNonIdealState;