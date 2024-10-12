import React, { useState } from 'react';
import './css/Header.css';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);//giriş yapma modalının açık olup olmamasına bakar
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);//kayıt modalının açık olup olmadığına
  const [selectedCategories, setSelectedCategories] = useState([]);//seçilen ürün kategorilerini bir array olarak tutuyor
  const [cart, setCart] = useState([]); //kullanıcının alışveriş sepetindeki ürünleri array olarak tutuyor
  const [isCartOpen, setIsCartOpen] = useState(false);//sepetin görüntülenip görüntülenmediğini kontrol ediyor
  const [searchTerm, setSearchTerm] = useState(''); //arama alınına yazılan metni tutuyor
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);//ödeme sayfasının açık olup olmadığını kontrol ediyor

  const handleLoginClick = (e) => {//giriş modalını açıyor kayıt modalını kapatıyor

    e.preventDefault();
    setIsModalOpen(true);
    setIsRegisterOpen(false);
  };

  const closeModal = () => {//hem giriş hem kayıt hemde ödeme modalını kapatıyor
    setIsModalOpen(false);
    setIsRegisterOpen(false);
    setIsPaymentOpen(false);
  };

  const openRegister = (e) => {//kayıt modalını açıyor giriş modalını kapatıyor
    e.preventDefault();
    setIsRegisterOpen(true);
    setIsModalOpen(false);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.name;
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  
  const products = [
    {
      id: 1,
      category: 'Kitap',
      img: 'https://img.kitapyurdu.com/v1/getImage/fn:11905843/wh:true/wi:800',
      title: 'Nietzsche Ağladığında',
      author: 'Irvin D. Yalom',
      price: 305,
      oldPrice: 350,
      description: 'Yoğun ve sürükleyici olan yeni bir düşünce romanı sunuyoruz: Nietzsche Ağladığında.',
    },
    {
      id: 2,
      category: 'Kitap',
      img: 'https://img.kitapyurdu.com/v1/getImage/fn:11281449/wh:true/miw:200/mih:200',
      title: 'Aşk ve Gurur',
      author: 'Jane Austen',
      price: 275,
      oldPrice: 300,
      description: 'Jane Austen’in unutulmaz eseri Aşk ve Gurur, dünya klasiklerinin en sevilen romanları arasında.',
    },
    {
      id: 3,
      category: 'Elektronik',
      img: 'https://cdn.dsmcdn.com/ty1418/product/media/images/prod/QC/20240530/02/90c66d9d-f937-344c-b6a5-e2340b94bf68/1_org.jpg',
      title: 'Samsung S21',
      brand: 'SAMSUNG GALAXY',
      price: 18000,
      oldPrice: 18500,
      description: 'SAMSUNG GALAXY S21 FE 5G özellikleri ile donatılmış, 1080 x 2400 Piksel ekran, 4500 mAh batarya.',
    },
    {
      id: 4,
      category: 'Giyim',
      img: 'https://dfcdn.defacto.com.tr/2/A8312AX_23HS_GN699_01_02.jpg',
      title: 'Gömlek Yaka Elbise',
      brand: 'DEFACTO',
      price: 550,
      oldPrice: 600,
      description: 'Yeşil Kadın Gömlek Yaka Uzun Kollu Elbise DeFacto yeni sezon ürünü.',
    },
    {
      id: 5,
      category: 'Kozmetik',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGKFRt6WqZk_jTG17d0Ti1lBagsq2VB8THA&s',
      title: ' Güneş Kremi',
      brand: 'Missha',
      price: 500,
      oldPrice: 570,
      description: 'Koyulaşmış Cilt Tonunu Aydınlatan SPF50+/PA++++ Güneş Kkoruyucu Güneş ışınlarından yıpranmış cilde ebegümeci özü ile hassas bakım sağlar.',
    },
    {
      id: 6,
      category: 'Kozmetik',
      img: 'https://ideacdn.net/idea/lk/43/myassets/products/035/bb-cover-missha-23.png?revision=1723965714',
      title: 'Fondöten',
      brand: 'Missha',
      price: 370,
      oldPrice: 480,
      description: 'Mükemmel kapatıcı özelliğiyle ciltteki lekeleri kapatarak aydınlık ve temiz bir cilt görünümü sunar.',
    },
    {
      id: 7,
      category: 'Kozmetik',
      img: 'https://www.dermokozmetika.com.tr/bioblas-sac-dokulmesine-karsi-bitkisel-sampuan-1000ml-53903-34-B.jpg',
      title: ' Şampuan',
      brand: 'BİOBLAS',
      price: 120,
      oldPrice: 150,
      description: 'Kuru ve yıpranma karşıtı 1000 ml',
    },
    {
      id: 8,
      category: 'Kozmetik',
      img: 'https://productimages.hepsiburada.net/s/391/375-375/110000413843121.jpg',
      title: ' Diş Macunu',
      brand: 'Eyyüp Sabri Tuncer',
      price: 120,
      oldPrice: 150,
      description: 'Doğal bambu aktif karbonlu diş maacunu 90ml ',
    },
    {
      id: 9,
      category: 'Giyim',
      img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1499/product/media/images/prod/QC/20240822/23/935394a7-0ce4-305d-9623-0ebcb97a97ea/1_org.jpg',
      title: 'Peluş Mont',
      brand: 'LC WAİKİKİ',
      price: 500,
      oldPrice: 800,
      description: 'Kullanımı kolay, estetik ve dayanıklı yapısıyla hayatınıza pratiklik katarken, sunduğu özelliklerle beklentilerinizi fazlasıyla karşılayacak',
    },

    {
      id: 10,
      category: 'Kırtasiye',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqfOiSSagPggFSlZE6_CIlGKuXZU0NKT8pg&s',
      title: 'Spiralli Defter',
      brand: 'MATT NOTEBOOK',
      price: 60,
      oldPrice: 70,
      description: 'Her Ay Başlangıcında Aylık Hedefler, Önemli Günler, Ana Hedefler, İznelecek Filmler, Okunacak Kitaplar, Gezilecek Yerler Sayfası',
    },
    {
      id: 11,
      category: 'Kırtasiye',
      img: 'https://cdn.dsmcdn.com/mnresize/500/-/ty988/product/media/images/prod/SPM/PIM/20230816/11/b221fc4b-b9b6-3d6e-a2e7-eaf2723256b7/1_org.jpg',
      title: 'Spiralli 4lü Defter',
      brand: 'MATT NOTEBOOK',
      price: 200,
      oldPrice: 250,
      description: 'Her Ay Başlangıcında Aylık Hedefler, Önemli Günler, Ana Hedefler, İznelecek Filmler, Okunacak Kitaplar, Gezilecek Yerler Sayfası',
    },
    {
      id: 12,
      category: 'Kırtasiye',
      img: 'https://ugurludukkan.com/chosch-8li-keceli-kalem-seti-keceli-kalemler-ugurlu-dukkan-kalem-2828-88-B.jpg',
      title: 'Keçeli 8li Kalem',
      brand: 'MATT NOTEBOOK',
      price: 100,
      oldPrice: 150,
      description: 'Yumuşak uçlu kalem',
    },
    {
      id: 13,
      category: 'Ev Eşyaları',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKYD5BL7EVKEiIGSxxroJglE9QSvJNRKOyg&s',
      title: 'Botanical 27 Parça 6 Kişilik Yemek Takımı',
      brand: 'PORLAND',
      price: 15000,
      oldPrice: 15500,
      description: ' Botanical Kırlardaki yabani çiçeklerin bir araya gelmesiyle oluşan zarif desenler, Porlandın en yeni formundaki tabaklarında hayat buluyor. BOTANICAL Koleksiyonunda yer alan menekşe, lavanta, kelebek gibi desenler, sofralarınızda adeta bir doğa şöleni yaşatıyor.Koleksiyon, bahar renkleri ile minimal esintiler taşırken; doğal formu ve kendinden dokulu yapısı ile yaşam alanlarınızı canlandırıyor. Porlandın özel reçetesi ile Alumilite Porselen olarak üretilen koleksiyonda, günlük yemek servisleri, kahvaltı ve ikram ürünleri bulunuyor.',
    },
    {
      id: 14,
      category: 'Ev Eşyaları',
      img: 'https://ideacdn.net/idea/db/47/myassets/products/756/a.jpg?revision=1697143329',
      title: 'Mahpeyker 60 Parça Yemek Takımı',
      brand: 'PORLAND',
      price: 30000,
      oldPrice: 30500,
      description: 'Mahpeyker Koleksiyonu, günümüz trendlerinden olan Mandala etkisinin porselenle buluşmasıyla sofralarınıza altın şıklığını ve gösterişini getiriyor. Turkuaz renginin dinginliği ve zarafetiyle harmanlayıp, doğal tarihi figürleri 4 farklı desen ile güçlendirip sunulmaktadır.Fırında kullanılabilir, mikrodalga fırın kullanımına uygun değildir.',
    },
    
  ];

  // Seçilen kategorilere, yazar adına ve arama terimine göre ürünleri filtreleme
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.author && product.author.toLowerCase().includes(searchTerm.toLowerCase()));

    // Hem kategori hem arama terimi ya da yazar adına göre eşleşiyorsa ürünü gösterir
    return matchesCategory && matchesSearch;
  });



  //ürünü sepete ekleme veya miktar attırma
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Ürün sepette mevcutsa, miktarını artır
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Ürün sepette mevcut değilse, yeni ürünü ekle
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const productToRemove = prevCart.find((item) => item.id === productId);
      if (productToRemove && productToRemove.quantity > 1) {
        // Eğer ürün miktarı 1'den fazlaysa, miktarını azalt
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Eğer miktar 1 ise, ürünü sepetten kaldır
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };


  //sepet ve toplam tutar
  const calculateTotalAmount = () => {//sepetteki ürünlerin toplam fiyatı
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const toggleCart = () => {//sepetin açılıp kapanması
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {//sepeti kapatır
    setIsCartOpen(false);
  };

  const openPayment = () => {//ödeme sayfasını açar,sepeti kapatır
    setIsPaymentOpen(true);
    closeCart(); 
  };

  return (
    <>
      <nav>
        <div className="header">
          <input
            className="txt"
            type="text"
            placeholder="Arama yapın "
            value={searchTerm} // Arama terimini inputa bağla
            onChange={handleSearchChange} // Arama terimini güncelle
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
          <a id="icon1" href="#" onClick={handleLoginClick}>
            <i className="fa-solid fa-user"></i>
          </a>
          <a id="icon1" href="#" onClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            {/* Sepetteki ürün sayısı */}
            {cart.length > 0 && (
              <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            )}
          </a>
        </div>
      </nav>

      <section className="kategori">
        <span>Filtre</span>
        <div>
          <input
            type="checkbox"
            name="Kitap"
            id="Kitap"
            onChange={handleCategoryChange}
            checked={selectedCategories.includes('Kitap')}
          />
          Kitap
        </div>
        <div>
          <input
            type="checkbox"
            name="Elektronik"
            id="Elektronik"
            onChange={handleCategoryChange}
            checked={selectedCategories.includes('Elektronik')}
          />
          Elektronik
        </div>
        <div>
          <input
            type="checkbox"
            name="Giyim"
            id="Giyim"
            onChange={handleCategoryChange}
            checked={selectedCategories.includes('Giyim')}
          />
          Giyim
        </div>

        <div>
          <input
            type="checkbox"
            name="Kozmetik"
            id="Kozmetik"
            onChange={handleCategoryChange}
            checked={selectedCategories.includes('Kozmetik')}
          />
          Kozmetik
        </div>

        <div>
          <input
            type="checkbox"
            name="Kırtasiye"
            id="Kırtasiye"
            onChange={handleCategoryChange}
            checked={selectedCategories.includes('Kırtasiye')}
          />
          Kırtasiye
        </div>

        <div>
          <input
            type="checkbox"
            name="Ev Eşyaları"
            id="Ev Eşyaları"
            onChange={handleCategoryChange}
            checked={selectedCategories.includes('Ev Eşyaları')}
          />
          Ev Eşyaları
        </div>

      </section>

      <section className="ürünler">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.title} />
              <div>
                <span className="fos gray fs-5">
                  {product.author || product.brand}
                </span>
                <br />
                <span className="fs-4 fw-bold">{product.title}</span>
                <br />
                <span className="book_star">
                  <i className="fa-solid fa-star active"></i>
                  <i className="fa-solid fa-star active"></i>
                  <i className="fa-solid fa-star active"></i>
                  <i className="fa-solid fa-star active"></i>
                  <i className="fa-solid fa-star active"></i>
                </span>
                <span className="gray">500 yorum</span>
                <br />
                <p className="aciklama fos gray">{product.description}</p>
                <div>
                  <span className="black fw-bold">{product.price}₺</span>
                  <span className="gray eski_fiyat">{product.oldPrice}₺</span>
                </div>
                <button
                  className="sepet_buton"
                  onClick={() => addToCart(product)}
                >
                  SEPETE EKLE
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Ürün bulunamadı.</p>
        )}
      </section>

      {/* Sepet Modalı */}
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <span className="close-button" onClick={closeCart}>
              &times;
            </span>
            <h2>Alışveriş Sepeti</h2>
            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.title} />
                    <div>
                      <span>{item.title}</span>
                      <span>{item.quantity} x {item.price}₺</span>
                      <button onClick={() => removeFromCart(item.id)}>Sil</button>
                    </div>
                  </div>
                ))}
                {/* Toplam miktarı hesaplama ve gösterme */}
                <div className="total-amount">
                  <strong>Toplam: {calculateTotalAmount()}₺</strong>
                </div>
                <button onClick={openPayment}>Ödeme Yap</button>

              </>
            ) : (
              <p>Sepetiniz boş.</p>
            )}
          </div>
        </div>
      )}

      {isPaymentOpen && (
        <div className="payment-modal">
          <div className="payment-modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Ödeme</h2>
            <p>Toplam Miktar: {calculateTotalAmount()}₺</p>
            <form>
              <div>
                <input type="text" placeholder="Ad" required />
              </div>
              <div>
                <input type="text" placeholder="Soyad" required />
              </div>
              <div>
                <input type="text" placeholder="Kart Numarası" required />
              </div>
              <div>
                <input type="text" placeholder="Son Kullanma Tarihi" required />
              </div>
              <div>
                <input type="text" placeholder="CVV" required />
              </div>
              <div> 
                <button type="submit">Ödeme Yap</button>
              </div>
            </form>
          </div>
        </div>
      )}


      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <form>
              <h1>HOŞGELDİNİZ</h1>
              <div className="input-box">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Kullanıcı Adı"
                  required
                />
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Şifre"
                  requiredn
                />
                <i className="fa-solid fa-lock"></i>
              </div>
              <button className="login" type="submit">
                Giriş Yap
              </button>
              <div className="register-link">
                <p>
                  Üye değil misiniz?{' '}
                  <a href="#" onClick={openRegister}>
                    Kayıt Ol
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {isRegisterOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <form>
              <h1>KAYIT OL</h1>
              <div className="input-box">
                <input
                  type="text"
                  id="new-username"
                  name="new-username"
                  placeholder="Kullanıcı Adı"
                  required
                />
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-posta"
                  required
                />
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  id="new-password"
                  name="new-password"
                  placeholder="Şifre"
                  required
                />
                <i className="fa-solid fa-lock"></i>
              </div>
              <button className="register" type="submit">
                Kayıt Ol
              </button>
              <div className="login-link">
                <p>
                  Zaten üye misiniz?{' '}
                  <a href="#" onClick={handleLoginClick}>
                    Giriş Yap
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
