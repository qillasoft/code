function Angkasaja(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

$(function () {
  function ukuranfoto(bytes, decimalPoint) {
    if (bytes == 0) return "0 Bytes";
    var k = 1024,
      dm = decimalPoint || 0,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  $("input[id=foto]").change(function () {
    var val = $(this).val().toLowerCase(),
      regex = new RegExp("(.*?).(jpg|jpeg|png)$");
    if (this.files[0].size > 300000) {
      var ukuran = ukuranfoto(this.files[0].size);
      alert("Mohon Maaf, Ukuran File " + ukuran + ", Maksimal 300 KB ");
      this.value = "";
      $("input[name='foto']").val("");
      $("input[name='fotox']").val("");
    } else if (!regex.test(val)) {
      $(this).val("");
      alert("Mohon Maaf, Tipe File Harus jpeg/jpg/png");
      this.value = "";
      $("input[name='foto']").val("");
      $("input[name='fotox']").val("");
    } else {
      ambilfotox(this);
    }
  });
});

function ambilfotox(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var imgs = `${e.target.result}`;
      $("#fotox").val(imgs);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
