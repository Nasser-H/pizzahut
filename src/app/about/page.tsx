import Image from 'next/image'
import AboutImage from '../../assets/images/about.jpg'

export default function About() {
  return <>
        <section className="px-6 md:px-16 py-16 bg-[#fdf5f3]" dir='rtl'>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-main mb-6">
                    مرحبًا بك في بيتزا هت 🍕
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    بيتزا هت هي واحدة من أكبر سلاسل مطاعم البيتزا في العالم. بنقدملك تجربة بيتزا فريدة من نوعها باستخدام أجود المكونات ووصفاتنا السرية اللي بتخلّي كل قطعة بيتزا لا تقاوم!
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    من يومنا الأول سنة 1958، هدفنا إننا نقدم بيتزا طازجة، لذيذة، ومتنوعة، توصل لبيتك بسرعة وجودة عالية.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white shadow-sm p-4 rounded-xl text-center">
                    <h3 className="text-2xl text-main font-bold">100+</h3>
                    <p className="text-gray-600 text-sm">فرع في مصر</p>
                    </div>
                    <div className="bg-white shadow-sm p-4 rounded-xl text-center">
                    <h3 className="text-2xl text-main font-bold">1958</h3>
                    <p className="text-gray-600 text-sm">سنة التأسيس</p>
                    </div>
                </div>
                </div>

                <div className="w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                    src={AboutImage}
                    alt="بيتزا هت"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                />
                </div>
            </div>
        </section>
    </>
}
