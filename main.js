function validate() {
    const a = document.getElementById("first-name");
    const b = document.getElementById("last-name");
    const c = document.getElementById("email")
    const d = document.getElementById("password")
    const e = document.getElementById("notify-name");
    const f = document.getElementById("notify-last-name");
    const g = document.getElementById("notify-email");
    const h = document.getElementById("notify-password");
    const i = document.getElementById("alert")

    if (a.value === "") {
        i.style.display = "inline-block"
        e.innerHTML = "First Name cannot be empty";
        // a.focus();
        
        return false;
    }
    
    if (b.value === "") {
        i.style.display = "inline-block"
        f.innerHTML = "Last Name cannot be empty";
        a.focus();

        return false;
    }

    if (c.value === "") {
        i.style.display = "inline-block"
        g.innerHTML = "Looks like this is not an email";
        a.focus()
        return false;
    }
    if (d.value === "") {
        i.style.display = "inline-block"
        h.innerHTML = "Password cannot be empty";
        a.focus()
        return false;
    }
}