import Link from "next/link";

export default function NavbarMenu(){
    return (
        <div>
                    <ul className='hidden md:flex linkColor'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Anasayfa</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about'>Hakkımızda</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills'>Sertfikalar</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#projects'>Projelerimiz</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/resume'>Kariyer</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact'>İletişim</Link>
                        </li>
                    </ul>
                </div>
    )
}