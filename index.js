const typeChart = {
    fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
    water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
    electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
    grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

function calculationEffectiveness(attacker, defender) {
    const attackerData = typeChart[attacker];
    if (!attackerData) return {multiplier: 1, message: "Effective", className: "nuetral" };

    if (attackerData.strongAgainst.includes(defender)) {
        return {multiplier: 2, message: "Super Effective!", className: "super" };
    }
    if (attackerData.weakAgainst.includes(defender)) {
        return { multiplier: 0.5, message: "Not Very Effective...", className: "notvery" };
    }
    return { multiplier: 1, message: "Effective", className: "effective" };
}

document.getElementById("calculate").addEventListener("click", () => {
    const attacker = document.getElementById("attacker").value;
    const defender = document.getElementById("defender").value;

    const result = calculationEffectiveness(attacker, defender);
    const resultDiv = document.getElementById("result");

    resultDiv.textContent = `${result.message} Multiplier: ${result.multiplier}x`;
    resultDiv.className = result.className;
});