'use client'

import * as React from 'react'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '../../ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../../ui/input-group'
import { Clock2Icon } from 'lucide-react'
import { pl } from 'date-fns/locale'
import CourseFormCalendarDayBlock from './CourseFormCalendarDayBlock'

export function CourseFormCalendar() {
  const initialDays: Date[] = []
  const [days, setDays] = React.useState<Date[] | undefined>(initialDays)
  const bookedDates = [new Date(2026, 6, 20), new Date(2022, 5, 20)]
  return (
    <div className="flex sm:flex-row flex-col w-full gap-4 sm:h-[530px]">
      <Card className=" flex-3 p-0">
        <CardContent className="p-0">
          <Calendar
            locale={pl}
            className="w-full "
            mode="multiple"
            selected={days}
            onSelect={setDays}
            disabled={[
              { before: new Date() }, // wszystkie wcześniejsze dni

              ...bookedDates, // dodatkowo te konkretne daty
            ]}
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: '[&>button]:line-through opacity-100 ',
            }}
          />
        </CardContent>
      </Card>
      <div className=" flex flex-2 flex-col gap-4 overflow-y-auto overscroll-auto ">
        {days?.map((date) => (
          <CourseFormCalendarDayBlock date={date} key={date.toString()} />
        ))}
      </div>
    </div>
  )
}
