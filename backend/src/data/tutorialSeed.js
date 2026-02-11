const tutorialSeed = [
    {
        name: "Cara Pasang Saklar Tunggal untuk 1 Lampu",
        type: "video",
        category: "Listrik",
        desc: "Video panduan pemasangan saklar tunggal Broco untuk satu lampu, cocok untuk pemula.",
        content: "Bhfccqo3umg",
        details: "Video ini menjelaskan langkah-langkah pemasangan saklar tunggal untuk satu lampu menggunakan saklar Broco. Tutorial disusun untuk pemula dengan penjelasan dasar instalasi listrik rumah. Pastikan aliran listrik dimatikan sebelum bekerja. Gunakan obeng, tespen, dan isolasi kabel untuk keamanan.",
        img: "/img/saklar.jpg"
    },
    {
        name: "Cara Membuat Rak Dinding dari Kayu Bekas",
        type: "article",
        category: "Kayu",
        desc: "Tutorial membuat rak dinding sederhana dari kayu bekas.",
        content: `
            <article>
                <p>
                    Rak dinding merupakan solusi praktis untuk menambah ruang penyimpanan tanpa memakan banyak tempat.
                    Pada tutorial ini, kamu akan belajar cara membuat rak dinding sederhana dari kayu bekas yang
                    tetap kuat, fungsional, dan memiliki nilai estetika.
                </p>

                <h3>Langkah-langkah Pembuatan</h3>
                <ol>
                    <li>
                        <strong>Persiapan Kayu</strong><br/>
                        Pilih kayu bekas yang masih layak pakai. Bersihkan dari paku lama, lalu amplas permukaannya
                        hingga halus untuk menghindari serpihan.
                    </li>
                    <li>
                        <strong>Pengukuran dan Pemotongan</strong><br/>
                        Ukur panjang dan lebar rak sesuai kebutuhan. Potong kayu menggunakan gergaji dengan ukuran
                        yang sudah ditentukan.
                    </li>
                    <li>
                        <strong>Perakitan Rak</strong><br/>
                        Susun potongan kayu membentuk rak, kemudian paku atau sekrup setiap sambungan agar kuat.
                        Pastikan sudut rak lurus dan stabil.
                    </li>
                    <li>
                        <strong>Pengecatan</strong><br/>
                        Aplikasikan cat kayu atau finishing sesuai selera. Biarkan kering sempurna sebelum dipasang.
                    </li>
                    <li>
                        <strong>Pemasangan ke Dinding</strong><br/>
                        Pasang rak ke dinding menggunakan fisher dan sekrup agar lebih kokoh.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> gergaji, palu, bor, meteran, amplas</li>
                <li><strong>Bahan:</strong> kayu bekas, paku atau sekrup, cat kayu</li>
                <li><strong>Peringatan:</strong> Gunakan sarung tangan saat memotong kayu</li>
                <li><strong>Tips:</strong> Pastikan dinding cukup kuat untuk menahan beban rak</li>
            </ul>
        `,
        img: "/img/rak-kayu.jpg"
    },
    {
        name: "Pemasangan Kabel di Fitting Lampu",
        type: "video",
        category: "Listrik",
        desc: "Video panduan pemasangan kabel di fitting lampu dengan aman untuk pemula.",
        content: "R54ftIFOzuQ",
        details: "Video ini menjelaskan langkah-langkah pemasangan kabel di fitting lampu dengan aman untuk pemula, sesuai standar keselamatan. Pastikan listrik dimatikan sebelum bekerja. Gunakan obeng dan tespen.",
        img: "/img/bohlam.jpg"
    },
    {
        name: "Cara Menyiku dan Memasang Keramik atau Granit Lantai",
        type: "video",
        category: "Bangunan",
        desc: "Video tutorial menyiku dan memasang keramik atau granit lantai untuk pemula.",
        content: "v7NPjIdIhW4",
        details: "Video ini membahas teknik dasar menyiku dan memasang keramik atau granit lantai agar hasil pemasangan rapi dan lurus. Cocok untuk pemula yang ingin belajar pemasangan lantai secara mandiri. Gunakan waterpass dan benang sebagai panduan siku. Pastikan adukan semen memiliki konsistensi yang tepat.",
        img: "/img/keramik.jpg"
    },
    {
        name: "Teknik Dasar Mengecat Permukaan Kayu dan Dinding",
        type: "article",
        category: "Lainnya",
        desc: "Panduan dasar mengecat permukaan kayu dan dinding agar hasil rapi dan tahan lama.",
        content: `
            <article>
                <p>
                    Mengecat merupakan tahap finishing yang sangat berpengaruh pada tampilan akhir sebuah proyek.
                    Dengan teknik yang tepat, hasil cat bisa terlihat rapi, rata, dan lebih awet.
                    Artikel ini membahas langkah dasar mengecat untuk pemula.
                </p>
    
                <h3>Langkah-langkah Mengecat</h3>
                <ol>
                    <li>
                        <strong>Persiapan Permukaan</strong><br/>
                        Bersihkan permukaan dari debu, minyak, atau sisa cat lama agar cat baru dapat menempel dengan baik.
                    </li>
                    <li>
                        <strong>Pengamplasan</strong><br/>
                        Amplas permukaan secara merata untuk menghasilkan tekstur yang halus.
                    </li>
                    <li>
                        <strong>Aplikasi Cat Dasar</strong><br/>
                        Gunakan cat dasar (primer) agar warna akhir lebih rata dan tahan lama.
                    </li>
                    <li>
                        <strong>Pengecatan Utama</strong><br/>
                        Aplikasikan cat secara searah menggunakan kuas atau roller.
                    </li>
                    <li>
                        <strong>Pengeringan</strong><br/>
                        Biarkan cat mengering sempurna sebelum digunakan atau disentuh.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> kuas, roller, amplas</li>
                <li><strong>Bahan:</strong> cat, thinner (jika diperlukan)</li>
                <li><strong>Peringatan:</strong> Gunakan masker saat mengecat di ruang tertutup</li>
                <li><strong>Tips:</strong> Lakukan pengecatan tipis berlapis untuk hasil maksimal</li>
            </ul>
        `,
        img: "/img/cat.jpg"
    },
    {
        name: "Mengecor Trotoar Sederhana",
        type: "article",
        category: "Bangunan",
        desc: "Langkah-langkah dasar mengecor lantai trotoar atau teras.",
        content: `
            <article>
                <p>
                    Mengecor trotoar atau lantai teras membutuhkan ketelitian agar hasilnya kuat dan rata.
                    Tutorial ini membahas langkah dasar pengecoran yang bisa dilakukan secara mandiri di rumah.
                </p>

                <h3>Langkah-langkah Pengecoran</h3>
                <ol>
                    <li>
                        <strong>Persiapan Area</strong><br/>
                        Bersihkan area yang akan dicor dari tanah gembur dan sampah. Pasang papan bekisting
                        sebagai pembatas.
                    </li>
                    <li>
                        <strong>Pencampuran Material</strong><br/>
                        Campurkan semen dan pasir dengan perbandingan 1:3. Tambahkan air sedikit demi sedikit
                        hingga adukan tidak terlalu cair.
                    </li>
                    <li>
                        <strong>Proses Pengecoran</strong><br/>
                        Tuang adukan ke area yang sudah disiapkan, lalu ratakan menggunakan roskam.
                    </li>
                    <li>
                        <strong>Perataan Permukaan</strong><br/>
                        Gunakan waterpass untuk memastikan permukaan lantai rata.
                    </li>
                    <li>
                        <strong>Proses Pengeringan</strong><br/>
                        Biarkan cor mengering selama 1–2 hari dan hindari diinjak sebelum benar-benar keras.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> ember, sekop, roskam, waterpass</li>
                <li><strong>Bahan:</strong> semen, pasir, air</li>
                <li><strong>Peringatan:</strong> Gunakan masker untuk menghindari debu semen</li>
                <li><strong>Tips:</strong> Basahi permukaan cor keesokan harinya agar tidak retak</li>
            </ul>
        `,
        img: "/img/pengecoran.jpg"
    },
    {
        name: "Cara Membuat Kusen Pintu Kamar Mandi dari Baja Ringan",
        type: "video",
        category: "Bangunan",
        desc: "Video tutorial pembuatan kusen pintu kamar mandi menggunakan baja ringan.",
        content: "FiO8jMZzXFI",
        details: "Video ini menjelaskan proses pembuatan kusen pintu kamar mandi dari baja ringan, mulai dari pengukuran, pemotongan, hingga perakitan. Tutorial ini cocok untuk renovasi rumah dengan material yang tahan air dan anti rayap. Gunakan alat pelindung diri saat memotong baja ringan.",
        img: "/img/kusen.jpg"
    },
    {
        name: "Memperbaiki Pintu Kayu yang Macet",
        type: "article",
        category: "Perbaikan Rumah",
        desc: "Solusi mudah untuk pintu kayu yang sulit dibuka.",
        content: `
            <article>
                <p>
                    Pintu kayu yang macet sering disebabkan oleh perubahan suhu, kelembapan, atau engsel yang bermasalah.
                    Tutorial ini akan membantu kamu memperbaiki pintu macet tanpa perlu mengganti pintu.
                </p>

                <h3>Langkah Perbaikan</h3>
                <ol>
                    <li>
                        <strong>Pemeriksaan Engsel</strong><br/>
                        Periksa apakah engsel kendor atau berkarat. Kencangkan atau ganti jika diperlukan.
                    </li>
                    <li>
                        <strong>Identifikasi Bagian yang Bergesekan</strong><br/>
                        Buka dan tutup pintu perlahan untuk menemukan bagian yang menyebabkan macet.
                    </li>
                    <li>
                        <strong>Pengamplasan</strong><br/>
                        Amplas bagian pintu yang bergesekan hingga lebih tipis dan halus.
                    </li>
                    <li>
                        <strong>Pelumasan</strong><br/>
                        Berikan pelumas pada engsel agar pintu lebih mudah dibuka.
                    </li>
                    <li>
                        <strong>Pengujian</strong><br/>
                        Coba buka dan tutup pintu beberapa kali untuk memastikan perbaikan berhasil.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> obeng, amplas</li>
                <li><strong>Bahan:</strong> pelumas engsel</li>
                <li><strong>Peringatan:</strong> Jangan mengamplas terlalu banyak agar pintu tidak longgar</li>
                <li><strong>Tips:</strong> Tandai area bermasalah sebelum mengamplas</li>
            </ul>
        `,
        img: "/img/pintu.jpg"
    },
    {
        name: "Cara Menghaluskan dan Mengasah Permukaan Kayu",
        type: "article",
        category: "Kayu",
        desc: "Panduan dasar menghaluskan dan mengasah kayu sebelum proses finishing.",
        content: `
            <article>
                <p>
                    Proses pengasahan kayu bertujuan untuk menghasilkan permukaan yang halus dan siap difinishing.
                    Teknik yang tepat akan membuat hasil kerja lebih rapi dan nyaman disentuh.
                </p>
    
                <h3>Langkah-langkah Pengasahan</h3>
                <ol>
                    <li>
                        <strong>Pemeriksaan Permukaan</strong><br/>
                        Periksa bagian kayu yang kasar atau tidak rata.
                    </li>
                    <li>
                        <strong>Pengamplasan Awal</strong><br/>
                        Gunakan amplas kasar untuk meratakan permukaan kayu.
                    </li>
                    <li>
                        <strong>Pengamplasan Lanjutan</strong><br/>
                        Ganti dengan amplas lebih halus untuk hasil akhir yang rata.
                    </li>
                    <li>
                        <strong>Pembersihan Debu</strong><br/>
                        Bersihkan sisa serbuk kayu sebelum proses finishing.
                    </li>
                    <li>
                        <strong>Pengecekan Akhir</strong><br/>
                        Raba permukaan kayu untuk memastikan sudah halus.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> amplas berbagai tingkat kekasaran</li>
                <li><strong>Bahan:</strong> kayu</li>
                <li><strong>Peringatan:</strong> Gunakan masker untuk menghindari debu kayu</li>
                <li><strong>Tips:</strong> Amplas searah serat kayu agar hasil lebih rapi</li>
            </ul>
        `,
        img: "/img/amplas.jpg"
    },
    {
        name: "Teknik Dasar Menyolder Kabel dan Komponen Listrik",
        type: "article",
        category: "Listrik",
        desc: "Panduan dasar menyolder kabel dan komponen elektronik untuk pemula.",
        content: `
            <article>
                <p>
                    Menyolder merupakan teknik dasar dalam pekerjaan listrik dan elektronik.
                    Dengan penyolderan yang baik, sambungan kabel akan lebih kuat dan aman.
                </p>
    
                <h3>Langkah-langkah Menyolder</h3>
                <ol>
                    <li>
                        <strong>Persiapan Alat</strong><br/>
                        Panaskan solder hingga mencapai suhu kerja.
                    </li>
                    <li>
                        <strong>Persiapan Kabel</strong><br/>
                        Kupas ujung kabel secukupnya sebelum disolder.
                    </li>
                    <li>
                        <strong>Proses Penyolderan</strong><br/>
                        Tempelkan timah solder ke sambungan kabel hingga meleleh dan menutup sambungan.
                    </li>
                    <li>
                        <strong>Pendinginan</strong><br/>
                        Biarkan timah mengeras secara alami tanpa digerakkan.
                    </li>
                    <li>
                        <strong>Pemeriksaan Sambungan</strong><br/>
                        Pastikan sambungan kuat dan tidak longgar.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> solder listrik</li>
                <li><strong>Bahan:</strong> timah solder, kabel</li>
                <li><strong>Peringatan:</strong> Hindari menyentuh ujung solder yang panas</li>
                <li><strong>Tips:</strong> Gunakan timah secukupnya agar sambungan rapi</li>
            </ul>
        `,
        img: "/img/solder.jpg"
    },
    {
        name: "Membuat Meja Belajar Sederhana dari Kayu Palet",
        type: "article",
        category: "Kayu",
        desc: "Tutorial membuat meja belajar sederhana menggunakan kayu palet.",
        content: `
            <article>
                <p>
                    Kayu palet bekas dapat dimanfaatkan menjadi furnitur yang berguna, salah satunya meja belajar.
                    Tutorial ini dirancang sebagai panduan membuat meja belajar yang kokoh dan ekonomis.
                </p>

                <h3>Langkah-langkah Pembuatan</h3>
                <ol>
                    <li>
                        <strong>Pembongkaran Palet</strong><br/>
                        Bongkar palet kayu dengan hati-hati agar papan tidak rusak.
                    </li>
                    <li>
                        <strong>Pengamplasan</strong><br/>
                        Amplas seluruh permukaan kayu hingga halus dan aman digunakan.
                    </li>
                    <li>
                        <strong>Perakitan Rangka Meja</strong><br/>
                        Susun rangka meja terlebih dahulu menggunakan sekrup agar lebih kuat.
                    </li>
                    <li>
                        <strong>Pemasangan Papan Meja</strong><br/>
                        Pasang papan palet sebagai permukaan meja dan pastikan rata.
                    </li>
                    <li>
                        <strong>Finishing</strong><br/>
                        Cat atau lapisi meja dengan finishing sesuai selera.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Alat:</strong> gergaji, bor, palu, amplas</li>
                <li><strong>Bahan:</strong> kayu palet, paku, sekrup, cat finishing</li>
                <li><strong>Peringatan:</strong> Pastikan kayu bebas dari paku berkarat</li>
                <li><strong>Tips:</strong> Gunakan sekrup untuk sambungan agar meja lebih kokoh</li>
            </ul>
        `,
        img: "/img/kayu.jpg"
    },
    {
        name: "Tips Perencanaan dan Kerja Sama dalam Proyek Pertukangan",
        type: "article",
        category: "Lainnya",
        desc: "Panduan dasar perencanaan dan kerja sama tim agar proyek berjalan lancar.",
        content: `
            <article>
                <p>
                    Perencanaan yang baik dan kerja sama tim yang solid sangat menentukan keberhasilan sebuah proyek.
                    Artikel ini membahas tips sederhana untuk mengatur pekerjaan dan membangun koordinasi yang efektif.
                </p>
    
                <h3>Langkah-langkah Perencanaan</h3>
                <ol>
                    <li>
                        <strong>Menentukan Tujuan</strong><br/>
                        Tentukan hasil akhir proyek agar semua anggota tim memiliki arah yang sama.
                    </li>
                    <li>
                        <strong>Pembagian Tugas</strong><br/>
                        Bagi pekerjaan sesuai kemampuan masing-masing anggota.
                    </li>
                    <li>
                        <strong>Penyusunan Jadwal</strong><br/>
                        Buat jadwal kerja sederhana untuk menghindari keterlambatan.
                    </li>
                    <li>
                        <strong>Komunikasi Rutin</strong><br/>
                        Lakukan diskusi singkat untuk memantau progres pekerjaan.
                    </li>
                    <li>
                        <strong>Evaluasi</strong><br/>
                        Setelah proyek selesai, lakukan evaluasi untuk perbaikan ke depannya.
                    </li>
                </ol>
            </article>
        `,
        details: `
            <ul>
                <li><strong>Persiapan:</strong> rencana kerja, daftar tugas</li>
                <li><strong>Peralatan:</strong> alat tulis atau aplikasi catatan</li>
                <li><strong>Peringatan:</strong> Hindari miskomunikasi antar anggota tim</li>
                <li><strong>Tips:</strong> Selalu sepakati keputusan bersama sebelum bekerja</li>
            </ul>
        `,
        img: "/img/planning.jpg"
    }
];

module.exports = tutorialSeed;