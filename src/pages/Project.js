import { useParams } from "react-router-dom";
import Vector from '../assets/img/vector.jpg'
import TemanPindahImage1 from '../assets/projects/temanpindah/screenshot.png'
import TemanPindahImage2 from '../assets/projects/temanpindah/design_ui_ux.png'
import TemanPindahImage3 from '../assets/projects/temanpindah/slicing_html.png'
import Pykotes from '../assets/projects/pykotes/screenshot.jpg'
import FindJobs from '../assets/projects/findjobs/screenshot.png'

const Project = () => {
    const { id } = useParams();
    if(id === 'temanpindah'){
        return (
            <>
                <section id="navbar" className="max-w-5xl md:mx-auto mx-5">
                    <div class="pt-10">
                        <div class="md:text-md text-sm font-light"><span class="text-red-600">Home</span> / <span class="text-red-600">Projects</span> / TemanPindah Company Profile</div>
                        <div class="md:text-6xl text-4xl font-extrabold mt-5 mb-12 lg:space-y-5">
                            <div class="">TemanPindah Company Profile</div>
                        </div>
                    </div>
                </section>
                <section id="navbar" className="max-w-5xl md:mx-auto mx-5">
                    <img src={TemanPindahImage1} class="w-full object-cover rounded mb-10"/>
                    
                    <div class="md:mx-20 md:text-lg text-gray-700 font-light">
                        <p class="leading-8 my-4">TemanPindah adalah sebuah perusahaan yang bergerak di pindah jasa pindahan barang, baik itu untuk kebutuhan rumah, kantor, apartemen, piano, dan bahkan atm. Selain jasa pindahan, TemanPindah juga memiliki jasa kargo dan logistik</p>

                        <p class="leading-8 my-4">TemanPindah mencakup semua area diseluruh Indonesia baik itu JaBoDeTaBek, Keluar Kota, dan bahkan Antar Pulau.</p>
                        
                        <h1 class="text-4xl font-bold text-black mt-10">Permintaan</h1>
                        <p class="leading-8 my-4">Tim kami dihubungi oleh pak Syamsul selaku owner dari <strong>temanpindah</strong> untuk membantu membuat dan mengelola website milik mereka, baik itu dari segi Development (Pembuatan) dan juga digital marketing berupa SEO (Search Engine Optimization)</p>

                        <h1 class="text-4xl font-bold text-black mt-10">Tantangan</h1>
                        <p class="leading-8 my-4">Jasa pindahan adalah sebuah bisnis yang tidak pernah kami kerjakan sebelumnya, dan ini pertama kalinya kami menerima sebuah permintaan untuk men-develop sebuah website untuk bisnis ini, jadi menurut kami ini adalah sebuah tantangan yang menarik. </p>


                        <h1 class="text-4xl font-bold text-black mt-10">Proses Pengerjaan</h1>
                        <p class="leading-8 my-4">Kami memiliki beberapa tahapan dalam proses pengerjaan ini untuk mempermudah kami selaku tim membagi pekerjaan dan juga bagi client untuk memantau progres permintaan sudah sampai mana.</p>

                        <p class="leading-8 my-4">Berikut tahapan-tahapannya : </p>
                        <h1 class="text-xl font-bold text-black mt-10">Observasi</h1>
                        <p class="leading-8 my-4">TemanPindah adalah perusahaan yang bisa dibilang cukup baru, yang dimana minim sekali informasi yang kami terima, jadi kami cukup kesulitan untuk mengumpulkan informasi, tapi berusaha mencoba untuk memaksimalkan informasi yang kami dapat. Bahkan kami juga ikut serta untuk menambahkan beberapa konten pendukung.</p>
                        <h2 class="text-xl font-bold text-black mt-10">Design UI/UX</h2>
                        <img src={TemanPindahImage2} class="my-4" />
                        <p class="leading-8 my-4">Setelah proses pengumpulan informasi, kami melakukan pembuatan sebuah desain UI (User Interface) dan UX (User Experience) untuk hasil website yang diinginkan, dengan menggunakan alat prototyping bernama <strong>Figma</strong></p>

                        <p class="leading-8 my-4">Saat ini kami tidak memberikan batas untuk melakukan revisi pada bagian desain UI/UX, jadi bisa melakukan revisi berapa kalipun.</p>

                        <h2 class="text-xl font-bold text-black mt-10">Slicing HTML</h2>
                        <img src={TemanPindahImage3} class="my-4" />
                        <p class="leading-8 my-4">Setelah desain Ui/Ux mencapai tahap deal, kami langsung melakukan proses implementasi slicing HTML, dengan memecah dalam beberapa bagian section.</p>

                        <h2 class="text-2xl font-bold text-black mt-10">Convert ke Template Wordpress</h2>
                        <p class="leading-8 my-4">Dengan mengikuti <a href="https://developer.wordpress.org/themes/basics/template-hierarchy/" class="text-red-600 font-semibold">Template Hierarchy</a> dari wordpress. Kami berusaha membuat template yang dapat digunakan kembali untuk menghasilkan halaman web yang baik dan benar sesuai ketentuan.</p>
                        
                        <h1 class="text-4xl font-bold text-black mt-10">Pengecekan</h1>
                        <p class="leading-8 my-4">Setelah proses pengerjaan selesai kami melakukan tes terhadap semua page yang dibuat, juga apakah semua berfungsi dengan baik. Kami memberikan support 7/24 jam jika ada kendala atau bug yang disebabkan oleh aplikasi yang kami buat.</p>

                        <h1 class="text-4xl font-bold text-black mt-10">Penilaian</h1>
                        <div class="md:flex items-start border border-gray-200 my-4 p-5">
                            <img src={Vector} class="rounded md:w-20 w-24"/>
                            <div class="md:mx-5">
                                <p class="text-base md:my-0 my-4">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non consequuntur eum? Unde eum est voluptate vel quod, eius iure quos eos laudantium cum ducimus nostrum accusantium nisi, illo veritatis."</p>

                                <div class="md:text-right">
                                    <p class="font-semibold">Syamsul Huda</p>
                                    <p class="text-red-600 text-sm">Owner temanpindah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else if(id === 'pykotes'){
        return (
        <>
        <div className="max-w-5xl md:mx-auto mx-5">
            <div className="pt-10">
                <div className="md:text-md text-sm font-light"><span className="text-red-600">Home</span> / <span className="text-red-600">Projects</span> / Psychological Test Online</div>
                <div className="md:text-6xl text-4xl font-extrabold mt-5 mb-12 lg:space-y-5">
                    <div className="">Psychological Test Online</div>
                </div>
            </div>

                <img src={Pykotes} className="w-full object-cover rounded mb-10" />
                
                <div className="md:mx-20 md:text-lg text-gray-700 font-light">
                    <p className="leading-8 my-4">Pykotes adalah sebuah aplikasi berbasis website untuk melihat hasil dari kepribadian seseorang melalui berbagai macam tes. Diantaranya terdapat tes mainstream seperti MBTI dan DISC. Tapi saat anda membaca tulisan ini, pykotes baru tersedia tes MBTI saja.</p>
                </div>
        </div>
        </>
        )
    } else if(id === 'find-jobs'){
        return (
            <>
            <div className="max-w-5xl md:mx-auto mx-5">
            <div className="mt-16 md:pt-10">
                <div className="md:text-md text-sm font-light"><span className="text-red-600">Home</span> / <span className="text-red-600">Case Study</span> / Ui/Ux Find Jobs Design Mobile Apps</div>
                <div className="md:text-6xl text-4xl font-extrabold mt-5 mb-12 lg:space-y-5">
                    <div className="">Ui/Ux Find Jobs Design Mobile Apps</div>
                </div>
            </div>

                <img src={FindJobs} className="w-full object-cover" />
                
                <div className="md:mx-20 md:text-lg text-gray-700 font-light space-y-5">
                    <p className="leading-10"></p>
                </div>
            </div>
            </>
        )
    }
}

export default Project;