function scrollToQuestionNode(id, location) {
  const element = document.getElementById(id);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  document.getElementById('texture').value = location
  document.getElementById('location').innerHTML = location
  init()
}

function scrollToSMC() {
  camera.position.set(-0.98,  1.18, -1.28)
}

function changeOpacity(opacity) {
  document.getElementById('data-map').style.opacity = opacity/100;

}

