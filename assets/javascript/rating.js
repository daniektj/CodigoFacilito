const container = document.getElementById('container');
const happy = document.getElementById('happy');
const pokerFace = document.getElementById('pokerFace');
const sad = document.getElementById('sad');




container.onmouseover = container.onmouseout = container.onclick = handler;

function handler(e) {

  console.log(e.type);

  function checker(el) {
    return el.className;
  }

  if (e.type == 'mouseover') {
    console.log(e.target.id);

    if (e.target.id === 'happy5' || e.target.id === 'happy4') {
      happy.style.setProperty('display', `block`);

    } else if (e.target.id === 'neutral3') {
      pokerFace.style.setProperty('display', `block`);

    } else if (e.target.id === 'sad2' || e.target.id === 'sad1') {
      sad.style.setProperty('display', `block`);

    }

  }


  if (e.type == 'mouseout') {

    if (e.target.id === 'happy5' || e.target.id === 'happy4') {
      happy.style.setProperty('display', `none`);

    } else if (e.target.id == 'neutral3') {
      pokerFace.style.setProperty('display', `none`);

    } else if (e.target.id === 'sad2' || e.target.id === 'sad1') {
      sad.style.setProperty('display', `none`);
    }
  }


  if (e.type == 'click'){

    if (e.target.id === 'happy5' || e.target.id === 'happy4') {
    
      happy.style.setProperty('animation', `celebration 0.8s both`);
      setTimeout(()=>{
        happy.style.setProperty('animation', `none`);
      }, 900)

    }
  }
}