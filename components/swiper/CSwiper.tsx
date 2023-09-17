"use client";
import Image from 'next/image';
import { FunctionComponent, ReactNode } from 'react';

import { PCard } from '@/partials';

interface ICSwiper {
  data: Array<{title: string, desk:string, imgUrl: string}>;
}

const CSwiper: FunctionComponent<ICSwiper> = ({ data }) => {
  return (
    <div className='flex flex-col md:flex-row py-10 items-center justify-center gap-10'>
        {data?.map((e,i) => <PCard key={i} {...e} />)}
    </div>
  );
};

export default CSwiper;
