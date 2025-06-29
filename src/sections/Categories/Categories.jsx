import classNames from 'classnames'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const Categories = () => {

  const categoryItems = [
    {
      title: 'Action',
      images: [
        '/public/categories/actions/1.jpg',
        '/public/categories/actions/2.jpg',
        '/public/categories/actions/3.jpg',
        '/public/categories/actions/4.jpg',
      ],
    },
    {
      title: 'Adventure',
      images: [
        '/public/categories/adventure/1.jpg',
        '/public/categories/adventure/2.jpg',
        '/public/categories/adventure/3.jpg',
        '/public/categories/adventure/4.jpg',
      ],
    },
    {
      title: 'Comedy',
      images: [
        '/public/categories/comedy/1.jpg',
        '/public/categories/comedy/2.jpg',
        '/public/categories/comedy/3.jpg',
        '/public/categories/comedy/4.jpg',
      ],
    },
    {
      title: 'Drama',
      images: [
        '/public/categories/drama/1.jpg',
        '/public/categories/drama/2.jpg',
        '/public/categories/drama/3.jpg',
        '/public/categories/drama/4.jpg',
      ],
    },
    {
      title: 'Horror',
      images: [
        '/public/categories/horror/1.jpg',
        '/public/categories/horror/2.jpg',
        '/public/categories/horror/3.jpg',
        '/public/categories/horror/4.jpg',
      ],
    },
  ]
  const sliderNavigationId = 'drama-slider-navigation'

  return (
    <Section
      title="Explore our wide variety of drama"
      titleId="drama-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <div>
          <SliderNavigation
            mode="tile"
            id={sliderNavigationId}
          />
        </div>
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories