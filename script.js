
    function generateQR() {
      const canvas = document.getElementById('qrCanvas');
      const link = document.getElementById('linkInput').value.trim();
      const createBtn = document.getElementById('createNewBtn');
      const generateBtn = document.getElementById('generateBtn');

      if (!link) {
        alert("Please enter a valid link.");
        return;
      }

      // Hide generate button
      generateBtn.style.display = "none";

      // Generate QR code with larger size
      QRCode.toCanvas(canvas, link, { width: 256 }, function (error) {
        if (error) {
          console.error(error);
          alert("Something went wrong.");
        } else {
          console.log('QR code generated!');
          createBtn.style.display = "inline-block";
        }
      });
    }

    function resetForm() {
      document.getElementById('linkInput').value = "";
      const canvas = document.getElementById('qrCanvas');
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      document.getElementById('createNewBtn').style.display = "none";
      document.getElementById('generateBtn').style.display = "inline-block";
    }
  
