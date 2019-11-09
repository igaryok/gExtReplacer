const DIC_REPLACER_CON = {
  'foo': 'bar',
  'cat': 'dog',
  'helo': 'hello',
  'heldp': 'help',
}
const KEY_REPLACER_CON= Object.keys(DIC_REPLACER_CON);

const replacerContenteditable = ({ target }) => {
  
  KEY_REPLACER_CON.forEach(item => {
    const range = document.createRange();
    const selection = window.getSelection();

    target.innerHTML = target.innerHTML.replace(item, DIC_REPLACER_CON[item]);
    
    range.selectNodeContents(target);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    
  });
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
