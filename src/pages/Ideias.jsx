import { useState, useEffect } from "react";
import Header from "../components/Header";
import BannerPrincipal from "../components/BannerPrincipal";
import SecaoIdeias from "../components/SecaoIdeias";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

import "../styles/Ideias.css";

const API_BASE_URL = "http://localhost:3001/api"; 

function Ideias() {
    const { user } = useAuth();
    const [error, setError] = useState(null);
    const [ideias, setIdeias] = useState([]); 
    const [loading, setLoading] = useState(true); 

    // ----------------------------------------
    // FUNÇÃO DE CARREGAMENTO DE IDEIAS (READ)
    // ----------------------------------------
    useEffect(() => {
        if (!user || !user.token) { 
            setLoading(false);
            return;
        }
        
        setError(null);

        const fetchIdeias = async () => {
            setLoading(true);
            try {
                const token = user.token; 
                let idea_api_url = `${API_BASE_URL}/ideas`;

                const response_me = await fetch(`${API_BASE_URL}/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json',
                    },
                });

                if (!response_me.ok) {
                    const errorData = await response_me.json();
                    throw new Error(errorData.message || `Erro HTTP ${response_me.status}: Falha ao carregar ideias.`);
                }

                const data_me = await response_me.json();

                if (data_me.role === "admin") {
                    idea_api_url = `${API_BASE_URL}/admin/ideas`;
                }


                const response = await fetch(`${idea_api_url}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `Erro HTTP ${response.status}: Falha ao carregar ideias.`);
                }

                const data = await response.json();
                
                const mappedIdeas = data.map(idea => {

                    let dateObj;


                    if (idea.datetime && idea.datetime._seconds) {
                        dateObj = new Date(idea.datetime._seconds * 1000);
                    } else if (idea.datetime && typeof idea.datetime.toDate === 'function') {
                        dateObj = idea.datetime.toDate();
                    } else if (idea.datetime) {
                        dateObj = new Date(idea.datetime);
                    } else {
                        dateObj = new Date();
                    }
                    
                    return {
                        id: idea.id,
                        userId: idea.userId, // FIX: Store owner ID
                        titulo: idea.title,
                        texto: idea.description,
                        nome: idea.userName || "Você", 
                        data: dateObj.toLocaleDateString("pt-BR"),
                    }
                });
                
                setIdeias(mappedIdeas);
            } catch (err) {
                console.error("Erro ao buscar ideias:", err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchIdeias();
    }, [user]);

    // ----------------------------------------
    // FUNÇÃO DE CRIAÇÃO DE IDEIAS (CREATE)
    // ----------------------------------------
    const handleNovaIdeia = async ({ titulo, descricao }) => {
        if (!user) return;
        setError(null);
        const token = user.token; 

        try {
            const response = await fetch(`${API_BASE_URL}/ideas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ 
                    title: titulo, 
                    description: descricao
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Falha ao criar ideia. HTTP: ${response.status}`);
            }

            const novaIdeiaBackend = await response.json(); 

            const novaIdeiaFront = {
                id: novaIdeiaBackend.id,
                userId: user.uid, // FIX: Owner is current user
                titulo: novaIdeiaBackend.title,
                texto: novaIdeiaBackend.description,
                nome: user.name || user.displayName || "Você",
                data: new Date().toLocaleDateString("pt-BR"), 
            };
            
            setIdeias([novaIdeiaFront, ...ideias]);

            } catch (error) {
            const codigo = error.code || error?.message
            console.error("Erro ao enviar ideia:", codigo);
            setError(codigo);
        }
    };
    
    // ----------------------------------------
    // FUNÇÃO DE EXCLUSÃO DE IDEIAS (DELETE)
    // ----------------------------------------
    const handleDeleteIdeia = async (ideaId) => {
        if (!user || !window.confirm("Tem certeza que deseja excluir esta ideia?")) return;
        
        setError(null);
        const token = user.token; 

        try {
            // FIX: Find owner ID
            const targetIdea = ideias.find(i => i.id === ideaId);
            const ownerId = targetIdea ? targetIdea.userId : null;

            let idea_api_url = `${API_BASE_URL}/ideas/${ideaId}`;

            const response_me = await fetch(`${API_BASE_URL}/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (!response_me.ok) {
                const errorData = await response_me.json();
                throw new Error(errorData.message || `Erro HTTP ${response_me.status}: Falha ao carregar ideias.`);
            }

            const data_me = await response_me.json();

            if (data_me.role === "admin") {
                // FIX: Use owner ID
                const targetUserId = ownerId || user.uid;
                idea_api_url = `${API_BASE_URL}/admin/users/${targetUserId}/ideas/${ideaId}`;
            }

            const response = await fetch(`${idea_api_url}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Falha ao excluir ideia. HTTP: ${response.status}`);
            }

            setIdeias(ideias.filter(idea => idea.id !== ideaId));
            
        } catch (err) {
            console.error("Erro ao excluir ideia:", err.message);
            setError(err.message);
        }
    };

    // ----------------------------------------
    // FUNÇÃO DE API PARA EDIÇÃO (PUT)
    // ----------------------------------------
    const updateIdeaApi = async (ideaId, titulo, descricao) => {
        if (!user) return;
        setError(null);
        const token = user.token;

        try {
            // FIX: Find owner ID
            const targetIdea = ideias.find(i => i.id === ideaId);
            const ownerId = targetIdea ? targetIdea.userId : null;

            let idea_api_url = `${API_BASE_URL}/ideas/${ideaId}`;

            const response_me = await fetch(`${API_BASE_URL}/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (!response_me.ok) {
                const errorData = await response_me.json();
                throw new Error(errorData.message || `Erro HTTP ${response_me.status}: Falha ao carregar ideias.`);
            }

            const data_me = await response_me.json();

            if (data_me.role === "admin") {
                // FIX: Use owner ID
                const targetUserId = ownerId || user.uid;
                idea_api_url = `${API_BASE_URL}/admin/users/${targetUserId}/ideas/${ideaId}`;
            }

            const response = await fetch(`${idea_api_url}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ 
                    title: titulo, 
                    description: descricao 
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `Falha ao atualizar ideia. HTTP: ${response.status}`);
            }
            
            setIdeias(ideias.map(idea => 
                idea.id === ideaId ? { ...idea, titulo: titulo, texto: descricao } : idea
            ));
            
        } catch (err) {
            console.error("Erro ao atualizar ideia:", err.message);
            setError(err.message);
        }
    };

    // ----------------------------------------
    // FUNÇÃO DE EDIÇÃO DE IDEIAS (EDIT - Interface Simples)
    // ----------------------------------------
    const handleEditIdeia = (ideaId, tituloAtual, textoAtual) => {
        const novoTitulo = prompt("Novo Título:", tituloAtual);
        if (novoTitulo === null) return; 

        const novoTexto = prompt("Nova Descrição:", textoAtual);
        if (novoTexto === null) return; 

        if (novoTitulo.trim() !== "" || novoTexto.trim() !== "") {
             updateIdeaApi(ideaId, novoTitulo, novoTexto); 
        } else {
             alert("Título e/ou Descrição não podem estar vazios.");
        }
    };

    const proximaIdeiaNum = ideias.length + 1;

    // Condição de Loading:
    if (loading) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <p>Carregando ideias...</p>
            </div>
        );
    }
    
    // Condição de Erro
    if (error) {
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>
                <h2>❌ Erro ao Carregar/Manipular Ideias</h2>
                <p>Detalhe do Erro: **{error}**</p>
                <button onClick={() => window.location.reload()} style={{ marginTop: '10px', padding: '10px' }}>Tentar Novamente</button>
            </div>
        );
    }

    return (
        <>
        <Header />
        <BannerPrincipal onSubmitIdeia={handleNovaIdeia} proximaIdeiaNum={proximaIdeiaNum} />
        <SecaoIdeias 
            ideias={ideias}
            onEditIdea={handleEditIdeia}     // 👈 Funções passadas para SecaoIdeias
            onDeleteIdea={handleDeleteIdeia} // 👈 Funções passadas para SecaoIdeias
        />
        <Footer />
        </>
    );
}

export default Ideias;