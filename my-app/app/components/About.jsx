import React from 'react'
import AboutImg from '../../public/assets/about.jpg'
import Link from 'next/link';
import Image from 'next/image';

function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                        About
                    </p>
                    <h2 className='py-4'>BAŞ ALTYAPI İNŞAAT ANONİM ŞİRKETİ</h2>
                    <p className='py-2 text-gray-600'>
                        16 yıldan bu yana Türkiye’nin inşaat ve gayrimenkul sektöründe başarılı projelere imza atan BAŞ Altyapı İnşaat  A Grubu Yapı
                        Müteahhitlik Belgesini alan inşaat şirketlerinden biri oldu. Ayrıca TS EN ISO 9001 2015 Kalite Yönetim Belgesi, ISO 14001:2015 Çevre
                        Yönetim Sistemi Belgesi, OHSAS 18001:2007 İş Güvenliği Yönetim Sistem Belgesine sahip olan BAŞ Altyapı İnşaat, uyguladığı projelerin
                        tamamını bu standartlar çerçevesinde tamamlamaktadır.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Proje verimliliği ve rekabet yeteneğiyle müşteri taleplerini hızlı ve kaliteli biçimde karşılamak, verimliliği arttırırken yenilikçi
                        çizgisini sürdürmek şirketin temel prensipleri dahilindedir. Tecrübeli ve eğitimli personeli ile iş güvenliği konularında öncü,
                        yarattığı müşteri memnuniyeti ile örnek iş ve yaşam alanları üretmenin yanı sıra doğayla uyumlu ve insana değer veren projeleri hayata
                        geçirmek için titizlikle çalışır. Müşteri isteklerini beklentilerin üzerinde karşılamak, güvenilir hizmet sürekliliğini sağlamak,
                        kaynakları verimli şekilde kullanırken çevreyi korumak, Kalite Yönetim Sistemi şartlarına uygunluğu ile hem sektöre hem de toplumsal
                        yaşama katkıda bulunmayı hedeflemek şirketimizin vazgeçilmez ana temel felsefeleri arasındadır.

                        Sektörel başarısını ve faaliyet alanlarını her geçen gün artırarak ilk tercih edilen ve bu sayede büyüme ivmesini sürekli yükselten BAŞ Altyapı
                        İnşaat, çalışmalarına aralıksız devam etmektedir.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Projelerimize bir göz atın!
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About;