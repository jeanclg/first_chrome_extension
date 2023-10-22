const elements = {
  nameElement: document.getElementById('name'),
};

export function UpdateName() {
  chrome.storage.sync.get(['name'], data => {
    const name = data.name || '???';
    elements.nameElement.textContent = `Name: ${name}`;
  });
}
