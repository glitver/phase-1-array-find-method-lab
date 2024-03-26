function superbowlWin(winResults) {
    let winYear = winResults.find(result => result.result === "W");
    return winYear ? winYear.year : undefined;
}