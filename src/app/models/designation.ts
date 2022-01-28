export class Designation {
    endYear: number = -1;
    roleName: String = "";
    description: String[] = [];

    constructor(endYear: number, roleName: String, description: String[]) {
        this.endYear = endYear;
        this.roleName = roleName;
        this.description = description;
    }
}
