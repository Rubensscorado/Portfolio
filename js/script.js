document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    // ATENÇÃO: Substitua este e-mail pelo seu e-mail de destino!
    const DESTINATARIO = 'rubensscorado@gmail.com'; 

    if (form) {
        form.addEventListener('submit', (event) => {
            // 1. Evita que a página recarregue
            event.preventDefault(); 
            
            const formData = new FormData(form);
            
            // 2. Montar o Corpo da Mensagem
            let bodyContent = 'Detalhes do Contato:\n\n';
            
            for (const [key, value] of formData.entries()) {
                const readableKey = key.charAt(0).toUpperCase() + key.slice(1);
                bodyContent += `${readableKey}: ${value}\n`;
            }

            // 3. Definir Assunto (usando o interesse selecionado)
            const assunto = 'Novo Contato - Portfólio Web - Interesse em ' + formData.get('interesse');

            // 4. Codificar os Componentes (ESSENCIAL para o mailto funcionar)
            const encodedSubject = encodeURIComponent(assunto);
            const encodedBody = encodeURIComponent(bodyContent);

            // 5. Montar e Abrir o Cliente de E-mail
            const mailtoLink = `mailto:${DESTINATARIO}?subject=${encodedSubject}&body=${encodedBody}`;
            window.location.href = mailtoLink;
        });
    }
});