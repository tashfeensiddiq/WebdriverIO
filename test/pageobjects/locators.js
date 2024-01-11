class locators{

    constructor() {

        this.assignorg = new AssignOrg();
        this.loginpage2 = new Login();
        this.module = new ModuleList();
        this.teams = new TeamsModule();

    }

}

    class Login{
    get inputUsername () {return $("[formcontrolname='Email']");}
    get inputPassword () {return $("[formcontrolname='Password']");}
    get btnSubmit () {return $("button[aria-label='LOGIN']");}
}

    class ModuleList{
        get btnTeams () {return $("//span[contains(@class,'nav-link-title ng-star-inserted')and contains(text(), 'Team')]");}
    }

    class TeamsModule{
        get btnOrgAdd () {return $("span=UNTERNEHMEN ZUWEISEN");}
    }

    class AssignOrg{
        get OrgLogoAdd() { return $("span=HOCHLADEN"); }
        get OrgLogoAddModal() { return $("input[type='file']"); }
        get OrgLogoAddModalSave() { return $("span=SAVE");}
    }



export default new locators();