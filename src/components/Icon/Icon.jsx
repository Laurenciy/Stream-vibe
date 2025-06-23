import './Icon.scss'
import classNames from 'classnames'
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    FallbackSVG,
  } = props

  const params = {
    fill: hasFill ? 'currentColor' : 'none',
    stroke: hasFill ? 'none' : 'currentColor',
  }

  return (
    <span
      className={classNames(className, 'icon')}
    >
      {FallbackSVG
        ? <FallbackSVG {...params} />
        : <MinistaIcon iconId={name} {...params} />
      }
    </span>
  )
}

export default Icon