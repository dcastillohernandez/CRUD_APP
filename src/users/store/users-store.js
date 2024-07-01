import { loadUsersByPage } from "../use-case/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(++state.currentPage );
  // Si los usuarios son igual a 0 entonces return, no hagas nada
  if ( users.length === 0 ) return;

  // pero si no, actualiza el estado del currentPage y el state.users
  state.currentPage += 1;
  state.users = users;
}

const loadPreviousPage = async () => {
    throw new Error('Not implemented');
}

const onUserChanged = () => {
    throw new Error('Not implemented');
}

const reloadPage = async () => {
    throw new Error('Not implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}