import Image from 'next/image';
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Openspace"
        description="Openspace is a collaborative, community-driven laboratory where curious people of all skill levels can explore, learn, and create using shared tools and knowledge."
      />
    }
  >
    <h2 className="pb-4 text-2xl font-bold">Benvenuti a Openspace!</h2>
    <p>
      Openspace è un nuovo spazio fisico che si propone come luogo di
      aggregazione per appassionati di tecnologia e non a Milano.{' '}
    </p>
    <p>
      Per utilizzare lo spazio è necessaria l&apos;iscrizione a &quot;Openspace
      Associazione di Promozione Sociale&quot; ed attenersi alle regole
      descritte nel regolamento dell&apos;associazione, disponibile in loco.
    </p>
    <p>Vieni a trovarci in Via Camillo Golgi 60, 20133 Milano!</p>
    <div className="flex w-full justify-center pb-8">
      <Link
        href="https://discord.gg/GqnrGPNW"
        className="flex items-center rounded-lg border-4 border-[#7289da] px-4 py-2 hover:bg-[#7289da] hover:bg-opacity-40"
      >
        {' '}
        <Image
          className="mx-auto flex space-x-4 rounded-full border-white bg-[#7289da] p-3"
          src="/nextjs-pages/assets/images/discord-logo.svg"
          alt="Discord Logo"
          width={60}
          height={60}
          priority
        />
        <p className="ml-4 text-sm">Unisciti su Discord</p>
      </Link>
    </div>
  </Main>
);

export default Index;
