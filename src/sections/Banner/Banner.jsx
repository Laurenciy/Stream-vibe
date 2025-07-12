
import './Banner.scss'
import classNames from 'classnames'

const Banner = (props) => {
  const {
    className,
  } = props
  
  return (
    <div
      className={classNames(className, 'banner')}
    >
      Banner
    </div>
  )
}

export default Banner