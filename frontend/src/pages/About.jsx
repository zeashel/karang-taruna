import Carousel from "../components/Carousel";

export default function About() {
    return (
        <>
            <Carousel />
            <div className="px-3 px-md-5">
                <h1 className="mb-4">About</h1>
                <p>
                    D.Y.D.A. (Digital Youth Desa Anggrek) adalah platform
                    digital yang dirancang sebagai panduan bertukang bagi pemuda
                    Karang Taruna Desa Anggrek. Platform ini hadir untuk
                    membantu generasi muda meningkatkan keterampilan praktis
                    dalam bidang DIY (Do It Yourself) dan perbaikan sederhana.
                </p>
                <p>
                    Melalui D.Y.D.A., pengguna dapat mengakses berbagai konten
                    edukatif berupa artikel dan video tutorial yang membahas
                    cara melakukan perbaikan dan pekerjaan bertukang, mulai dari
                    tingkat dasar hingga menengah. Konten disusun secara
                    sederhana dan mudah dipahami agar dapat dipraktikkan
                    langsung oleh pengguna.
                </p>
                <p>
                    Untuk menjaga kualitas dan personalisasi layanan, pengguna
                    diwajibkan melakukan registrasi dan login sebelum mengakses
                    konten yang tersedia. Dengan demikian, D.Y.D.A. diharapkan
                    dapat menjadi sarana belajar digital yang bermanfaat,
                    meningkatkan kreativitas, kemandirian, dan keterampilan
                    pemuda Karang Taruna di Desa Anggrek.
                </p>
            </div>
        </>
    );
}
