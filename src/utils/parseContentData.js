export default function (data) {
  // Object.keys(data) => //array yapısında keyleri dönüyor (hash kodlar)
  return Object.keys(data)
    .map(key => {
      return {
        id: key,
        ...data[key],
      };
    })
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
    });
}
// return ederken arraye paketleyerek döndürür, bana keyi id
// olarak ata ve git o datanın hangi keye geliyorsa o datayı da çıkart

// const a = [
//   {
//     '-NvpOfXQy6uf19EoSxYH': {
//       date: '2024-04-19T08:08:53.654Z',
//       text: 'derdine çare',
//       username: 'emre',
//     },
//   },
// ];

// yukarıdakini;

// const b = [
//   {
//     id: '-NvpOfXQy6uf19EoSxYH',
//     date: '2024-04-19T08:08:53.654Z',
//     text: 'derdine çare',
//     username: 'emre',
//   },
// ];

// buna dönüştürüyor
