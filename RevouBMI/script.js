function submitForm(event) {
    event.preventDefault();
  
    const btn = document.getElementById('btn');
  
    btn.addEventListener('click', function () {
      let height = document.querySelector('#tinggi').value;
      let weight = document.querySelector('#berat').value;
  
      if (height == '' || weight == '') {
        alert('MAAF, ANDA HARUS ISI DULU TINGGI DAN BERAT BADAN ANDA!');
        return;
      }
  
      // Hitung BMI
      height = height / 100;
      let BMI = weight / (height * height);
      BMI = BMI.toFixed(2);
      document.querySelector('#output').innerHTML = BMI;
  
      //Cetak keterangan BMI
      let status = '';
  
      if (BMI < 18.5) {
        status = 'ANDA KEKURANGAN BERAT BADAN!';
      }
      if (BMI >= 18.5 && BMI < 24.9) {
        status = 'ANDA MENCAPAI BERAT BADAN NORMAL/IDEAL!';
      }
      if (BMI >= 25 && BMI < 29.9) {
        status = 'ANDA KELEBIHAN BERAT BADAN!';
      }
      if (BMI >= 30) {
        status = 'HATI-HATI! ANDA KEGEMUKAN/OBESITAS!';
      }
      document.querySelector('#kategori').innerHTML = `<span id="kategori">${status}</span>`;
  
      //Cetak deskripsi BMI
  
      if (BMI < 18.5) {
        status =
          'Jangan lupa makan-makanan bergizi, perhatikan pola makan, perbanyak protein dan olahraga ya! Supaya bisa mencapai berat badan ideal';
      }
      if (BMI >= 18.5 && BMI < 24.9) {
        status =
          'Selamat! Anda berhasil mencapai berat badan ideal. Tetap pertahankan!';
      }
      if (BMI >= 25) {
        status =
          'Perhatikan pola makan dan tingkatkan aktivitas fisik!';
      }
      document.querySelector('#deskripsi').innerHTML = `<span id="kategori">${status}</span>`;
    });
  }