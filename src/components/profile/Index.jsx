import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAchievements } from "../../redux/achievements-reducer";
import Achievements from "./Achievements";
import Password from "./Password";
import Personal from "./Personal";
import classes from "./profile.module.scss";
import Loader from "../ui/Loader";

const Profile = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const achievementsUpToDate = useSelector(
    (state) => state.achievements.upToDate
  );

  const [loaderShown, setLoaderShown] = useState(false);
  const getProfileData = async () => {
    setLoaderShown(true);
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
    dispatch(setAchievements(data.body));
    setLoaderShown(false);
  };

  useEffect(() => {
    if (achievementsUpToDate === false && accessToken != "") {
      getProfileData();
    }
  }, [accessToken]);
  if (loaderShown) {
    return <Loader />;
  }
  return (
    <div className={classes["profile-container"]}>
      <Personal />
      <Password />
      <Achievements />
    </div>
  );
};
export default Profile;
