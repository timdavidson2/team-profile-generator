function genEmployees(team) {
  let htmlMain = "";
  team.forEach((obj) => {
    switch (obj.getRole()) {
      case "Engineer":
        let stringDataEng = genEngineer(obj);
        htmlMain += stringDataEng;
        break;
      case "Intern":
        let stringDataInt = genIntern(obj);
        htmlMain += stringDataInt;
        break;
      default:
        return "";
    }
  });
  return htmlMain;
}
