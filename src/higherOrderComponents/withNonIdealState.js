import { compose, branch, renderComponent } from 'recompose';

import Spinner from '../common/Spinner';
import FailedMessage from '../common/FailedMessage';

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