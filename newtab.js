document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('photo-credit').style.display = 'none';

  const names = ["الله",
    "الرحمن",
    "الرحيم",
    "الملك",
    "القدوس",
    "السلام",
    "المؤمن",
    "المهيمن",
    "العزيز",
    "الجبار",
    "المتكبر",
    "الخالق",
    "البارئ",
    "المصور",
    "الغفار",
    "القهار",
    "الرزاق",
    "الفتاح",
    "العليم",
    "القابض",
    "محمد",
    "أحمد",
    "المصطفى",
    "المجتبى",
    "الحاشر",
    "العاقب",
    "القاسم",
    "العدنان",
    "الحميد",
    "المحمود",
    "التاهر",
    "المتعالي",
    "الشفيع",
    "الوسيلة",
    "الشهيد",
    "الكريم",
    "الصادق",
    "الأمين",
    "النبي الأمي",
    "الأمين",
    "الأمين"
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];

  fetch('https://api.unsplash.com/photos/random?client_id=uhlXxs8s-Wu4ttILOlgN-Qx3B8MvkHIyKMtmZKV0gHY&query=travel&content_filter=high')
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.getElementById('photo-description').textContent = data.description || 'Exploring the beauty of the world';
      document.getElementById('photographer-name').textContent = data.user.name;
      document.getElementById('photographer-name').href = data.user.links.html;

      document.getElementById('random-name').textContent = randomName;
      

      document.getElementById('photo-credit').style.display = '';
    })
    .catch(err => console.log(err));
});
