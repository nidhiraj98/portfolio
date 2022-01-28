import { Designation } from "./designation";

export class Experience {
    companyName: String = "";
    roles: Designation[] = [];

    constructor(companyName: String, roles: Designation[]) {
        this.companyName = companyName;
        this.roles = roles;
    }
}
