"use client"
import Image from "next/image";

export default function Home() {
    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="">
                <Image
                    className="mx-auto"
                    src="/images/logo.jpg"
                    alt="logo"
                    width={300}
                    height={250}
                    priority
                />
                <div className="mx-auto md:w-3/4 sm:w-5/6 text-center">
                    <div className="font-bold text-4xl mb-8">Embrace the Healing Power of Ayurveda</div>
                    <div className="font-medium w-2/3 mx-auto mb-10">
                        Our Ayurvedic products are coming soon to help you achieve a
                        healthier, more balanced lifestyle. Stay tuned as we prepare to launch
                        a range of natural solutions designed to harmonize body, mind, and soul.
                    </div>
                    <div className="font-bold text-5xl text-green-800">Launching Soon...</div>
                    <button
                        onClick={() => window.location.href = "https://avantika-nayak.netlify.app/testing-new"}
                        className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition"
                    >
                        Redirect
                    </button>

                </div>
            </main>
        </div>
    );
}
