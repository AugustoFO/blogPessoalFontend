import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            <div className='bg-ebony text-white flex justify-center px-4 rounded-lg w-4/5 mx-auto shadow-lg mt-5'>

                <div className="container flex justify-between text-lg p-4 text-sm sm:text-base md:text-lg lg:text-xl">
                    <Link to='/home' className="font-bold">Blog Pessoal</Link>

                    <div className='flex gap-x-5'>
                        <ul className="flex gap-x-3">
                            <li>
                                <Link to='' /*onClick={logout}*/ className='hover:underline'>Postagens</Link>
                            </li>
                            <li>
                                <Link to='/temas' className='hover:underline'>Temas</Link>
                            </li>
                            <li>
                                <Link to='' /*onClick={logout}*/ className='hover:underline'>Cadastrar tema</Link>
                            </li>
                            <li>
                                <Link to='' /*onClick={logout}*/ className='hover:underline'>Perfil</Link>
                            </li>
                            <li>
                                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar