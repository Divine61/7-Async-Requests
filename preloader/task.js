let xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://students.netoservices.ru/nestjs-backend/slow-get-courses`);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener(`load`, () => {
  const loader = document.querySelector(`.loader_active`);
  loader.classList.remove(`loader_active`);
  const itemList = document.getElementById('items');
  const request = xhr.response;
  const requestValute = request.response[`Valute`];
  for (let valute in requestValute) {
    const currentValute = createItems(requestValute[valute].CharCode, requestValute[valute].Value);
    itemList.appendChild(currentValute)
  }
})

function createItems(nameValute, value) {
  const item = document.createElement('div');
  item.setAttribute(`class`, `item`);
  const itemCode = document.createElement(`div`);
  itemCode.setAttribute(`class`, `item__code`);
  itemCode.textContent = nameValute;
  const itemValue = document.createElement(`div`);
  itemValue.setAttribute(`class`, `item__value`);
  itemValue.textContent = value;
  const itemCurrency = document.createElement(`div`);
  itemCurrency.setAttribute(`class`, `item__currency`);
  itemCurrency.textContent = `руб.`;
  item.appendChild(itemCode);
  item.appendChild(itemValue);
  item.appendChild(itemCurrency);
  return item
}