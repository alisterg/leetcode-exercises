
/*
 * Number cards count as their face value (2 through 10). 
 * Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.
 *
 * Return the highest score of the cards that is less than or equal to 21. 
 * If there is no score less than or equal to 21 return the smallest score more than 21.
 * 
 * NOTE: No validation. I'm aiming for less code
 */

const scoreHand = cards => {
    let score = cards.reduce((acc, curr) => isNaN(curr)
        ? curr === 'A'
            ? acc + 11
            : acc + 10
        : acc + +curr, 0);

    for (let i = 0; i < cards.filter(x => x === 'A').length; i++) {
        if (score <= 21) continue;

        score -= 10;
    }

    return score;
}
