import './Button.scss'
import classNames from "classnames";
import Icon from "@/components/Icon";
import { ReactComponent as SVGSearch } from '@/assets/icons/search.svg'


const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    // '' (default) | 'transparent | black-10'
    mode= '',
    target,
    label,
    isLabelHidden = false,
    iconName,
    // 'before' | 'after'
    iconPosition = 'before',
    hasFillIcon,
    IconFallbackSVG
  } = props

  const isLink = href !== undefined;
  const Component = isLink ? 'a' : 'button';
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;
  // тут мы задаем логику для компонентов, что именно в них будет отображаться
  // если будет назначен href то будет ссылка а, если href не будет назначен, то будет кнопка button
  const title = isLabelHidden ? label : undefined;
  const iconComponent = iconName && (
    <Icon FallbackSVG={IconFallbackSVG} hasFillIcon={hasFillIcon}/>);


  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button