// Creamos el feth para traer los datos de la api permitiéndonos poner por las props porner las páginas

import { localhostUserToModel } from "../mappers/localhost-users.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {
    const url = `${ import.meta.env.VITE_BASE_USR}/users?_page=${ page }`;
    const res = await fetch(url);
    const date = await res.json();
    const { data } = date;

    const users = data.map(localhostUserToModel);
    return users;
}