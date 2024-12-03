import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Modal, Button, Box } from '@mui/material';
import './MainPage.css';
import booksData from './dishes.json';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Rating from '@mui/material/Rating';

const App = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        
        const allBooks = Object.values(booksData).flatMap(category => category.books);
        setBooks(allBooks);
    }, []);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const handleCloseModal = () => {
        setSelectedBook(null);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60%",
        height: "450px",
        borderRadius: 2,
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 100,
        p: 6,
    };

    return (
        <div>
            <main>
                <section className="intro">
                    <p>Descubra um mundo de leitura gratuita e ilimitada! Nosso site é dedicado a oferecer uma vasta coleção de livros em domínio público que você pode baixar e desfrutar sem custos. Nossa missão é tornar a literatura acessível a todos, promover a leitura e compartilhar o amor pelos livros.</p>
                    <p>Aqui, você encontrará clássicos da literatura, obras infantis encantadoras, e muitos outros tesouros literários. Navegue por nossas categorias, baixe seus títulos favoritos e mergulhe em novas aventuras a cada página.</p>
                    <p className="cta">Comece sua jornada literária agora!</p>
                </section>

                <div className="cards-container">
                    {books.map((book, index) => (
                        <Card key={index} onClick={() => handleBookClick(book)} className="card">
                            <CardMedia component="img" className="card-media" image={book.image} alt={book.name} />
                            <CardContent>
                                <Typography variant="h6">{book.name}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {selectedBook && (
    <Modal open={Boolean(selectedBook)} onClose={handleCloseModal}>
        <Box sx={style}>
            <Box
                display="flex" 
                height="100%"
                width="100%" 
                flexDirection="row" 
                justifyContent="space-evelyn" 
                alignItems="center" 
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    max-width="30%" 
                >
                    <img
                        src={selectedBook.image}
                        alt={selectedBook.name}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Rating />
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    width="55%" 
                    justifyContent="center"
                    padding="5%"
                >
                    <Typography variant="h6">{selectedBook.name}</Typography>
                    <Typography sx={{ mt: 2 }} textAlign="center" width="100%" variant="body1" component="p" margin="0.3rem">
                        {selectedBook.description}
                    </Typography>
                    <Typography sx={{ mt: 2 }} textAlign="center" width="100%" variant="body1" component="p" margin="0.3rem">
                        {selectedBook.autor}
                    </Typography>

                    <Box
                        height="10%"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <a href={selectedBook.recipeLink}>
                            <Button
                                sx={{ mt: 2 }}
                                display="flex"
                                flexDirection="column-reverse"
                                width="100%"
                                height="100%"
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Baixar Livro
                            </Button>
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Modal>
)}

                <section className="notice">
                    <p className="cta">Atenção:</p>
                    <p>Todos os livros disponíveis neste site estão em domínio público ou têm permissões de distribuição gratuita. Respeitamos os direitos autorais e incentivamos todos os leitores a fazerem o mesmo.</p>
                    <p>Se precisar de ajuda ou tiver alguma dúvida, estamos sempre à disposição para ajudar.</p>
                    <p className="cta">Email para contato</p>
                    <p>Livrariapuplica@gmail.com</p>
                </section>
            </main>
        </div>
    );
};

export default App;