//script by : QILLASOFT
//www.qillasoft.com

<script>
   function getQR(str) {
    var myinput = document.getElementById("myinput").value;
    var str = myinput;
    QRCode.toCanvas(document.getElementById("canvas"), str, function(error) {
    });
  }
  function downloadQR(){
    var link = document.getElementById("link");
    var myinput = document.getElementById("myinput").value;
    var titlePng = myinput + ".png";
    link.setAttribute('download', titlePng);
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
  }
  function resetQR(){
    window.location.href = window.location.href;
  }
  window.onload = function() {
    document.getElementById("generate-qr").onclick = getQR, document.getElementById("download-qr").onclick = downloadQR, document.getElementById("reset-qr").onclick = resetQR;
  };
</script>
