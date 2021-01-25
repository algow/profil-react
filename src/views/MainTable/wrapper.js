import Organisasi from '././tables/organisasi';
import Kewenangan from '././tables/kewenangan';
import Lokasi from '././tables/lokasi';
import Kppn from '././tables/kppn';
import Fungsi from '././tables/fungsi';
import Program from '././tables/program';
import Kegiatan from '././tables/kegiatan';
import Output from '././tables/output';
import JenisBelanja from '././tables/jenis-belanja';
import SumberDana from '././tables/sumber-dana';
import KatOutput from './tables/kategori-output';
import Satker from './tables/satker';

function Wrapper(props){
  switch (props.filter) {
    case 'perorganisasi':
      return <Organisasi {...props} />
    
    case 'perkewenangan':
      return <Kewenangan {...props} />
  
    case 'perkabupaten':
      return <Lokasi {...props} />

    case 'perkppn':
      return <Kppn {...props} />

    case 'perfungsi':
      return <Fungsi {...props} />

    case 'perprogram':
      return <Program {...props} />

    case 'perkegiatan':
      return <Kegiatan {...props} />
  
    case 'peroutput':
      return <Output {...props} />

    case 'perjenisbelanja':
      return <JenisBelanja {...props} />

    case 'persumberdana':
      return <SumberDana {...props} />

    case 'perkatoutput':
      return <KatOutput {...props} />

    case 'persatker':
      return <Satker {...props} />
  
    default:
      return null;
  }
}

export default Wrapper;