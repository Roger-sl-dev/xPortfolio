import { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';

export default function Faixa({children,Dir}) {
  
  
  return (
    <Marquee direction={Dir}>
     {children}
    </Marquee>
  
  );

}
