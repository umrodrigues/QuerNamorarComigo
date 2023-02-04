function btnYes() {
  const buttonNo = document.getElementById('no')
  const message = document.getElementById('message')
  message.innerHTML = 'Parabéns, acaba de ganhar um namorado 💖😍😘🥰'

  buttonNo.classList.add('invisible')
}

function ramdomLocationButton() {
  const buttonNo = document.getElementById('no')

  const totalNumber = 300
  const numberRandomTop = Math.floor(Math.random() * totalNumber)
  const numberRandomLeft = Math.floor(Math.random() * totalNumber)


  buttonNo.style.position = 'absolute';
  buttonNo.style.top = '50px';
  buttonNo.style.left = '10px';


  var leftAtual = parseInt(buttonNo.style.left);
  var topAtual = parseInt(buttonNo.style.top);

  buttonNo.style.top = (topAtual + numberRandomTop + 100) + 'px';
  buttonNo.style.left = (leftAtual + numberRandomLeft) + 'px';


  console.log(numberRandomTop, numberRandomLeft)
}

