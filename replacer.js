const DIC_REPLACER = {
  'foo': 'bar',
  'cat': 'dog',
  'helo': 'hello',
  'heldp': 'help',
}
const KEY_REPLACER = Object.keys(DIC_REPLACER);

const replacerInput = ({ target }) => {

  KEY_REPLACER.forEach(item => (
    target.value = target.value.replace(item, DIC_REPLACER[item]
  )));
}

const replacerContenteditable = ({ target }) => {
  
  KEY_REPLACER.forEach(item => {
    const range = document.createRange();
    const selection = window.getSelection();

    target.innerHTML = target.innerHTML.replace(item, DIC_REPLACER[item]);
    
    range.selectNodeContents(target);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    
  });
}

const enableReplacer = () => {
  const inputs = document.querySelectorAll('input[type="text"]');
  const contenteditables = document.querySelectorAll("*[contenteditable='true']");
  
  if(inputs.length) {
    inputs.forEach(item => (
      item.addEventListener("keypress", event => replacerInput(event)
    )));
    console.log("download replacer for inputs");
  }

  if(contenteditables.length) {
    contenteditables.forEach(item => (
      item.addEventListener("keypress", event => replacerContenteditable(event)
    )));
    console.log("download replacer for contenteditables");
  }

}

enableReplacer();
