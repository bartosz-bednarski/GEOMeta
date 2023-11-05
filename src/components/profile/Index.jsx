import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Achievements from "./Achievements";
import Password from "./Password";
import Personal from "./Personal";
import classes from "./profile.module.scss";

const Profile = () => {
  const loader = useLoaderData();
  const [profileData, setProfileData] = useState(loader.body);

  console.log(profileData);
  return (
    <div className={classes["profile-container"]}>
      <Personal
        usernameShort={
          profileData !== undefined ? profileData.username_short : ""
        }
      />
      <Password />
      <Achievements data={profileData} />
    </div>
  );
};
export default Profile;
