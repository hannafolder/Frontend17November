import React, { useState } from 'react';

export default function ChatWidget() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <>
            {/* Tombol chat berada di sisi kiri layar */}
            <button
                type="button"
                className="trip-chat-button"
                data-bs-toggle="modal"
                data-bs-target="#tripChatModal"
                aria-label="Open chat form"
            >
                <i className="bi bi-chat-dots-fill" />
            </button>

            {/* Form chat menggunakan Bootstrap Modal */}
            <div
                className="modal fade"
                id="tripChatModal"
                tabIndex="-1"
                aria-labelledby="tripChatModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content trip-chat-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tripChatModalLabel">
                                Silakan berikan pesan di sini!
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                {submitted && (
                                    <div className="alert alert-success" role="alert">
                                        Pesan berhasil dikirim!
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label htmlFor="chatName" className="form-label">Nama</label>
                                    <input
                                        id="chatName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama Anda"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="chatEmail" className="form-label">Email</label>
                                    <input
                                        id="chatEmail"
                                        type="email"
                                        className="form-control"
                                        placeholder="nama@example.com"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="chatMessage" className="form-label">Isi Pesan</label>
                                    <textarea
                                        id="chatMessage"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Tuliskan pesan Anda di sini..."
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Batal
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Kirim Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
