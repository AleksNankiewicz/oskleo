import React from 'react'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '../ui/field'
import { Input } from '../ui/input'

const CourseFormPersonalDetails = () => {
  return (
    <FieldSet>
      <FieldLegend>Dane osobowe</FieldLegend>
      <FieldDescription>
        Uzupełnij swoje dane osobowe, abyśmy mogli się z Tobą skontaktować w
        sprawie kursu.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">Imię</FieldLabel>
          <Input id="checkout-7j9-card-name-43j" placeholder="Aleks" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
            Nazwisko
          </FieldLabel>
          <Input
            id="checkout-7j9-card-number-uw1"
            placeholder="Nankiewicz"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Email</FieldLabel>
          <Input
            id="checkout-7j9-card-nasdasdumber-uw1"
            placeholder="aleks.nankiewicz@example.com"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
            Telefon
          </FieldLabel>
          <Input
            id="checkout-7j9-card-ssdnumber-uw1"
            placeholder="123-456-789"
            required
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export default CourseFormPersonalDetails
