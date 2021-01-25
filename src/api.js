const BASE = 'http://10.108.64.173:5000/';

exports.user = BASE + 'user';
exports.refsatker = BASE + 'refsatker?kanwil=';
exports.upload = BASE + 'pagurealisasi';
exports.pagurealisasi = BASE + 'pagurealisasi?kanwil=';
exports.perorganisasi = BASE + 'perorganisasi?kanwil=';
exports.perkewenangan = BASE + 'perdekon?kanwil=';
exports.persatker = BASE + 'persatker?kanwil=';
exports.perkabupaten = BASE + 'perkabupaten?kanwil=';
exports.perkppn = BASE + 'perkppn?kanwil=';
exports.perfungsi = BASE + 'perfungsi?kanwil=';
exports.perprogram = BASE + 'perprogram?kanwil=';
exports.perkegiatan = BASE + 'perkegiatan?kanwil=';
exports.peroutput = BASE + 'peroutput?kanwil=';
exports.perjenisbelanja = BASE + 'jenis_belanja?kanwil=';
exports.persumberdana = BASE + 'persumberdana?kanwil=';
exports.perkatoutput = BASE + 'perkatoutput?kanwil=';
exports.paguminus = BASE + 'paguminus';
exports.chart_total = BASE + 'chart_total?kanwil=';
exports.chart_kabupaten = BASE + 'chart_kabupaten?kanwil=';
exports.chart_kppn = BASE + 'chart_kppn?kanwil=';
exports.chart_jenisbelanja = BASE + 'chart_jenisbelanja?kanwil=';

exports.chart_jenisbelanja_persatker = (kanwil, satker) => {
  return BASE + 'jenisbelanja_persatker?kanwil=' + kanwil + '&satker=' + satker;
}