function getUserName(user) {
    return user.name || 'Гость';
}

// console.log(getUserName({ name: "Анна" })) // "Анна"
// console.log(getUserName({})) // "Гость"
// console.log(getUserName({ name: "" })) // "Гость"

function canAccess(user, resource) {
    return user.isAuth && (user.role === 'admin' || user?.id === resource.owner)
}

// Тесты:
console.log(canAccess({ isAuth: true, role: "admin" }, { owner: "user1" })) // true
console.log(canAccess({ isAuth: true, id: "user1" }, { owner: "user1" })) // true
console.log(canAccess({ isAuth: false, role: "admin" }, { owner: "user1" })) // false