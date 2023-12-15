import React from "react";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setAchievements } from "../../redux/achievements-reducer";
import Achievements from "./Achievements";
import Password from "./Password";
import Personal from "./Personal";
import classes from "./profile.module.scss";
import Loader from "../ui/Loader";
import { getProfile } from "../../api/profile";

const Profile: React.FC = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const achievementsUpToDate = useAppSelector(
    (state) => state.achievements.upToDate
  );

  const [loaderShown, setLoaderShown] = useState<boolean>(false);
  const setProfileData = async () => {
    setLoaderShown(true);
    dispatch(setAchievements(await getProfile(accessToken)));
    setLoaderShown(false);
  };

  useEffect(() => {
    if (achievementsUpToDate === false && accessToken !== "") {
      setProfileData();
    }
  }, [accessToken, achievementsUpToDate]);
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
