'use client'
import React from 'react'
import courseData from '../Data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import { Button } from './ui/moving-border'

interface Courses {
  id: number,
  title: String,
  slug: String,
  description: String,
  price: number,
  instructor: String,
  isFeatured: boolean,
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course: Courses) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
          <h2 className='text-xl text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
          <p className='mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With Best</p>
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course: Courses) => (
            <div key={course.id} className="flex justify-center text-center ">
              <BackgroundGradient
                className="flex flex-col  rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <div className='mt-9'>
                    <Link href={`/courses/${course.slug}`}>
                      <Button
                        borderRadius=".7rem"
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-20 text-center w-full '>
        <Link href={`/courses}`}>
          <Button
            borderRadius=".75rem"
            className="bg-white dark:bg-[#18181bd9] text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold  "
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
