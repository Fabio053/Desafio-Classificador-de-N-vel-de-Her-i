let heroi = {
    nome: "Heroi Generico",
    XP: 1000,
    rank: "" 
}; 

if (heroi.XP <= 1000) {
    heroi.categoria = "Ferro";
} else if (heroi.XP >= 1001 && heroi.XP <= 2000) {
    heroi.categoria = "Bronze";
} else if (heroi.XP >= 2001 && heroi.XP <= 5000) {
    heroi.categoria = "Prata";
} else if (heroi.XP >= 5001 && heroi.XP <= 7000) {
    heroi.categoria = "Ouro";
} else if (heroi.XP >= 7001 && heroi.XP <= 9000) {
    heroi.categoria = "Platina";
} else if (heroi.XP >= 9001 && heroi.XP <= 10000) {
    heroi.categoria = "Ascendente";
} else if (heroi.XP >= 10001) {
    heroi.categoria = "Radiante";
}

console.log(`O Herói de nome ${heroi.nome} está no rank ${heroi.categoria}!`);