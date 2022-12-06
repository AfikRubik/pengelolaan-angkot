// var penumpang = ['OKE1', 'OKE2', 'OKE3', 'OKE4', 'OKE5', 'OKE6', 'OKE7', 'OKE8', 'OKE9', 'OKE10', 'OKE11', 'OKE12', 'OKE13', 'OKE14'];
var penumpang = [];

var tambahPenumpang = function (namaPenumpang) {
  var lsPenumpang = namaPenumpang.toUpperCase();
  if (penumpang.length === 0) {
    penumpang.push(lsPenumpang);
    return penumpang;
  } else if (penumpang.length === 15 && penumpang.every(item => typeof (item) === 'string') === true) {
    return 'Penumpang sudah penuh';
  } else if (penumpang.every(item => item !== lsPenumpang) === false) {
    return `${lsPenumpang} sudah ada`;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = lsPenumpang;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(lsPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang) {
  var lsPenumpang = namaPenumpang.toUpperCase();
  if (penumpang.length === 0) {
    return 'Angkot masih kosong'
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang.length === 0) {
        return 'Angkot masih kosong';
      } else if (penumpang[i] == lsPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        return `Tidak ada penumpang bernama ${lsPenumpang}`;
      }
    }
  }
};