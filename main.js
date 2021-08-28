function validate() {
    const a = document.getElementById("first-name");
    const b = document.getElementById("last-name");
    const c = document.getElementById("email")
    const d = document.getElementById("password")
    const e = document.getElementById("notify-name");
    const f = document.getElementById("notify-last-name");
    const g = document.getElementById("notify-email");
    const h = document.getElementById("notify-password");
    const i = document.getElementById("alert");
    const j = document.getElementById("alert1");
    const k = document.getElementById("alert2");
    const l = document.getElementById("alert3");
    
    if (a.value === "") {
        i.style.display = "inline-block"
        e.innerHTML = "First Name cannot be empty";
        // a.focus();
        
        return false;
    }
    
    if (b.value === "") {
        j.style.display = "inline-block"
        f.innerHTML = "Last Name cannot be empty";
        a.focus();

        return false;
    }

    if (c.value === "") {
        k.style.display = "inline-block"
        g.innerHTML = "Looks like this is not an email";
        a.focus()
        return false;
    }
    if (d.value === "") {
        l.style.display = "inline-block"
        h.innerHTML = "Password cannot be empty";
        a.focus()
        return false;
    }
}
