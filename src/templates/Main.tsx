import Image from 'next/image';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex w-full justify-center px-8 text-center text-slate-300 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-lg">
      <header className="flex items-center justify-center p-5">
        <div className="relative w-full max-w-[1100px] ">
          <Image
            className="mx-auto mt-2"
            src="/assets/images/Openspace-Logo.svg"
            alt="Openspace Logo"
            width={1100}
            height={120}
            priority
          />
        </div>
      </header>

      <main className="content text-xl">{props.children}</main>

      <footer className="border-t border-slate-200 py-4 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </footer>
    </div>
  </div>
);

export { Main };
