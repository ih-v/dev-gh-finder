import { UserStat } from "components/UserStat";
import styles from "./UserCard.module.scss";
import { IGitHubLocalUser } from "types";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

interface UserCardProps extends IGitHubLocalUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={props.avatar} alt={props.login} />
      <UserTitle
        name={props.name}
        login={props.login}
        created={props.created}
      />
      <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
