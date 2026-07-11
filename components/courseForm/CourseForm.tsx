import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CourseFormChoiceGroup } from './CourseFormChoiceGroup'
import { Separator } from '../ui/separator'
import { CourseFormCalendar } from './courseFormCalendar/CourseFormCalendar'
import CourseFormPersonalDetails from './CourseFormPersonalDetails'

export function CourseForm() {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-2 relative z-20">
        <h1 className="text-4xl  font-bold">Zapisz się na kurs</h1>
        <p className="text-muted-foreground">
          Wypełnij poniższe dane, aby zapisać się na kurs.
        </p>
      </div>
      <Separator className="my-6" />

      <form>
        <FieldGroup className="w-full">
          <CourseFormPersonalDetails />
          <FieldSeparator />
          <CourseFormChoiceGroup />
          <FieldSeparator />
          <FieldSet className="w-full">
            <FieldLegend>Wybierz termin kursu</FieldLegend>
            <FieldDescription>
              Wybierz termin kursu, w którym chcesz wziąć udział. Możesz wybrać
              więcej niż jeden termin, jeśli są dostępne.
            </FieldDescription>
            <FieldGroup className="w-full">
              <Field className="w-full" orientation="horizontal">
                <CourseFormCalendar />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Button type="submit">Przejdź do podsumowania</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
