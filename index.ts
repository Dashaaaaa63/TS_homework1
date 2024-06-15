import { IUser, usersArray } from "./users";
import { IUserInfo, usersInfoArray } from "./userInfo";

interface IUserPosition {
  name: string;
  position: string;
  age: number;
  gender: string;
}

function getUsersJobPositions(usersArray: Array<IUser>): Array<IUserPosition> {
  const returnValue: Array<IUserPosition> = [];
  if (usersArray.length < 1) {
    return returnValue;
  }
  for (let i = 0; i < usersArray.length; i++) {
    const user = usersArray[i];
    const userInfo = usersInfoArray.find(
      (info) => user.userid === info.userid
    );
    if (userInfo) {
      returnValue.push({
        name: userInfo.name,
        position: userInfo.organization.position,
        age: userInfo.age,
        gender: user.gender,
      });
    }
  }
  return returnValue;
}

const usersPositions = getUsersJobPositions(usersArray);
console.log("userPositions", usersPositions);
