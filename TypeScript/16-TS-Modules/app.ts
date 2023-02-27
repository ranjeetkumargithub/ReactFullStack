import { IRandomUser } from "./models/IRandomUserData";
import { RandomUserService } from "./services/RandomUserServices";
import { UserUtil } from "./util/UserUtil";

const users:IRandomUser[] | null | undefined = RandomUserService.getAllUsers();
if(users){
    console.log(`All Users : ${users.length}`);
    let maleUsers = UserUtil.getAllMaleUsers(users);
    console.log(`Male Users : ${maleUsers.length}`);
    console.log(maleUsers);
}