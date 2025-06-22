import './Logo.scss'
import classNames from 'classnames'

const Logo = (props) => {
  const {
    className,
    loading = 'lazy'
  } = props
const title = 'Home'

  return (
    <a
    className="logo"
    href="/"
    title={title}
    aria-label={title}
    >
      <img
        src="/logo.svg"
        alt=""
        className={classNames(className, 'logo')}
        width={199}
        height={60}
        loading={loading}
        draggable="false"
      />
    </a>
  )
}

export default Logo