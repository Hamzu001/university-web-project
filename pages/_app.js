// import '@/styles/globals.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return<><Component {...pageProps} />
</>
    
}
 