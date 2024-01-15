class locators{

    constructor() {

        this.assignorg = new AssignOrg();
        this.loginpage2 = new Login();
        this.module = new ModuleList();
        this.teams = new TeamsModule();
        this.createuser3 = new CreateUser2();
        this.logout3 = new logout2();

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

    class CreateUser2{
        get btnUserAdd () {return $("//span[contains(text(),'NUTZER ZUWEISEN')]");}
        get inputEmail () {return $("[formcontrolname='Email']");}
        get inputOrg () {return $("input[data-placeholder='Unternehmen']");}
        get inputOrgName() {return $("span=Halter UK");}
        get inputRole() {return $("span=Rolle");}
        get inputRoleType() {return $("span=Projektmanager");}
        get createUser() {return $("span=Benutzer einladen");}
    }


    class logout2{
        get clickUser() {return $("p=TU PM");}
        get logoutButton() {return $("span=Abmelden");}
    }



export default new locators();