export class Tools {
  constructor(elem) {
    this.elem = elem;
    elem.onclick = this.onClick.bind(this);
    this.li = null;
  }

  active() {
    document.querySelector('.tool--active').classList.remove('tool--active');
    this.li.classList.add('tool--active');
  }

  onClick(event) {
    const li = event.target.closest('li');
    this.li = li;
    this.active();
  }

  getElem() {
    return this.li;
  }
}
