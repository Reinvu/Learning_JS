function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

export function getCurrentUser() {
    const id = localStorage.getItem("currentUserId");
    const users = getUsers();

    return users.find((user) => {
        return user.id === id
    }) || null;
}

export function registerUser(username, password) {
    username = username.trim().toLowerCase();
    const users = getUsers();

    const existingUser = users.find((user) => {
        return user.username === username
    });

    if (existingUser) {
        throw new Error("Такой логин уже занят");
    }

    const user = {
        id: crypto.randomUUID(),
        username: username,
        password: password
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserId", user.id);
}

export function loginUser(username, password) {
    username = username.trim().toLowerCase();
    const users = getUsers();

    const user = users.find((user) => {
        return user.username === username && user.password === password
    });
    if (!user) {
        throw new Error("Неверный логин или пароль");
    }

    localStorage.setItem("currentUserId", user.id);
}

export function logoutUser() {
    localStorage.removeItem("currentUserId");
}