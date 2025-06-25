class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]'
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    // обращаемся к бургер кнопке и назначаем\убираем класс isActive для изменения стиля кнопки, открыто\закрыто меню
    this.dialogElement.open = !this.dialogElement.open
    // элементу dialog добавляем\удаляем атрибут open для отображения\закрытия меню
    document.documentElement.classList.toggle(this.stateClasses.isLock)
    // обращаемся к корневому элементу дома для блокировки скролла основной страницы
  }




  bindEvents(){
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
  }
}

export default OverlayMenu