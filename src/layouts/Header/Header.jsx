import './Header.scss'
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import classNames from 'classnames'

import { ReactComponent as SVGSearch } from '@/assets/icons/search.svg'
import { ReactComponent as SVGNotification } from '@/assets/icons/notification.svg'
import BurgerButton from "@/components/BurgerButton";

export const Header = (props) => {

const {
  url,
  isFixed
} = props

  const menuItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Movies & Shows',
      href: '/movies'
    },
    {
      label: 'Support',
      href: '/support'
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions'
    },
  ]

  return (
    <heade className={classNames('header', {
      'is-fixed': isFixed
    })} data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading='eager'/>
        <dialog className='header__overlay-menu-dialog' data-js-overlay-menu-dialog="">
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({label, href}, index) => (
                <li className="header__menu-item" key={index}>
                  <a className={classNames('header__menu-link', {
                    'is-active': href === url
                  })} href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="search"
              IconFallbackSVG={SVGSearch}
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              mode="transparent"
              iconName="notification"
              IconFallbackSVG={SVGNotification}
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': ''
          }}
        />
      </div>
    </heade>
  )
}