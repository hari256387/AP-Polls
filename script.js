// Sample data to simulate votes
let votes = {
    TDP: 0,
    YSRCP: 0,
    JSP: 0,
    INC: 0,
    BJP: 0,
};

document.addEventListener("DOMContentLoaded", () => {
    const pollForm = document.getElementById("pollForm");
    const voteButton = document.getElementById("voteButton");
    const resultList = document.getElementById("resultList");
    const resultSection = document.getElementById("result");

    pollForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    voteButton.addEventListener("click", () => {
        const selectedParty = document.querySelector("input[name='party']:checked");

        if (selectedParty) {
            const partyName = selectedParty.value;
            votes[partyName]++;

            // Calculate percentages
            const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
            const percentages = {};

            for (const party in votes) {
                percentages[party] = ((votes[party] / totalVotes) * 100).toFixed(2);
            }

            // Display results
            resultList.innerHTML = "";
            for (const party in percentages) {
                resultList.innerHTML += `<p>${party}: ${percentages[party]}%</p>`;
            }

            resultSection.style.display = "block";
        }
    });
});
