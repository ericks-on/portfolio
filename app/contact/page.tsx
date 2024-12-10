import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="pt-20 flex flex-col gap-6 h-screen justify-center">
            <h1 className="text-6xl text-center">Get in touch</h1>
            <div className="flex flex-col items-center gap-4">
                <p className="text-center text-lg">I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn.</p>
                <div className="flex gap-6">
                    <Link href="mailto:mutisyaerickson@gmail.com">
                        <FaEnvelope className="text-4xl" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/erick-mutisya/" target="blank">
                        <FaLinkedinIn className="text-4xl text-blue-500" />
                    </Link>
                    <Link href="https://www.github.com/ericks-on" target="blank">
                        <FaGithub className="text-4xl" />
                    </Link>
                    <Link href="https://www.instagram.com/erickson_mbuvi" target="blank">
                        <FaInstagram className="text-4xl" />
                    </Link>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <p className="text-4xl">Email:</p>
                    <p className="text-lg">mutisyaerickson@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

            