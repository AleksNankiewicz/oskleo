import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function CourseFormChoiceGroup() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend>Wybierz kategorię</FieldLegend>
        <FieldDescription>
          Wybierz kategorię, w której chcesz się zapisać. Możesz wybrać tylko
          jedną
        </FieldDescription>
        <RadioGroup defaultValue="kubernetes">
          <FieldLabel htmlFor="kubernetes-r2h">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kategoria B (Manual)</FieldTitle>
              </FieldContent>
              <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="vm-z4k">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kategoria B (Automat)</FieldTitle>
              </FieldContent>
              <RadioGroupItem value="vm" id="vm-z4k" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}
