var arrLang = {
  //English Lang
  "en-gb": {
    // NAVIGASI BAR
    HOME: "Home",
    ABOUT: "About",
    PROJECT: "Project",
    CERTIFICATE: "Certificate",
    CONTACT: "Contact",

    //HOME SECTION
    TIME: () => {
      let hours = new Date().getHours();
      let time = document.getElementById("time");

      if (hours >= 4 && hours < 12) {
        time.innerHTML =
          'Hello, Good Morning! <i class="fas fa-cloud-sun"></i>';
      }
      if (hours >= 12 && hours < 16) {
        time.innerHTML = 'Hello, Good Afternoon! <i class="fas fa-sun"></i>';
      }
      if (hours >= 16 && hours < 18) {
        time.innerHTML =
          'Hello, Good Afternoon! <i class="fas fa-cloud-moon"></i>';
      }
      if (hours >= 18 || hours < 4) {
        time.innerHTML = 'Hello, Good Evening! <i class="fas fa-moon"></i>';
      }
    },
    NAME: "I'm Nicholas",
    MORE: "More about me",
    MAIN_INFO: "Main Info",
    ABOUT_ME: "About Me",
    CV: "Download CV",
    CONTACT_ME: "Contact Me",

    SKILLS: "Skills",
    EXP: "Experience",
    EDU: "Education",

    SKILL_1: "Critical Thinking",
    SKILL_2: "R Programming",
    SKILL_3: "Problem Solving",
    SKILL_4: "Python",
    SKILL_5: "Teamwork",
    SKILL_6: "SQL",
    SKILL_7: "Creativity",
    SKILL_8: "Machine Learning",
    SKILL_9: "Communication",
    SKILL_10: "Data Analysis",

    EXP_START: "Sept 2022",
    EXP_END: "Oct 2023",
    EXP_POSITION: "Back End Developer",
    EXP_COMPANY: "PT. Brainworx Solusi Integrasi",
    EXP_DETAILS:"This is my first experience in the professional world, where I interned and worked part-time as a Backend Developer. During this time, I gained knowledge and skills in API development, which is utilized for website construction.",

    EDU_STATUS_1: "Student",
    EDU_STATUS_2: "Student",
    CAMPUS: "Binus University",
    SCHOOL: "Cinta Kasih Tzu Chi High School",
    EDU_DETAILS_1:"Recent graduate with a double major in Computer Science and Statistics.",
    EDU_ACTIVITY_1:"Relevant Coursework: Database Management Systems, Machine Learning, Statistical Analysis, and Web Development.",
    EDU_DETAILS_2:"Majoring in Science",
    EDU_ACTIVITY_2:"Extracurriculars: mathematics club, volleyball, chess, and student council member for the period 2015-2016.",


    CATEGORY: "Category",
    // PROJECT SECTION
    PROJECT_SECTION: "What I've Done",
    PROJECT_CATEGORY: "All",
    PROJECT_CATEGORY_1: "Machine Learning",
    PROJECT_CATEGORY_2: "Data Analysis",
    PROJECT_CATEGORY_3: "Web Development",

    VIEW_PROJECT: "View Project",
    PROJECT_INFORMATION: "Project Information",
    PROJECT_DESCRIPTION: "Project Description",
    PROJECT_INFO: "Project Info",
    YEAR: "Year",
    PROGRAMMING_LANG: "Programming Language",
    SOURCE: "Source",
    CLICKHERE: "Click Here",

    PROJECT_DETAILS_1: "This project was undertaken as one of the challenges given by one of the professors in the Data Mining course to perform KNN and Decision Tree classification using Python and provide an analysis of the results obtained.",
    PROJECT_DETAILS_2: "This project was carried out as one of the final exam submissions. In this project, I performed breast cancer diagnosis classification using the decision tree method. The conclusion was that using a full tree in the model created can classify breast cancer diagnosis more accurately with a very high accuracy rate of 95.49%.",
    PROJECT_DETAILS_3: "This project was undertaken as one of the final exam submissions. In this project, I conducted classification based on gender, consisting of factors like hair length, forehead width, lip thickness, and others, using the C4.5 and Naïve Bayes algorithms. The final conclusion was that the C4.5 algorithm model is a better classification model compared to the Naïve Bayes algorithm for gender classification.",    
    PROJECT_DETAILS_4: "This project was carried out as one of the final exam submissions. In this project, I grouped mall customers based on age, annual income, and shopping score using the Clustering method. The result of this project is the identification of 5 customer groups within the mall.",    
    PROJECT_DETAILS_5: "This project is one of the projects undertaken as part of my learning journey with Dicoding. In this project, I created a machine learning project using Convolutional Neural Network (CNN) for image classification.",
    PROJECT_DETAILS_6: "This project is one of the projects undertaken during my learning with DQLab. In this project, I conducted an analysis of product package formation using the Arules method.",
    PROJECT_DETAILS_7: "This project is one of the projects undertaken during my learning with DQLab. In this project, I conducted an analysis of the investment process carried out by investors, such as the time it takes for an investor to place an order after first viewing loan details, the relationship between the number of views and orders, the time it takes for investors to pay orders, and more.",
    PROJECT_DETAILS_8: "This project was undertaken as one of the final thesis assignments. In this project, I performed a prediction analysis of monthly beer production in Australia. The method used for prediction is ARIMA (Autoregressive Integrated Moving Average).",
    PROJECT_DETAILS_9: "This project was undertaken as part of my final thesis assignment. In this project, I presented a website application designed to facilitate users in learning Linear Algebra by providing step-by-step solutions to given problems.",

    // Certificate SECTION
    CERTIFICATE_SECTION: "My CertificateS",
    CERTIFICATE_CATEGORY: "All",

    COMPETITION: "COMPETITION",
    VIEW_CERTIFICATE: "View Certificate",
    CERTIFICATE_INFORMATION: "Certificate Information",
    CERTIFICATE_DESCRIPTION: "Certificate Description",
    CERTIFICATE_INFO: "Certificate Info",
    DATE: "Date",
    VALID: "Valid Until",
    CREDENTIAL: "Credential",
    PRESENTED: "Presented By",


    CERTIFICATE_DETAILS_1: "This certificate was obtained after completing the Data Analysis for Finance Project: Investor Investment Process available on DQLab.",
    CERTIFICATE_DETAILS_2: "This certificate was obtained after completing the Machine Learning for Retail with R: Product Packaging Project available on DQLab.",
    CERTIFICATE_DETAILS_3: "This certificate was obtained after completing one of the Learning Modules on Covid-19 Data Analysis in Indonesia on DQLab.",
    CERTIFICATE_DETAILS_4: "This certificate was obtained after completing the Basic Data Visualization Learning Class on Dicoding.",
    CERTIFICATE_DETAILS_5: "This certificate was obtained after completing the Start Programming with Python Class on Dicoding.",
    CERTIFICATE_DETAILS_6: "This certificate was obtained after completing the Beginner's Machine Learning Learning Class on Dicoding.",
    CERTIFICATE_DETAILS_7: "This certificate was obtained after completing the Machine Learning Development Learning Class on Dicoding.",
    CERTIFICATE_DETAILS_8: "This certificate was obtained after becoming a finalist in the Rasio 2021 competition held by the Statistics Student Association of Padjadjaran University (UNPAD).",

    DATE_1: "June 28, 2021",
    VALID_1: "Lifetime",

    DATE_2: "June 19, 2021",
    VALID_2: "Lifetime",

    DATE_3: "June 17, 2021",
    VALID_3: "Lifetime",

    DATE_4: "May 25, 2021",
    VALID_4: "May 25, 2024",

    DATE_5: "May 27, 2021",
    VALID_5: "May 27, 2024",

    DATE_6: "May 29, 2021",
    VALID_6: "May 29, 2024",

    DATE_7: "August 25, 2021",
    VALID_7: "August 25, 2024",

    DATE_8: "2021",
    VALID_8: "Lifetime",

    // CONTACT SECTION
    GET_IN_TOUCH: "Get In Touch",
    PHONE: "Phone",
    ADDRESS: "Address",
    ALAMAT: "Cengkareng, West Jakarta, Indonesia",

    // SETTING
    THEME: "Theme Colors",
    LANGUAGES: "Language",
    ABOUTME:
    "Allow me to introduce myself, my name is Nicholas. I am a recent graduate with a double major in Computer Science and Statistics. I am highly enthusiastic about continuously expanding my knowledge and achieving success in this field. I am always ready to face new challenges and seize opportunities for personal growth. I find great joy in applying my understanding of programming, and I look forward to collaborating with individuals who share similar interests. Please do not hesitate to reach out to me if you wish to engage in discussions, collaborate, or share ideas."  },

  //Indonesia Language
  idn: {
    // NAVIGASI BAR
    HOME: "Beranda",
    ABOUT: "Tentang",
    PROJECT: "Proyek",
    CERTIFICATE: "Sertifikat",
    CONTACT: "Kontak",

    //HOME SECTION
    TIME: () => {
      let hours = new Date().getHours();
      let time = document.getElementById("time");

      if (hours >= 4 && hours < 12) {
        time.innerHTML = 'Halo, Selamat Pagi! <i class="fas fa-cloud-sun"></i>';
      }
      if (hours >= 12 && hours < 16) {
        time.innerHTML = 'Halo, Selamat Siang! <i class="fas fa-sun"></i>';
      }
      if (hours >= 16 && hours < 18) {
        time.innerHTML =
          'Halo, Selamat Sore! <i class="fas fa-cloud-moon"></i>';
      }
      if (hours >= 18 || hours < 4) {
        time.innerHTML = 'Halo, Selamat Malam! <i class="fas fa-moon"></i>';
      }
    },

    NAME: "Saya Nicholas",
    MORE: "Lihat detail saya",
    MAIN_INFO: "Informasi Utama",
    ABOUT_ME: "Tentang Saya",
    CV: "Unduh CV",
    CONTACT_ME: "Hubungi Saya",

    SKILLS: "Kemampuan",
    EXP: "Pengalaman",
    EDU: "Pendidikan",

    SKILL_1: "Berpikir Kritis",
    SKILL_2: "Pemrograman R",
    SKILL_3: "Pemecahan Masalah",
    SKILL_4: "Python",
    SKILL_5: "Kerjasama Tim",
    SKILL_6: "SQL",
    SKILL_7: "Kreativitas",
    SKILL_8: "Pembelajaran Mesin",
    SKILL_9: "Komunikasi",
    SKILL_10: "Analisis Data",

    EXP_START: "September 2022",
    EXP_END: "Oktober 2023",
    EXP_POSITION: "Back End Developer",
    EXP_COMPANY: "PT. Brainworx Solusi Integrasi",
    EXP_DETAILS:"Ini merupakan pengalaman pertama saya dalam dunia kerja, di mana saya melakukan magang dan bekerja paruh waktu sebagai Backend Developer. Selama waktu tersebut, saya memperoleh pengetahuan dan keterampilan dalam pengembangan API yang digunakan untuk membangun situs web.",

    EDU_STATUS_1: "Mahasiswa",
    EDU_STATUS_2: "Siswa",
    CAMPUS: "Universitas Binus",
    SCHOOL: "SMA Cinta Kasih Tzu Chi",
    EDU_DETAILS_1: "Lulusan baru dengan gelar ganda dalam Ilmu Komputer dan Statistik.",
    EDU_ACTIVITY_1: "Mata kuliah yang relevan: Sistem Pengelolaan Basis Data, Pembelajaran Mesin, Analisis Statistik, dan Pengembangan Web.",
    EDU_DETAILS_2: "Mengambil jurusan IPA",
    EDU_ACTIVITY_2: "Ekstrakurikuler: klub matematika, voli, catur, dan anggota OSIS untuk periode 2015-2016.",



    CATEGORY: "Kategori",
    // PROJECT SECTION
    PROJECT_SECTION: "Apa yang telah saya lakukan",
    PROJECT_CATEGORY: "Semua",
    PROJECT_CATEGORY_1: "Pembelajaran Mesin",
    PROJECT_CATEGORY_2: "Analisis Data",
    PROJECT_CATEGORY_3: "Pengembangan Web",

    VIEW_PROJECT: "Lihat Proyek",
    PROJECT_INFORMATION: "Informasi Proyek",
    PROJECT_DESCRIPTION: "Deskripsi Proyek",
    PROJECT_INFO: "Informasi Proyek",
    YEAR: "Tahun",
    PROGRAMMING_LANG: "Bahasa Pemrograman",
    SOURCE: "Sumber",
    CLICKHERE: "Klik Disini",

    PROJECT_DETAILS_1:"Proyek ini dikerjakan sebagai salah satu challange yang diberikan oleh salah satu dosen dalam mata kuliah Data Mining untuk melakukan klasifikasi KNN dan Decision Tree menggunakan Python dan memberikan analisis dari hasil yang didapatkan.",
    PROJECT_DETAILS_2:"Proyek ini dikerjakan sebagai salah satu pengumpulan ujian akhir. Pada proyek ini saya melakukan klasifikasi diagnosis pada kanker payudara dengan menggunakan metode decision tree. Hasil kesimpulan yang didapatkan adalah dengan menggunakan full tree pada model yang dibuat akan dapat melakukan klasifikasi untuk diagnosis pada kanker payudara dengan lebih tepat dengan tingkat akurasi pada model sangat tinggi yaitu sebesar 95,49% ",
    PROJECT_DETAILS_3:"Proyek ini dikerjakan sebagai salah satu pengumpulan ujian akhir. Pada proyek ini saya melakukan klasifikasi berdasarkan gender yang terdiri dari panjang rambut, lebar kening, ketebalan bibir dan lainnya dengan menggunakan algoritma C4.5 dan Naïve Bayes. Hasil Kesimpulan akhir yang didapatkan adalah model dengan algoritma C4.5 merupakan model klasifikasi yang lebih baik daripada model dengan algoritma Naïve Bayes untuk melakukan klasifikasi terhadap gender",
    PROJECT_DETAILS_4:"Proyek ini dikerjakan sebagai salah satu pengumpulan ujian akhir. Pada proyek ini saya melakukan pengelompokkan terhadap pelanggan mall berdasarkan umur, pendapatan tahunan, dan skor pembelanjaan dengan menggunakan metode Clustering. Hasil yang didapatkan dari proyek ini adalah terdapat 5 kelompok dari pelanggan mall yang dapat dikelompokan.",
    PROJECT_DETAILS_5:"Proyek ini merupakan salah satu proyek yang dilakukan dalam menyelesaikan pembelajaran dengan Dicoding. Pada proyek ini saya membuat pembelajaran mesin dengan CNN (Convolutional Neural Network) untuk melakukan klasifikasi gambar yang diberikan.",
    PROJECT_DETAILS_6:"Proyek ini merupakan salah satu proyek yang dilakukan dalam melakukan pembelajaran di DQLab. Pada proyek ini melakukan analisis terhadap pembentukan paket produk dengan menggunakan metode Arules.",
    PROJECT_DETAILS_7:"Proyek ini merupakan salah satu proyek yang dilakukan dalam melakukan pembelajaran di DQLab. Pada proyek ini melakukan analisis terhadap proses investasi yang dilakukan oleh investor, seperti lama waktu yang dibutuhkan investor untuk pesan sejak pertama melihat detail loan, hubungan jumlah view dengan order, Waktu yang dibutuhkan investor untuk membayar pesanan, dan lainnya.",
    PROJECT_DETAILS_8:"Proyek ini dikerjakan sebagai salah satu pengumpulan ujian akhir. Pada proyek ini saya melakukan analisis prediksi terhadap jumlah produksi beer per bulan di Australia. Metode yang digunakan dalam melakukan prediksi adalah dengan menggunakan ARIMA (Autoregressive Integrated Moving Average).",
    PROJECT_DETAILS_9:"Proyek ini dikerjakan sebagai pengumpulan tugas akhir skripsi. Pada proyek ini menyajikan sebuah aplikasi website yang dapat digunakan untuk memudahkan penggunanya dalam mempelajari Aljabar Linear dengan menyediakan langkah-langkah penyelesaian terhadap permasalahan yang diberikan.",

    // Certificate SECTION
    CERTIFICATE_SECTION: "Pencapaian Saya",
    CERTIFICATE_CATEGORY: "Semua",

    COMPETITION: "KOMPETISI",

    VIEW_CERTIFICATE: "Lihat Sertifikat",
    CERTIFICATE_INFORMATION: "Informasi Sertifikat",
    CERTIFICATE_DESCRIPTION: "Deskripsi Sertifikat",
    CERTIFICATE_INFO: "Informasi Sertifikat",
    DATE: "Tanggal",
    VALID: "Berlaku Hingga",
    CREDENTIAL: "Kredensial",
    PRESENTED: "Disajikan Oleh",

    CERTIFICATE_DETAILS_1:"Sertifikat ini didapatkan setelah menyelesaikan Project Data Analysis for Finance: Proses Investasi Investor yang tersedia pada DQLab.",
    CERTIFICATE_DETAILS_2:"Sertifikat ini didapatkan setelah menyelesaikan Project Machine Learning for Retail with R: Product Packaging yang tersedia pada DQLab.",
    CERTIFICATE_DETAILS_3:"Sertifikat ini didapatkan setelah menyelesaikan salah satu modul pembelajaran Analisis Data Covid 19 di Indonesia pada DQLab.",
    CERTIFICATE_DETAILS_4:"Serifikat ini didapatkan setelah menyelesaikan kelas Belajar Dasar Visualisasi Data pada Dicoding.",
    CERTIFICATE_DETAILS_5:"Serifikat ini didapatkan setelah menyelesaikan kelas Memulai Pemrograman Dengan Python pada Dicoding.",
    CERTIFICATE_DETAILS_6:"Serifikat ini didapatkan setelah menyelesaikan kelas Belajar Machine Learning Untuk Pemula pada Dicoding.",
    CERTIFICATE_DETAILS_7:"Serifikat ini didapatkan setelah menyelesaikan kelas Belajar Pengembangan Machine Learning pada Dicoding.",
    CERTIFICATE_DETAILS_8:"Sertifikat ini setelah menjadi finalis pada perlombaan Rasio 2021 yang diselenggarakan oleh Himpunan Mahasiswa Statistika Universitas Padjadjaran (UNPAD).",

    DATE_1:"28 Juni 2021",
    VALID_1:"Seumur Hidup",

    DATE_2:"19 Juni 2021",
    VALID_2:"Seumur Hidup",

    DATE_3:"17 Juni 2021",
    VALID_3:"Seumur Hidup",

    DATE_4:"25 Mei 2021",
    VALID_4:"25 Mei 2024",

    DATE_5:"27 Mei 2021",
    VALID_5:"27 Mei 2024",

    DATE_6:"29 Mei 2021",
    VALID_6:"29 Mei 2024",

    DATE_7:"25 Agustus 2021",
    VALID_7:"25 Agustus 2024",

    DATE_8:"2021",
    VALID_8:"Seumur Hidup",



    // CONTACT SECTION
    GET_IN_TOUCH: "Hubungi Saya",
    PHONE: "Telepon",
    ADDRESS: "Alamat",
    ALAMAT: "Cengkareng, Jakarta Barat, Indonesia",

    // SETTING
    THEME: "Warna Tema",
    LANGUAGES: "Bahasa",
    ABOUTME:
      "Perkenalkan, nama saya Nicholas. Saya adalah lulusan baru dengan pendidikan ganda dalam Ilmu Komputer dan Statistik. Saya sangat bersemangat untuk terus meningkatkan pengetahuan saya dan mencapai kesuksesan di bidang ini. Saya selalu siap menghadapi tantangan baru dan memanfaatkan peluang untuk pertumbuhan pribadi. Saya merasa senang ketika dapat mengaplikasikan pemahaman saya dalam pemrograman dan berharap untuk berkolaborasi dengan orang lain yang memiliki minat serupa. Jangan ragu untuk menghubungi saya jika Anda ingin berdiskusi, berkolaborasi, atau berbagi ide."  },
};

// get/set the selected language
$(".translate").click(function () {
  var lang = $(this).attr("id");

  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// current language will be selected although the page is reloaded
$(".translate").click(function () {
  var lang = $(this).attr("id");
  localStorage.setItem("lang", lang);
}),
  $(document).ready(function () {
    var lang = localStorage.getItem("lang");
    $(".lang").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  }),
  $(document).ready(function () {
    var lang = localStorage.getItem("lang");
    if (lang == null) {
      lang = "en-gb";
    }
    $(".lang").each(function (index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
