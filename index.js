
document.addEventListener('DOMContentLoaded', function () {
    const cre_input = document.createElement("input");
    document.body.appendChild(cre_input);

    const cre_p = document.createElement("p");
    cre_p.textContent = "PLEASE PUT YOUR NAME ";
    document.body.appendChild(cre_p);

    const cre_post = document.createElement("button");
    cre_post.textContent = "CREATE POST";
    document.body.appendChild(cre_post);

    const cre_del = document.createElement("button");
    cre_del.textContent = "CRE DEL";
    document.body.appendChild(cre_del);

    let name, time;

    cre_post.addEventListener("click", () => {
        name = cre_input.value;

        if (!name) {
            alert("Please enter your name!");
            return;
        }

        time = new Date().toLocaleTimeString();

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(name, time);

                const users = [{
                    user_name: name,
                    user_login_time: time,
                }];

                resolve(users);

                cre_del.onclick = () => {
                    users.pop();
                    localStorage.removeItem("usersdetails");
                };
            }, 1000);
        })
        .then((res) => {
            localStorage.setItem("usersdetails", JSON.stringify(res));
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    });
});
