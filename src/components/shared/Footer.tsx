import { Mail, MousePointer } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer id="footer" className="w-full overflow-hidden">
            <div className="bg-gray-950 px-10 pt-8 pb-10 text-gray-400">
                <div className="block md:flex gap-2 mb-4 px-1 md:px-10">
                    <div className="w-xl mb-8 md:mb-0">
                        <div className="w-xs md:w-sm">
                            <p className="mb-3 underline">Identitas Aplikasi</p>
                            <h1 className="pb-3 text-2xl">Expense Tracker App</h1>
                            <p className="text-justify">Solusi cerdas untuk mencatat harian, memantau arus kas, dan mencapai tujuan finansial Anda langsung dari genggaman.</p>
                        </div>
                    </div>
                    <div className="w-sm mb-8 md:mb-0 pl-0 md:pl-6">
                        <p className="mb-4 underline">Hubungi Kami</p>
                        <div className="flex flex-col gap-2 text-md">
                            <div className="flex items-center">
                                <Mail className="mr-2" /> axlhnbi@gmail.com
                            </div>
                            <div className="flex items-center">
                                <LinkedinIcon className="mr-2" /> linkedin.com/axlhnbi
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-4 underline">Informasi Hukum</p>
                        <div className="flex flex-col gap-2">
                            <div className="cursor-pointer">Kebijakan Privasi</div>
                            <div className="cursor-pointer">Syarat & Ketentuan</div>
                        </div>
                    </div>
                </div>
                <div className="text-center border-t border-gray-700 pt-4">
                    <p className="">&copy; {currentYear} axlhnbi. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}