import React from 'react'
import styles from "../styles/Home.module.css";

const PrivacyPolicy = () => {
    return (
        <div className={styles.privacyContainer}>
            <div className={styles.privacyContent}>
                <h1>MOBİL UYGULAMA GİZLİLİK BİLDİRİMİ</h1>
                <span>Tüm Kullanıcılarımızın gizliliği bizim için çok önemlidir. Bir Uygulama Kullanıcısı olarak Hizmetimizi kullandığınızda, (Uygulama Yayıncısı olarak) Kişisel Verilerinizi işleriz. Bu Gizlilik Bildirimi, Kişisel Verilerinizi nasıl koruduğumuzu ve işleme koyduğumuzu açıklar. Dikkatlice okumanızı öneririz.</span>
                <h4>1. Bu gizlilik bildiriminde ne belirtilmiştir?</h4>
                <span>Bu Gizlilik Bildirimindeki bölümler size aşağıdakiler hakkında bilgi verir:</span>
                <ul>
                    <li>İşlenen Kişisel Verilerin türleri,</li>
                    <li>Kişisel Verilerin işlenme amaçları,</li>
                    <li>Kişisel Verilerin işlendiği yerler,</li>
                    <li>Kişisel Verileri korumak için uygulanan güvenlik önlemleri,</li>
                    <li>Üçüncü şahıslarla ilgili sorumluluk sınırları,</li>
                    <li>Kişisel Verilerinizi görüntüleme, değiştirme ve silme,</li>
                    <li>Bu Gizlilik Bildiriminde yapılan değişiklikler;</li>
                    <li>Sorunuz veya açıklamalarınız varsa ne yapacaksınız?</li>
                </ul>
                <h4>2. İşlenen kişisel verilerin türleri</h4>
                <h5>A. Hizmetimiz tarafından kullanılan Kişisel Veriler</h5>
                <span>Hizmetimizi geliştirmek için Anonim Verileri kullanırız. Bu bilgiler, Hizmet aracılığıyla kamuyaaçıklanmayacaktır</span>
                <h5>B. Otomatik olarak oluşturulan bilgiler</h5>
                <span>Çoğu diğer web siteleri ve çevrimiçi hizmetler gibi, Uygulamayı nasıl kullandığınızla ilgili olarak otomatik olarak üretilen bilgileri toplar ve işleriz. Toplanan bilgiler, ip adresinizi ve / veya benzersiz cihaz kimliğinizi içerir. <br />
                    Özellikle katılmayı seçerseniz, Uygulama, coğrafi konum bilgilerinizi toplayabilir. Her durumda, coğrafi konum bilginizin alınmasını mobil cihazınızın ayarlarından engelleyebilirsiniz. <br />
                    Sosyal ağ hesabınızdan bilgi erişimi ve toplama izni vermeyi özellikle tercih ederseniz, sosyal ağ hesabınızdaki temel kişisel bilgileriniz (adınız ve e-posta adresiniz gibi) ve ayrıca sosyal ağ kullanıcı kimliği ( şifreniz değil ) ve Uygulama aracılığıyla paylaştığınız yayınlarla ilgili parametreler. Erişilebilen ve alınabilecek bilgileri kontrol etmek için hesabınızın gizlilik tercihlerini nasıl ayarlayabileceğiniz hakkında daha fazla bilgi için lütfen sosyal ağın gizlilik politikasına bakın. <br />
                    Bu, aynı zamanda, Uygulamayı nasıl kullandığınıza ilişkin otomatik olarak oluşturulmuş bilgilerle ilgili olarak gerçekleşir. Bu tür bilgiler, Uygulamanın nasıl kullanıldığını daha iyi anlamamıza ve bir kullanıcı olarak ihtiyacınıza uygun hizmet üretmemize yardımcı olur. <br />
                    Uygulama içindeki kullanıcı yetkilendirme özelliklerini etkinleştirirseniz, aşağıdaki ek bilgiler saklanır: <br />
                </span>
                <ul>
                    <li>Isim</li>
                    <li>E-Mail</li>
                    <li>Telefon numarası (isteğe bağlı)</li>
                    <li>Facebook, Twitter, Google+ veya LinkedIn gibi harici bir sağlayıcı tarafından gönderilen ek profil bilgileri</li>
                </ul>
                <span>Uygulama sahibine, uygulamanın kullanımı hakkında bilgi vermek için aşağıdaki (bilinmeyen) bilgileri de topluyoruz:</span>
                <ul>
                    <li>Uygulamayı açtığınız an</li>
                    <li>Uygulamanın içinde açtığınız ekranlar ve bu ekranlarda harcadığınız süre</li>
                    <li>Uygulamadan ayrıldığınız an</li>
                </ul>
                <span>Not: kullanıcı yetkilendirme özellikleri etkinleştirilmişse, giriş yaptığınızda anonim bilgileri sizin bilgilerinizle ilişkilendirebiliriz.<br />
                    Eğer uygulamada anlık bildirim reklamları aktifse, uygulama ile entegre çalışan BleshSDK hakkındaki bilgiler aşağıda sunulmaktadır.</span>
                <ul>
                    <li>BleshSDK vasıtasıyla Kullanıcılar’ın bildirim izni durumu, bluetooth durum bilgisi, cihaz bilgileri, reklam tanıtıcısı (IDFA), konum, operatör, yüklü uygulama listesi bilgilerine erişilmekte olup sağlanan bu bilgilerin gizliliği için gerekli güvenlik önlemleri alınmaktadır.</li>
                    <li>Kullanıcı’nın, kendisine iletilen kampanya görüntüsünü fotoğraf albümüne kaydetmek istemesi durumunda, Kullanıcı’nın fotoğraf albümü ve kamerasına erişilmekte ve ekran görüntüsü fotoğraf albümüne kaydedilmektedir.</li>
                    <li>Bilgiler yalnızca Kullanıcı’nın izin verdiği ölçüde Uygulama üzerinden anlık bildirimler gönderme amacı kapsamında, güvenli şekilde ve sadece gereken süre boyunca kullanılmaktadır. Bilgiler yalnızca söz konusu amaçların gerçekleştirilmesi için üçüncü partiler ile paylaşılmakta olup bu kapsam dışında bilgilerin yayınlanması ve ifşa edilmesine izin verilmemektedir.</li>
                </ul>
                <h5>C. Belirli Bilgiler</h5>
                <span>Size sadakat kartı, haber bültenleri, reklamcılık gibi bazı etkinliklerle başvurmanız istenebilir; bu durumda bazı kişisel bilgiler istenir. Bu bilgiler, hizmetimizin (üçüncü şahıslar dahil) veritabanında saklanır ve bizimle paylaşılacaktır. Uygulamadaki fotoğraflar da dahil olmak üzere veri yüklediğinizde, bu paylaşılacak ve uygulamanın diğer tüm kullanıcıları tarafından görülebilecektir.</span>

                <h4>3. Kişisel Verilerin işlenme amaçları</h4>
                <h5>A. Amaçlar</h5>
                <span>Taraflar Kişisel Verileri aşağıdaki amaçlarla işlemektedir:</span>
                <ul>
                    <li>Hizmeti kullanabilmenizi sağlamak için,</li>
                    <li>Hizmetimizle ilgili bilgileri güncel tutmak için,</li>
                    <li>Hizmetimizle ilgili bilgileri güncel tutmak için,</li>
                    <li>Hizmetimizle ilgili bilgileri güncel tutmak için,</li>
                    <li>Hizmetimizle ilgili bilgileri güncel tutmak için,</li>
                    <li>Hizmetimizle ilgili bilgileri güncel tutmak için,</li>
                    <li>Hizmetimizle ilgili bilgileri güncel tutmak için,</li>
                </ul>
                <h5>B. Kişisel Verilerin üçüncü şahıslara iletilmesi</h5>
                <span>
                    Sizden önceden izin alınmaksızın Kişisel Verilerinizi üçüncü şahıslara satmamaktayız, satmıyor veya kiralamıyoruz. Bununla birlikte, Ücretli Hizmetlerle ilgili ödeme sağlayıcıları aracılığıyla ödeme yapmak gibi Kişisel Verilerinizi size sağlama veya talimatları yerine getirmeniz açısından şart olduğu durumlarda, Kişisel Verilerinizi üçüncü taraflara sağlayabiliriz.<br />
                    Uygun olduğunu düşündüğümüz şekilde hizmetin bu tür amaçlar için üçüncü taraflara kullanımı hakkında toplu anonim veriler sağlayabiliriz. Toplam anonim veriler, size geri gönderilemeyen ve bu nedenle Kişisel Veriler olarak sayılmayan verilerdir. Örneğin, Kullanıcıların Hizmeti nasıl kullandığını daha iyi anlamak için toplu anonim verileri kullanabiliriz.<br />
                    Üçüncü bir tarafa geçtiğimiz veya bir üçüncü tarafla birleştiğimiz veya bir yeniden yapılandırmaya tabi olduğumuz durumda, Kişisel Verileriniz de üçüncü kişilere açıklanabilir ve / veya bu üçüncü kişiye devredilebilir. Bu üçüncü taraf, Kişisel Verileri ve bize sağladığınız diğer bilgileri kullanmaya devam etme hakkına sahip olacak.<br />
                    Kişisel Verilerinizi, iyi niyetle, bir mahkeme kararı, halen devam eden adli işlem, cezai veya sivil mahkeme celbi veya kolluk kuvveti makamları tarafından verilen diğer yasal işlem veya taleplere uymanız gerektiğine inandığımız yerlerde ifşa edebiliriz veya egzersiz yapabiliriz Yasal hakları veya yasal iddialara karşı savunmak.<br />
                </span>

                <h4>4. Kişisel Verilerin işlendiği yerler</h4>

                <span>Hizmet kapsamında işlenen verilerin tutulduğu veri merkezleri değişik bölgelerde bulunmaktadır., Türkiye, İrlanda, Hollanda, Amerika Birleşik Devletleri bölgelerinde yer alan barındırma hizmetleri kullanılarak sağlanmaktadır. Bununla birlikte, işlenen Kişisel Veriler, bu ülkeler ve bölgeler dışında bir ülkede bulunan muhafaza sunucularına aktarılabilir ve depolanabilir. Kişisel Verilerinizin güvenli bir şekilde ve bu gizlilik politikasına uygun şekilde kullanılmasını sağlamak için makul ölçüde gerekli tüm adımları atacağız.</span>
                
                <h4>5. Kişisel Verileri korumak için hangi güvenlik önlemleri uygulanmaktadır?</h4>

                <span>Verilerinizin güvenliği ve diğer Kullanıcıların güvenliği bizim için çok önemlidir. Kişisel Verilerinizi kayıp ya da herhangi bir yasadışı işleme karşı korumak için teknik ve organizasyonel önlemler aldık. Aşağıdaki tedbirleri uyguladık: sunucularımızı güvenlik duvarları, SSL bağlantıları ve hassas verilerin şifrelenmesi yoluyla koruma. Bu liste ayrıntılı değildir.</span>

                <h4>6. Üçüncü şahıslarla ilgili sorumluluk sınırları</h4>

                <span>Hizmetimiz üçüncü taraflar tarafından sunulan hizmetler ve ürünler ve / veya ortakların, reklamverenlerin ve diğer üçüncü tarafların web sitelerine veya hizmetlerine köprüler içerebilir. Tarafların, bu üçüncü tarafların içeriği, web siteleri veya hizmetleri üzerinde herhangi bir kontrolü veya etkisi yoktur. Üçüncü kişi web sitelerinin ve hizmetlerinin kullanımı için farklı gizlilik politikaları uygulanabilir. Bu Gizlilik Beyanı, yalnızca taraflar tarafından Hizmeti kendi amaçları doğrultusunda kullanmanız yoluyla elde edilen Kişisel Verilerle ilgilidir. Taraflar, üçüncü taraf web sitelerinin ve hizmetlerin içeriği, uygulamaları veya işletilmesi ile ilgili herhangi bir sorumluluk kabul etmez.</span>

                <h4>7. Kişisel Verileri Görüntüleme ve Silme</h4>

                <span>Uygulamayı kullanarak toplanan kişisel bilgilere e-posta yoluyla bizimle iletişime geçmek veya silmek için bir istek gönderebilirsiniz. Kimliğinizi doğrulamak için ek bilgi sağlamanız istenebilir</span>

                <h4>8. Çocuk gizliliği</h4>

                <span>Çocuklarla ilgili kişisel bilgiler bilerek veya kasıtlı olarak toplanmamaktadır.</span>

                <h4>9. Güvenlik</h4>

                <span>Kişisel bilgilerinizin güvenliğini sağlamak, hasar riskini en aza indirmek, bilgi kaybı ve yetkisiz erişimden veya bilgiyi kullanmak için önlemler uygulanmaktadır. Bununla birlikte, bu tedbirler mutlak bilgi güvenliği sağlayamamaktadır. Dolayısıyla, kişisel bilgilerinizin güvenliğini sağlamak için çaba sarf edilir, ancak bu garanti edilmez ve Uygulamanın ve ilgili veritabanlarının herhangi bir haksız davranış, arıza, izinsiz engeller veya erişim veya diğer kötüye kullanım ve kötüye kullanımdan muaf olacağını makul bir şekilde bekleyemezsiniz.</span>

                <h4>10. Bu Gizlilik Bildiriminde Yapılan Değişiklikler</h4>

                <span>Bu Beyan, herhangi bir zamanda güncellenebilir. Taraflar, Gizlilik Bildiriminin güncellenmiş bir sürümünü Hizmet aracılığıyla yayınlayacaktır. Taraflar, bu Gizlilik Bildiriminde yapacağı değişikliklerden haberdar olmak ve tarafların Kişisel Verilerinizi nasıl koruma altına alacakları konusunda bilgi sahibi olmak için bu sayfayı zaman zaman kontrol etmenizi önerir. Bu Gizlilik Bildirimini periyodik olarak gözden geçirmek ve güncellemeler hakkında bilgi sahibi olmak sizin sorumluluğunuzdadır ve kabul ve taahhüt eder. Bu Bildirimde yapılan değişikliklerin herhangi birine bağlı kalmayı kabul etmektesiniz. Değişiklik yürürlüğe girdikten sonra Uygulamayı kullanmaya devam etmeniz, değiştirilen Bildirimi kabul ettiğinizi gösterecektir. Değiştirilen Bildirimi kabul etmiyorsanız, Uygulamayı kaldırmanız ve onu daha fazla kullanmaktan kaçınmanız gerekir.</span>

                <h4>11. Herhangi bir sorunuz ya da açıklamalarınız varsa ne yapacaksınız?</h4>

                <span>Bu Gizlilik Bildirimi ile ilgili herhangi bir sorunuz veya açıklamalarınız varsa, lütfen orcabusinesssloutions@gmail.coma bir e-posta göndererek bizimle iletişime geçin.</span>

            </div>
        </div>
    )
}

export default PrivacyPolicy