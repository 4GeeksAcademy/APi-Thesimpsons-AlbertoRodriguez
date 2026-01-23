export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }

    ],
    characters: [],
    locations: [],
    favorito: [],
    favorit: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_characters':
      return {
        ...store,
        characters: action.payload

      };
    case 'set_locations':
      return {
        ...store,
        locations: action.payload
      }

    case 'add_to_favorito':
      const character = action.payload
      const exist = store.favorito.find(item => item.id === character.id)

      if (exist) {

        return store
      }
      return {
        ...store,
        favorito: [...store.favorito, character]
      }

    case 'delete_favorito':
      const characterinfo = action.payload
      const newfavorito = store.favorito.filter((item) => {
        return item.id != characterinfo.id

      })
      return {
        ...store,
        favorito: newfavorito
      }

    case 'add_to_favorit':

      const location = action.payload
      const exi = store.favorit.find(item => item.id === location.id)


      if (exi) {

        return store
      }
      return {
        ...store,
        favorit: [...store.favorit, location]
      }
    case 'delete_favorit':
      const locationinf = action.payload
      const newfavorit = store.favorit.filter((item) => {
        return item.id !== locationinf.id

      })
      return {
        ...store,
        favorit: newfavorit
      }
    default:
      throw Error('Unknown action.');
  }
}

