import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../fetcher";

const UsuarioDetalhe = () => {
    const { id } = useParams();

    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function buscarUsuario() {
            try {
                setCarregando(true);
                const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher);

                setUsuario(data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            } finally {
                setCarregando(false);
            }
        }
    }, [id]);

    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    <li>Nome: {usuario.name}</li>
                    <li>Email: {usuario.email}</li>
                </ul>
            )}
        </div>
    )
}

export default UsuarioDetalhe;