import { useState } from "react";
import { IGitHubError, IGitHubLocalUser } from "types";

import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { isGitHubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/extract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<IGitHubLocalUser | null>(null);

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;

    const res = await fetch(url);
    const user = (await res.json()) as IGitHubLocalUser | IGitHubError;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
