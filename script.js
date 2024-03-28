const phoneStats = {
  actualLasting: Math.floor(Math.random() * 10) + 1,
  repairable: ['Yes', 'No', 'Partially'][Math.floor(Math.random() * 3)]
};

phoneStats.desirableFor = Math.floor(Math.random() * phoneStats.actualLasting) + 1;

document.getElementById('actualLasting').textContent = phoneStats.actualLasting;
document.getElementById('desirableFor').textContent = phoneStats.desirableFor;
document.getElementById('repairable').textContent = phoneStats.repairable;

let score = 0;
const pointsDisplay = document.getElementById('points');

function checkScore() {
  if (score < 0) {
    pointsDisplay.textContent = 'Game Over - You Lost!';
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById('plannedObsolescence').disabled = true;
  document.getElementById('perceivedObsolescence').disabled = true;
  document.getElementById('both').disabled = true;
  document.getElementById('fair').disabled = true;
}

document.getElementById('plannedObsolescence').addEventListener('click', function() {
  if ((phoneStats.actualLasting < 5 || phoneStats.repairable === 'No' || phoneStats.repairable === 'Partially') && phoneStats.desirableFor >= phoneStats.actualLasting - 2) {
    score++;
  } else {
    score--;
  }
  updateScore();
  checkScore();
  generateNewPhone();
});

document.getElementById('perceivedObsolescence').addEventListener('click', function() {
  if (phoneStats.desirableFor < phoneStats.actualLasting - 2 && (phoneStats.actualLasting >= 5 && phoneStats.repairable !== 'No' && phoneStats.repairable !== 'Partially')) {
    score++;
  } else {
    score--;
  }
  updateScore();
  checkScore();
  generateNewPhone();
});

document.getElementById('both').addEventListener('click', function() {
  if ((phoneStats.actualLasting < 5 || phoneStats.repairable === 'No' || phoneStats.repairable === 'Partially') && (phoneStats.desirableFor < phoneStats.actualLasting - 2)) {
    score++;
  } else {
    score--;
  }
  updateScore();
  checkScore();
  generateNewPhone();
});

document.getElementById('fair').addEventListener('click', function() {
  if ((phoneStats.actualLasting >= 5 || phoneStats.repairable !== 'No' || phoneStats.repairable !== 'Partially') && (phoneStats.desirableFor >= phoneStats.actualLasting - 2)) {
    score++;
  } else {
    score--;
  }
  updateScore();
  checkScore();
  generateNewPhone();
});

function updateScore() {
  pointsDisplay.textContent = score;
}

function generateNewPhone() {
  phoneStats.actualLasting = Math.floor(Math.random() * 10) + 1;
  phoneStats.desirableFor = Math.floor(Math.random() * phoneStats.actualLasting) + 1;
  phoneStats.repairable = ['Yes', 'No', 'Partially'][Math.floor(Math.random() * 3)];

  document.getElementById('actualLasting').textContent = phoneStats.actualLasting;
  document.getElementById('desirableFor').textContent = phoneStats.desirableFor;
  document.getElementById('repairable').textContent = phoneStats.repairable;
}