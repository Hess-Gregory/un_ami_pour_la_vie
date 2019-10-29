export class UserInfoModel {
guid: string;
uid: string;

username: string;
email: string;
password: string;
isActive: boolean;
role: number;

constructor(obj: any = null) {
    if (obj != null) {
        Object.assign(this, obj);
    }
}
}
