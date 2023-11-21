import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Achievements from "./Achievements";
import Password from "./Password";
import Personal from "./Personal";
import classes from "./profile.module.scss";
import Loader from "../ui/Loader";

const Profile = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [profileData, setProfileData] = useState("");
  const [loaderShown, setLoaderShown] = useState(true);
  useEffect(() => {
    const getProfileData = async () => {
      const response = await fetch(
        `https://geo-meta-rest-api.vercel.app/api/profile/getProfile`,
        {
          method: "GET",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setProfileData(data.body);
      setLoaderShown(false);
    };
    getProfileData();
  }, []);
  if (loaderShown) {
    return <Loader />;
  }
  return (
    <div className={classes["profile-container"]}>
      {profileData !== "" && (
        <>
          <Personal usernameShort={profileData.username_short} />
          <Password />
          <Achievements data={profileData} />
        </>
      )}
    </div>
  );
};
export default Profile;
