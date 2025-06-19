const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const nameEl = document.getElementById('creature-name');
const idEl = document.getElementById('creature-id');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const typesEl = document.getElementById('types');
const hpEl = document.getElementById('hp');
const attackEl = document.getElementById('attack');
const defenseEl = document.getElementById('defense');
const spAtkEl = document.getElementById('special-attack');
const spDefEl = document.getElementById('special-defense');
const speedEl = document.getElementById('speed');

function clearCreatureInfo() {
  nameEl.textContent = '';
  idEl.textContent = '';
  weightEl.textContent = '';
  heightEl.textContent = '';
  typesEl.innerHTML = '';
  hpEl.textContent = '';
  attackEl.textContent = '';
  defenseEl.textContent = '';
  spAtkEl.textContent = '';
  spDefEl.textContent = '';
  speedEl.textContent = '';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  clearCreatureInfo();
  if (!query) return;

  // Special case for 'Red' (case-insensitive)
  if (query.toLowerCase() === 'red') {
    alert('Creature not found');
    return;
  }

  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${encodeURIComponent(query)}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (!data || !data.name) throw new Error();

    // Fill in the UI
    nameEl.textContent = data.name ? data.name.toUpperCase() : '';
    idEl.textContent = data.id ? `#${data.id}` : '';
    weightEl.textContent = data.weight !== undefined ? data.weight : '';
    heightEl.textContent = data.height !== undefined ? data.height : '';
    // Types
    typesEl.innerHTML = '';
    if (Array.isArray(data.types)) {
      data.types.forEach(typeObj => {
        const typeDiv = document.createElement('div');
        typeDiv.textContent = typeObj.name ? typeObj.name.toUpperCase() : '';
        typesEl.appendChild(typeDiv);
      });
    }
    // Stats
    if (Array.isArray(data.stats)) {
      for (const stat of data.stats) {
        switch (stat.name.toLowerCase()) {
          case 'hp': hpEl.textContent = stat.base_stat; break;
          case 'attack': attackEl.textContent = stat.base_stat; break;
          case 'defense': defenseEl.textContent = stat.base_stat; break;
          case 'special-attack': spAtkEl.textContent = stat.base_stat; break;
          case 'special-defense': spDefEl.textContent = stat.base_stat; break;
          case 'speed': speedEl.textContent = stat.base_stat; break;
        }
      }
    }
  } catch {
    alert('Creature not found');
  }
