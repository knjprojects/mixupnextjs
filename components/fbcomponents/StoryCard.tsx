import React from 'react'
import {Story} from '../../typings'
import Image from 'next/image'
type Props = {
    story:Story
}

const StoryCard = (props: Props) => {
  return (
    <div className='storycard'
    >
      <Image src={props.story.profile} width={20} height={30}
      fill objectFit='cover' alt='profile'
      className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
      />
      <Image src={props.story.src} alt='story'
      className='object-cover filter brightness-75 rounded-full lg:rounded-xl'
      fill
      />
    </div>
  )
}

export default StoryCard
