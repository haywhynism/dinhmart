class User {
    constructor(fullname, email, picture, id) {
        this.fullname = fullname;
        this.email = email;
        this.picture = picture;
        this.id = id;
    }

    saveUser() {
        let userToSave = {fullname:this.fullname, email:this.email, picture:this.picture, id:this.id};
        let convUser = JSON.stringify(userToSave);

        localStorage.setItem("user", convUser);
        // localStorage.setItem("user", JSON.stringify(this));
    }

    delUser(){
        localStorage.removeItem("user");
    }
}
export default User;
