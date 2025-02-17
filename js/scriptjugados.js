const completados = ["Dark Souls: REMASTERED","Dark Souls 2" , "Calico", "Obscure II", "Resident Evil 4 (2005)", "Pode", "Tomb Raider", "Little Misfortune", "Blaze and the Monster Machines Axle City Racers", "Stumble guys", "Brothers - A Tale Of Two Sons", "Go-go town", "My Coworker Is An Idiot", "Unpacking", "We Were Here: Expeditions", "Assemble With Care", "Transformice", "Gym Simulator 24", "Monument Valley II", "Florence", "Rainy Season", "Samsara Room", "Pineapple On Pizza", "A Building Full Of Cats", "Resonance Of The Ocean", "Silent Hill Shattered Memories", "Mouthwashing", "Outlast", "Bee movie game", "Let me out", "GTA SA", "GTA Vice City", "Cuphead", "FlatOut", "FlatOut 2", "Little inferno", "GRIS", "The Gunk", "Resident Evil Revelations 2", "Call of Duty Black Ops", "Hellblade Senua's Sacrifice", "Among The Sleep", "Behind The Frame", "Bioshock Infinite", "F.E.A.R", "Blue Estate", "Bright Memory", "Do Not Feed The Monkeys", "Journey", "Lego Indiana Jones", "Minecraft", "Pico Park", "A Story About My Uncle"];
const lista = document.getElementById("listajugados");

completados.forEach(juego => {
    const li = document.createElement("li");
    li.textContent = juego;
    lista.appendChild(li);
});