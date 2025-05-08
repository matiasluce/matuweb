const platinos = ["Dark Souls: REMASTERED", "Resident Evil 4 (2005)", "Calico", "Pode", "Tomb Raider", "Little Misfortune", "Blaze and the Monster Machines Axle City Racers", "Stumble guys", "One-armed cook", "Brothers - A Tale Of Two Sons", "Go-go town", "My Coworker Is An Idiot", "Unpacking", "We Were Here: Expeditions", "Assemble With Care", "Transformice", "Gym Simulator 24", "Monument Valley II", "Florence", "Rainy Season", "Samsara Room", "Pineapple On Pizza", "A Building Full Of Cats", "Resonance Of The Ocean"];


const lista = document.getElementById("lista_platinos");

platinos.forEach(juego => {
    const li = document.createElement("li");
    li.textContent = juego;
    lista.appendChild(li);
});

