import userDate from "../Profile/userDate.json";
import friends from "../FriendsList/friends.json";
import transactions from "../TransactionHistory/transactions.json";

import Container from "./App.styled.js";
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendsList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";

export default function App() {
  return (
    <Container>
      <Profile
        username={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        avatar={userDate.avatar}
        stats={userDate.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
