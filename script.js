let nbTeam = 0;
// define a structure where i can store the team score and the number of errors
class Team {
    constructor(name, score, error){
        this.name = name;
        this.score = score;
        this.error = error;
    }
}
let teams = [];

function initTeam(){
    const result = document.createElement("div");
    result.className = `team-container`

    for( let i = 0; i < nbTeam; i++){
        //create the team and add it to the array teams
        teams.push(new Team(`team-${i + 1}`, 0, 0));

        //container
        const team = document.createElement("div");
        team.className = `team`
        team.id += `team-${i + 1}`

        //name
        const name = document.createElement("p");
        name.className = `team-name`
        name.id = `team-name-${i + 1}`;
        name.innerText = `Équipe ${i + 1}`;
        team.append(name);

        //score
        const scoreSlot = document.createElement("div");
        scoreSlot.className = `team-score`;

        const score = document.createElement("p");
        score.id = `team-score-${i + 1}`;
        score.innerText = `${teams[i].score} `;
        scoreSlot.append(score);

        //add score button
        const scoreButton = document.createElement("button");
        scoreButton.className = `score-button`;
        scoreButton.innerText = "+";

        //score handler
        scoreButton.addEventListener("click", () => {
            teams[i].score += 1;
            teams[i].error = 0;
            document.querySelector(`#team-score-${i + 1}`).innerText = teams[i].score;
            document.querySelector(`#team-error-${i + 1}`).innerText = teams[i].error;

        })
        scoreSlot.append(scoreButton);
        team.append(scoreSlot);
        
        //error 
        const errorSlot = document.createElement("div");
        errorSlot.className = `team-error`;

        const error = document.createElement("p");
        error.id = `team-error-${i + 1}`;
        error.innerText = 0;
        errorSlot.append(error);

        //error button
        const errorButton = document.createElement("button");
        errorButton.className = `error-button`;
        errorButton.innerText = "Erreur";
        
        // score handler
        errorButton.addEventListener("click", () => {
            teams[i].error += 1;
            
            if (teams[i].error === 3){
                teams[i].error = 0;
                if(teams[i].score < 25){
                    teams[i].score = 0;
                    document.querySelector(`#team-score-${i + 1}`).innerText = 0;
                } else {
                    teams[i].score = 25;
                    document.querySelector(`#team-score-${i + 1}`).innerText = 25;
                }
            }
            document.querySelector(`#team-error-${i + 1}`).innerText = teams[i].score;
            document.querySelector(`#team-error-${i + 1}`).innerText = teams[i].error;
        })
        errorSlot.append(errorButton);
        team.append(errorSlot);

        //add the team to the container
        result.append(team)
    }
    return result
}

function init (){
    nbTeam = parseInt(document.querySelector("#team-nb-input").value);
    if(nbTeam > 0){
    document.querySelector(".main").replaceChildren(initTeam());
    }
}
document.querySelector("#team-nb-button").addEventListener("click", init)