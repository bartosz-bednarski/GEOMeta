import Achievements from "./Achievements";
import Password from "./Password";
import Personal from "./Personal";
import classes from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={classes["profile-container"]}>
      <Personal />
      <Password />
      <Achievements />
    </div>
  );
};
export default Profile;
