(function () {
    const obtenerHora = () => new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    const initChat = () => {
        const launcher = document.getElementById('chat-launcher');
        const windowChat = document.getElementById('chat-window');
        const btnCerrar = document.getElementById('btn-cerrar');
        const btnEnviar = document.getElementById('btn-enviar');
        const inputEl = document.getElementById('chat-input');
        const mensajesEl = document.getElementById('chat-mensajes');
        const hBienvenida = document.getElementById('hora-bienvenida');

        if (hBienvenida) hBienvenida.textContent = obtenerHora();
        if (!launcher || !windowChat) return;

        launcher.onclick = (e) => {
            e.preventDefault();
            windowChat.classList.toggle('hidden');
        };

        btnCerrar.onclick = (e) => {
            e.preventDefault();
            windowChat.classList.add('hidden');
        };

        const enviar = () => {
            let txt = inputEl.value.trim();
            if (!txt) return;

            let msg = document.createElement('div');
            msg.className = 'burbuja usuario';
            // Se añade la hora debajo del texto
            msg.innerHTML = `<div><div class="burbuja-texto">${txt}</div><div class="burbuja-hora">${obtenerHora()}</div></div>`;
            mensajesEl.appendChild(msg);

            inputEl.value = '';
            mensajesEl.scrollTop = mensajesEl.scrollHeight;
        };

        if (btnEnviar) btnEnviar.onclick = enviar;
        if (inputEl) {
            inputEl.onkeydown = (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    enviar();
                }
            };
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }
})();