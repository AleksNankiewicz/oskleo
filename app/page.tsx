import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start gap-4">
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
      </main>
    </div>
  )
}
