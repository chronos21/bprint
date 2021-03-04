import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Home() {
    function handleScroll(id) {
        let el = document.querySelector(id)
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <>
            <header className="sticky-top">
                <nav className="container-fluid main-header " >
                    <div className="row align-items-center" id="header-links-wrapper">
                        <div className="col-lg-4">
                            <ul className="header-links">
                                <li>
                                    <a href="#beranda-scroll" onClick={() => handleScroll('#beranda-scroll')}>Beranda</a>
                                </li>
                                <li>
                                    <a href="#proyek" onClick={() => handleScroll('#proyek')}>Proyek</a>
                                </li>
                                <li>
                                    <a href="#tentang-kami" onClick={() => handleScroll('#tentang-kami')}>Tentang Kami</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 order-first order-lg-2">
                            <h4 className="text-center" onClick={() => handleScroll('#beranda-scroll')}>Billy Printing</h4>
                        </div>
                        <div className="col-lg-4 order-last">
                            <ul className="header-links justify-content-end">
                                <li>
                                    <a href="#galeri" onClick={() => handleScroll('#galeri')}>Galeri</a>
                                </li>
                                <li>
                                    <a href="#partner" onClick={() => handleScroll('#partner')}>Partner</a>
                                </li>
                                <li>
                                    <a href="#kontak" onClick={() => handleScroll('#kontak')}>Kontak</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="beranda-scroll"></div>

            <main className="ov-x-hide">
                <section className="container-fluid" id="beranda">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="main-text">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h1>Desain, cetak, atau konsultasi</h1>
                                    </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-lg-5">
                                        <p className="fs-11">Mulai dari stiker, banner, brosur, undangan, kop surat, nota, packing box, surat Yasin, kalender, kartu nama &mdash; <a href="#kontak" className="hubungi-aja" onClick={() => handleScroll('#kontak')}>hubungi aja dulu.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main-img">
                    <img src="/images/home4.jpeg" draggable="false" height="250" alt="Gambar background 1" />
                </div>

                <section className="container pt-60" id="proyek">
                    <h1 className="section-title mb-lg-4">Proyek</h1>
                    <div className="row justify-content-center mb-lg-5 mb-4">
                        <div className="col-lg-10 text-center">
                            <p className="fs-12">
                                Sudah 10 tahun sejak kami membuka percetakan ini. Terlalu banyak proyek yang kami telah kerjakan: ada banyak pengalaman, inspirasi, tantangan, dan senyuman pelanggan. Berikut ini adalah beberapa hasil karya kami.
                            </p>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row gx-3 mb--4">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                    <div className="col-lg-3 col-6 mb-4" key={item}>
                                        <div className="project-item">
                                            <a className="project-img shadow-sm mb-lg-2 mb-1" href="#project">
                                                <img src="" alt="" className="img-fluid" />
                                            </a>
                                            <div className="fs-12 ps-lg-2 ps-1">
                                                <p><b><a href="#project">Lorem, ipsum dolor</a></b></p>
                                                <p className="text-muted">Oktober 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </ScrollAnimation>

                </section>

                <section className="container pt-60 mb-lg-3" id="tentang-kami">
                    <h1 className="section-title">Tentang Kami</h1>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row gx-0 mb-lg-5 mb-3" id="tentang-imgs">
                            <div className="col-4">
                                <img src="/images/about1.jpeg" className="img-cover filter-gray img-top " height="300" alt="Gambar tentang kami 1" />
                            </div>
                            <div className="col-4">
                                <img src="/images/about3.jpeg" className="img-cover filter-gray" height="300" alt="Gambar tentang kami 1" />
                            </div>
                            <div className="col-4">
                                <img src="/images/about2.jpeg" className="img-cover filter-gray" height="300" alt="Gambar tentang kami 1" />
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row">
                            <div className="col-lg-4 text-lg-end text-center mb-lg-0 mb-3">
                                <h2 className="lh-14 pt-lg-4 mb-3">
                                    "Ada suatu kesenangan saat melihat hasil karya saya"
                                </h2>
                                <p>&mdash; Nanir Hasan</p>
                                <small>
                                    CEO Billy Printing
                            </small>
                            </div>
                            <div className="col-lg-8">
                                <div className="def-p ps-lg-4">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad accusantium soluta eos libero dolores nulla porro, enim recusandae alias nesciunt dolore quia adipisci fugiat quaerat.
                                </p>

                                    <p>
                                        Excepturi esse eum, vel quasi veniam reiciendis voluptas, recusandae error ab impedit quia eligendi corrupti exercitationem vitae. Nostrum, quo perspiciatis ex, nemo illum iste sequi vero dolores quaerat enim animi explicabo officiis temporibus natus laborum, nesciunt sunt.
                                </p>

                                    <p>
                                        Amet delectus asperiores pariatur! Deleniti id voluptatibus impedit, distinctio esse nisi quod, molestiae sed ducimus harum ipsa tenetur nemo iste, numquam omnis consequuntur. Eveniet facilis explicabo nostrum aspernatur quos, corporis tempora nihil saepe ex, aut animi officia hic.
                               </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>


                <section className="container pt-60" id="galeri">
                    <h1 className="section-title mb-lg-4">Galeri</h1>
                    <div className="row justify-content-center mb-lg-5 mb-3">
                        <div className="col-lg-10 text-lg-center">
                            <p className="fs-12">
                                Beberapa kenangan yang sempat kami abadikan
                            </p>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row gx-2 gx-lg-3 mb--3" id="gallery-imgs">
                            {
                                [1, 2, 3, 4, 5, 6,].map(item => (
                                    <div className="col-4 mb-lg-3 mb-2" key={item}>
                                        <div className="gallery-img">
                                            <img src="https://via.placeholder.com/150" alt="Gambar galery" className="img-cover" height="300" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </ScrollAnimation>
                </section>

                <section className="container pt-60" id="partner">
                    <h1 className="section-title mb-lg-5">Partner</h1>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row row-cols-lg-5 row-cols-2" id="partner-imgs">
                            {
                                [1, 2, 3, 4, 5,].map(item => (
                                    <div className="col mb-lg-3 mb-2 gx-lg-4 gx-2" key={item}>
                                        <div className="gallery-img">
                                            <img src="https://via.placeholder.com/150" alt="Gambar galery" className="img-cover" height="100" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </ScrollAnimation>
                </section>

                <section className="container pt-60" id="kontak">
                    <h1 className="section-title">Kontak</h1>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-7 mb-3 mb-lg-0">
                                <div className="w-100">
                                    <iframe className="shadow-sm" title="Peta" width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(billy%20printing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="def-p pt-lg-3">
                                    <p className="mb-0"><b>Billy Printing</b></p>
                                    <p className="mb-2">Jl. Joglo Raya No.9, RT.13/RW.2, Joglo, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11640</p>

                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <p><b>081213456789</b></p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <p><b>081213456789</b></p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                                                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                                            </svg>
                                        </div>

                                        <p>email@email.com</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>
            </main>

            <div>
                <a href="https://wa.me/6281393261259" target="_blank" rel="noreferrer" className="whatsapp-foot btn shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                </a>
            </div>

            <footer className="py-3">
                <div className="container-fluid">
                    <div className="text-end">
                        2021 &mdash; designed & created by Cahya Isra
                    </div>
                </div>
            </footer>

        </>
    )
}