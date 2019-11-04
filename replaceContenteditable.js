const DIC_REPLACER_CON = {
  'foo': 'bar',
  'cat': 'dog',
  'helo': 'hello',
  'heldp': 'help',
}
const KEY_REPLACER_CON= Object.keys(DIC_REPLACER_CON);

const replacerContenteditable = ({ target }) => {
  element = target;
  KEY_REPLACER_CON.forEach(item => (
    element.textContent = event.target.textContent.replace(item, DIC_REPLACER_CON[item]
  )));
}

const enableReplacerContenteditable = () => {
  const contenteditables = document.querySelectorAll("*[contenteditable='true']");
  
  if(contenteditables.length) {
    contenteditables.forEach(item => (
      item.addEventListener("keypress", event => replacerContenteditable(event)
    )));
    console.log("download replacer for contenteditables");
  }
  
}

enableReplacerContenteditable();
