class Locators{

    constructor() {

        this.assignorg = new AssignOrg();

    }

}

    class AssignOrg{
        get OrgLogoAdd() { return $("span=HOCHLADEN"); }
        get OrgLogoAddModal() { return $("mat-hint=Max 5 MB, jpg or jpeg or png Foto."); }
        get OrgLogoAddModalSave() { return $("span=SAVE");}
    }



export default new Locators();