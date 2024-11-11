import React from "react";
import SocialIcon from "./SocialIcon";

function Footer(){
    return(
        <footer className="bg-black text-white py-16 h-fit">
            <div className="container mx-auto px-4 lg:px-20 flex flex-wrap justify-between text-white">
                <div className="flex flex-wrap justify-between items-start mx-auto max-w-xxl h-full">
                    {/* Logo a kontaktní údaje */}
                    <div className="">
                        <div className="flex flex-row mb-6">
                            <img src="./images/logo.png" alt="Occamy Logo" className="mb-4 mr-2 w-8" /> {/* Logo */}
                            <p className="font-black size-6 leading-8 ">OCCAMY</p>
                        </div>
                        <p className="mb-2 font-bold size-6 leading-6">Adresa:</p>
                        <p className="pb-4">1. máje 870/14 460 07, Liberec III</p>
                        
                        <p className="mt-4 mb-2 font-bold size-6 leading-6 w-[19rem]">Fakturační údaje:</p>
                        <p className="pb-4">IČO: 10866591</p>

                        <p className="mt-4 mb-2 font-bold size-6 leading-6">Kontakty:</p>
                        <p>Telefon: 775 297 565</p>
                        <p>E-mail: info@occamy.cz</p>
                    </div>

                    {/* Užitečné odkazy */}
                    <div className="mt-10 lg:mt-0">
                        <h3 className="font-black size-6 mb-8 w-[15rem]">UŽITEČNÉ LINKY</h3>
                        <ul>
                            <li className="mb-4"><a href="/" className="hover:text-blue-600">Domů</a></li>
                            <li className="mb-4"><a href="/#slider" className="hover:text-blue-600">Služby</a></li>
                            <li className="mb-4"><a href="/reference" className="hover:text-blue-600">Reference</a></li>
                            <li className="mb-4"><a href="/o-nas" className="hover:text-blue-600">O nás</a></li>
                        </ul>
                    </div>

                    {/* Sociální sítě */}
                    <div className="mt-10 lg:mt-0">
                        <h3 className="font-black size-6 mb-6 w-[15rem]">NAJDETE NÁS TAKÉ ZDE</h3>
                        <div className="flex space-x-4 items-center justify-center bg-white rounded-2xl py-5 gap-5 px-16">
                            <SocialIcon title={"Facebook"} link={"https://www.facebook.com/OccamyBot"}/>
                            <SocialIcon title={"Instagram"} link={"https://www.instagram.com/occamy_design/"}/>
                            <SocialIcon title={"Linkedin"} link={"https://www.linkedin.com/company/occamy/about/"}/>
                        </div>
                    </div>

                    {/* Spodní část */}
                    <div className="container mt-16 text-white text-xs">
                        <p>Při poskytování služeb jsou používány soubory cookies. Používáním webu vyjadřujete souhlas. © 2017 – 2024 OCCAMY</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;