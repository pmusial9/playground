export function getASingleUser(username: string): Promise<Response> {
    return fetch(`https://api.github.com/users/${username}`);
}

export function listUserRepositories(username: string): Promise<Response> {
    return fetch(`https://api.github.com/users/${username}/repos`);
}
