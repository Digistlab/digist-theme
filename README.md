# [UIKit v3.*](https://www.getuikit.com) custom for Digistlab site

## Instalasi
* Install dependency: `npm install`
* Untuk compile file LESS menjadi CSS, jalankan perintah `gulp` atau `gulp -w`
* File Less menggunakan tema asli dari UIKit v3.0.3. Jika perubahan style misalnya warna, silakan modifikasi file `assets/less/uikit-less/*`
* Bekerja pada branch `master`

## Editing
* Theme ini menggunakan standar library UIKit v3 dengan mengcopy file LESS dari repository [UIKit Github](https://github.com/uikit/uikit) pada directory `src/less/*` ke directory tema `digist-theme/assets/less/uikit-less`
* `theme.less` menggabungkan file `uikit.theme.less` yang ditambahkan beberapa script css yang diambil dari [UIKit Site](https://github.com/uikit/uikit-site)
* Perubahan style css dimungkinkan dengan mengubah nilai variable CSS yang berada di dalam `digist-theme/assets/less/uikit-less/components`
* Misalnya: perubahan warna dasar dengan mengubah nilai css value pada file `digist-theme/assets/less/uikit-less/components/variables.less`. Kemudian jalankan perintah `gulp` atau `gulp -w` maka file `digist-theme/assets/theme.css` akan otomatis dicompile.