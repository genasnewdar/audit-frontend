'use client';

import { Carousel } from 'flowbite-react';
import { FunctionComponent, ReactNode } from 'react';

interface ICSwiperFull {
    data: Array<ReactNode>,
} 

const CSwiperFull: FunctionComponent<ICSwiperFull> = ({ data }) => {
    return (
        <Carousel className='h-[400px]' indicators={false}>
            {data?.map((item, index) => <div key={index}>{item}</div>)}
        </Carousel>
    );
}

export default CSwiperFull;
