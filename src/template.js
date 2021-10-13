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

function genManager(team) {
  let managerData = "";
  team.forEach((obj) => {
    if (obj.getRole() === "Manager") {
      managerData = `			
			<div class="col-2 cardCont">
			<div class="card" >
			<div class="card-body">
			<h5 class="card-title">${obj.getName()}</h5>
			<p class="card-text"><i class="bi bi-clipboard-check"></i>${obj.getRole()}
			</p>
			</div>
			<ul class="list-group list-group-flush">
			<li class="list-group-item">ID: ${obj.getId()}</li>
			<li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
			<li class="list-group-item">Office Number: ${obj.getOfficeNumber()}</li>
			</ul>
			</div>
			</div>
			`;
    } else {
      return "";
    }
  });
  return managerData;
}
