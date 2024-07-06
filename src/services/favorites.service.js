

export async function getFavorites() {
  return new Promise((resolve) => {
    const favorites = localStorage.getItem("favorites");
    setTimeout(() => {
      resolve(JSON.parse(favorites) || []);
    }, 500);
  });
}

export async function addFavorite(pokemon) {
  return new Promise((resolve) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((p) => p.id === pokemon.id)) {
      favorites.push(pokemon);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setTimeout(() => {
      resolve(favorites);
    }, 500);
  });
}

export function isFavorite(pokemon) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.some((p) => p.id === pokemon.id);
}
