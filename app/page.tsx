import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-1 w-full  flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start gap-4">
        <Badge className="text-md p-3">Szkoła jazdy kategorii A i B</Badge>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className=" text-4xl font-semibold ">
            Jedź pewniej.
            <span className="text-primary"> Zdaj spokojniej.</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Zapisz się na kurs w OSK Leopard i zdobądź prawo jazdy kategorii A
            lub B. Nasza szkoła jazdy oferuje profesjonalne szkolenia,
            doświadczonych instruktorów i nowoczesne pojazdy, aby zapewnić Ci
            najlepsze przygotowanie do egzaminu.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link passHref href={'zapisz-sie'}>
            <Button className="w-full" size={'xl'}>
              Wybierz kurs
            </Button>
          </Link>
          <Button variant="outline" size={'xl'}>
            Zobacz jak wygląda nauka
          </Button>
        </div>
      </div>
      <div className="flex flex-1 w-full  flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start gap-4">
        <Badge className="text-md p-3">Droga do egzaminu</Badge>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className=" text-4xl font-semibold ">
            Nie uczysz się "na czuja". Masz proces.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Dobra szkoła jazdy to nie tylko instruktor i samochód. To przede
            wszystkim proces nauki, który pozwala Ci zdobyć wiedzę i
            umiejętności potrzebne do bezpiecznej jazdy.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Card className="p-4 lg:flex-1">
            <div className="bg-primary w-fit p-2 aspect-square flex justify-center rounded-lg font-bold text-lgś">
              1
            </div>
            <p className="font-semibold text-2xl">PKK i Formalności</p>
            <p className="text-muted-foreground">
              Pomagamy zrozumieć zasady i procedury związane z egzaminem.
            </p>
          </Card>
          <Card className="p-4 lg:flex-1">
            <div className="bg-primary w-fit p-2 aspect-square flex justify-center rounded-lg font-bold text-lgś">
              2
            </div>
            <p className="font-semibold text-2xl">PKK i Formalności</p>
            <p className="text-muted-foreground">
              Pomagamy zrozumieć zasady i procedury związane z egzaminem.
            </p>
          </Card>
          <Card className="p-4 lg:flex-1">
            <div className="bg-primary w-fit p-2 aspect-square flex justify-center rounded-lg font-bold text-lgś">
              3
            </div>
            <p className="font-semibold text-2xl">PKK i Formalności</p>
            <p className="text-muted-foreground">
              Pomagamy zrozumieć zasady i procedury związane z egzaminem.
            </p>
          </Card>
          <Card className="p-4 lg:flex-1">
            <div className="bg-primary w-fit p-2 aspect-square flex justify-center rounded-lg font-bold text-lgś">
              4
            </div>
            <p className="font-semibold text-2xl">PKK i Formalności</p>
            <p className="text-muted-foreground">
              Pomagamy zrozumieć zasady i procedury związane z egzaminem.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
