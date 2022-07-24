import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import user from './user'
import friends from './friends'
import data from './data'
import transactions from './transactions'
import {Container} from '../App.styled'


export const App = () => {
  return (
    <Container>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics
        title="Upload stats"
        stats={data}
      />
        <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Container>
   
  );
};
