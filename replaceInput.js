const DIC_REPLACER = {
  'foo': 'bar',
  'cat': 'dog',
  'helo': 'hello',
  'heldp': 'help',
}
const KEY_REPLACER = Object.keys(DIC_REPLACER);

const replacer = ({ target }) => {

  KEY_REPLACER.forEach(item => (
    target.value = target.value.replace(item, DIC_REPLACER[item]
  )));
}

const enableReplacer = () => {
  const inputs = document.querySelectorAll('input[type="text"]');
  
  if(inputs.length) {
    inputs.forEach(item => (
      item.addEventListener("keypress", event => replacer(event)
    )));
    console.log("download replacer for inputs");
  }
}

enableReplacer();
