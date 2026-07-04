import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Badge>Szkoła jazdy kategorii A i B </Badge>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Jedź pewniej.
            <span className="text-primary"> Zdaj spokojniej.</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Osk leopard to nowoczesna szkoła nauki jazdy, która oferuje
            kompleksowe kursy dla przyszłych kierowców. Nasza misja to nie tylko
            nauczenie Cię, jak prowadzić samochód, ale także przygotowanie Cię
            do bezpiecznej i odpowiedzialnej jazdy na drodze.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button size={'lg'}>Wybierz kurs</Button>
          <Button variant="outline" size={'lg'}>
            Zobacz jak wygląda nauka
          </Button>
        </div>
      </main>
    </div>
  )
}
