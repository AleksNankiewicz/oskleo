import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Clock2Icon } from 'lucide-react'
import React from 'react'

const CourseFormCalendarDayBlock = ({ date }: { date: Date }) => {
  return (
    <Card className="w-full min-h-min" key={date.toString()}>
      <CardContent>
        <p className="text-lg font-bold">{date.toLocaleDateString()}</p>
        <FieldGroup className="flex  gap-2 mt-2">
          <Field>
            <FieldLabel htmlFor="time-from">Godzina rozpoczęcia</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-from"
                type="time"
                step="60"
                defaultValue="10:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <InputGroupAddon>
                <Clock2Icon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="time-to">Godzina zakończenia</FieldLabel>
            <InputGroup className="w-full">
              <InputGroupInput
                id="time-to"
                type="time"
                step="60"
                defaultValue="12:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <InputGroupAddon>
                <Clock2Icon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}

export default CourseFormCalendarDayBlock
